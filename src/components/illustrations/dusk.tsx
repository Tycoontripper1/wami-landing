import type { SVGProps } from "react";
import { cx } from "@/lib/cx";

/* The "dusk" style: flat shapes with no outline. Depth comes from giving every
   form a lit face and a shaded face, and the whole scene is brand teal against
   brand amber — complementary colours — with a little leaf green for life. It sits
   beside the outlined 96px drawings; it never replaces them. */

const tones = {
  sky: "fill-dusk-sky",
  ember: "fill-dusk-ember",
  cloud: "fill-dusk-cloud",
  cloudSoft: "fill-dusk-cloud-soft",
  blue: "fill-dusk-teal",
  deep: "fill-dusk-teal-deep",
  night: "fill-dusk-teal-night",
  light: "fill-dusk-teal-light",
  glass: "fill-dusk-glass",
  brown: "fill-dusk-brown",
  leaf: "fill-dusk-leaf",
  leafLight: "fill-dusk-leaf-light",
  paper: "fill-surface",
} as const;

type DuskTone = keyof typeof tones;
type Flat<T> = Omit<SVGProps<T>, "fill"> & { tone: DuskTone };

function Rect({ tone, className, ...rest }: Flat<SVGRectElement>) {
  return <rect {...rest} className={cx(tones[tone], className)} />;
}
function Path({ tone, className, ...rest }: Flat<SVGPathElement>) {
  return <path {...rest} className={cx(tones[tone], className)} />;
}
function Oval({ tone, className, ...rest }: Flat<SVGEllipseElement>) {
  return <ellipse {...rest} className={cx(tones[tone], className)} />;
}

const GROUND = 300;

/* One building: lit front, shaded right face, a light roof slab. */
function Tower({ x, top, w, side, front = "blue" }: { x: number; top: number; w: number; side: number; front?: DuskTone }) {
  const height = GROUND - top;
  return (
    <g>
      <Rect tone={front} x={x} y={top} width={w} height={height} />
      <Rect tone="deep" x={x + w} y={top} width={side} height={height} />
      <Rect tone="light" x={x - 5} y={top - 9} width={w + side + 10} height={9} rx={2} />
    </g>
  );
}

/* A grid of windows; a few are lit warm, like the lamps in the references. */
function Windows({ x, y, cols, rows, step = 24 }: { x: number; y: number; cols: number; rows: number; step?: number }) {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const warm = (r * 3 + c * 2) % 5 === 0;
      cells.push(
        <Rect key={`${r}-${c}`} tone={warm ? "cloudSoft" : "glass"} x={x + c * step} y={y + r * (step + 6)} width={step - 10} height={step - 4} rx={3} />,
      );
    }
  }
  return <g>{cells}</g>;
}

/* A terracotta pot with leaves — dark green against blue is the references' signature. */
function Plant({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <Oval tone="leaf" cx={-9} cy={-30} rx={7} ry={16} transform="rotate(-24 -9 -30)" />
      <Oval tone="leafLight" cx={9} cy={-31} rx={7} ry={17} transform="rotate(22 9 -31)" />
      <Oval tone="leaf" cx={0} cy={-36} rx={7} ry={19} />
      <Path tone="ember" d="M-13 -16 H13 L9 0 H-9 Z" />
      <Rect tone="brown" x={-15} y={-20} width={30} height={6} rx={2} />
    </g>
  );
}

function Sparkle({ x, y, r = 10 }: { x: number; y: number; r?: number }) {
  const d = `M${x} ${y - r} Q${x} ${y} ${x + r} ${y} Q${x} ${y} ${x} ${y + r} Q${x} ${y} ${x - r} ${y} Q${x} ${y} ${x} ${y - r}Z`;
  return <Path tone="paper" d={d} />;
}

/* Soft, flat clouds: three overlapping pills. They float on a staggered loop. */
function Cloud({ x, y, scale = 1, delay = "0s", soft = false }: { x: number; y: number; scale?: number; delay?: string; soft?: boolean }) {
  const tone: DuskTone = soft ? "cloudSoft" : "cloud";
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="animate-float" style={{ animationDelay: delay }}>
        <Rect tone={tone} x={0} y={14} width={150} height={26} rx={13} />
        <Rect tone={tone} x={26} y={0} width={86} height={26} rx={13} />
        <Rect tone={tone} x={64} y={22} width={110} height={20} rx={10} />
      </g>
    </g>
  );
}

/* The Wami pin as a rooftop beacon, with a ring that keeps pulsing outward. */
function Beacon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(1.7)`}>
      <circle
        r={16}
        cy={-26}
        className="animate-beacon fill-none stroke-surface"
        strokeWidth={3}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <Path tone="night" d="M0 0 L-13 -20 A16 16 0 1 1 13 -20 Z" />
      <circle r={6} cy={-28} className="fill-dusk-sky" />
    </g>
  );
}

/* A small pin over a shop: "a creative is here". Floats on a staggered loop. */
function ShopPin({ x, y, delay }: { x: number; y: number; delay: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g className="animate-float" style={{ animationDelay: delay }}>
        <Path tone="paper" d="M0 -4 L-8 -18 A10 10 0 1 1 8 -18 Z" />
        <circle r={3.5} cy={-23} className="fill-dusk-ember" />
      </g>
    </g>
  );
}

/* Striped shop awning across a building's front. */
function Awning({ x, y, w }: { x: number; y: number; w: number }) {
  const stripes = Math.round(w / 14);
  const width = w / stripes;
  return (
    <g>
      {Array.from({ length: stripes }, (_, i) => (
        <Rect key={i} tone={i % 2 ? "cloud" : "ember"} x={x + i * width} y={y} width={width} height={12} rx={i === 0 || i === stripes - 1 ? 3 : 0} />
      ))}
    </g>
  );
}

/* One sign per category, drawn flat on the building face. */
function CameraSign({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Rect tone="paper" x={x + 8} y={y - 6} width={16} height={8} rx={3} />
      <Rect tone="paper" x={x} y={y} width={48} height={32} rx={8} />
      <circle cx={x + 24} cy={y + 17} r={11} className="fill-dusk-teal-night" />
      <circle cx={x + 24} cy={y + 17} r={6} className="fill-dusk-teal-light" />
      <circle cx={x + 40} cy={y + 8} r={2.5} className="fill-dusk-ember" />
    </g>
  );
}
function FrameSign({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Rect tone="paper" x={x} y={y} width={46} height={36} rx={4} />
      <Rect tone="cloudSoft" x={x + 6} y={y + 6} width={34} height={24} rx={2} />
      <circle cx={x + 29} cy={y + 14} r={5} className="fill-dusk-ember" />
      <Path tone="leaf" d={`M${x + 6} ${y + 30} L${x + 18} ${y + 17} L${x + 28} ${y + 30} Z`} />
    </g>
  );
}
function HangerSign({ x, y }: { x: number; y: number }) {
  return (
    <g className="fill-none stroke-surface" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
      <path d={`M${x + 18} ${y + 8} C${x + 18} ${y} ${x + 27} ${y} ${x + 27} ${y + 7} C${x + 27} ${y + 12} ${x + 22} ${y + 13} ${x + 22} ${y + 17}`} />
      <path d={`M${x + 22} ${y + 17} L${x + 3} ${y + 30} H${x + 41} Z`} />
    </g>
  );
}
function ScreenSign({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Rect tone="paper" x={x} y={y} width={44} height={30} rx={5} />
      <Path tone="ember" d={`M${x + 18} ${y + 8} L${x + 31} ${y + 15} L${x + 18} ${y + 22} Z`} />
      <Rect tone="paper" x={x + 17} y={y + 31} width={10} height={6} />
      <Rect tone="paper" x={x + 9} y={y + 36} width={26} height={4} rx={2} />
    </g>
  );
}
function MirrorSign({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <Oval tone="paper" cx={x + 18} cy={y + 20} rx={17} ry={22} />
      <Oval tone="glass" cx={x + 18} cy={y + 20} rx={12} ry={17} />
      <Path tone="paper" d={`M${x + 12} ${y + 40} h12 v6 h-12 Z`} />
      <Path tone="paper" d={`M${x + 24} ${y + 10} l6 -6 l3 3 l-6 6 Z`} />
    </g>
  );
}

/** The closing scene: a small town at dusk, drawn wide so it can crop to any width. */
export function DuskScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMidYMax slice"
      className={cx("block w-full", className)}
      aria-hidden="true"
    >
      <Cloud x={80} y={40} delay="0s" />
      <Cloud x={930} y={26} scale={0.8} delay="-2.4s" soft />
      <Cloud x={720} y={96} scale={0.55} delay="-4.2s" soft />
      <Cloud x={250} y={118} scale={0.6} delay="-1.3s" />
      <Sparkle x={330} y={46} r={12} />
      <Sparkle x={880} y={110} r={9} />
      <Sparkle x={1110} y={70} r={13} />
      <Sparkle x={470} y={150} r={7} />

      {/* back row, so the front row reads as nearer — each is a different kind of creative */}
      <Tower x={20} top={196} w={92} side={30} front="deep" />
      <Tower x={1070} top={176} w={84} side={30} front="deep" />
      <MirrorSign x={1082} y={196} />
      <Tower x={210} top={176} w={84} side={28} front="deep" />
      <HangerSign x={230} y={200} />
      <Tower x={920} top={196} w={92} side={30} front="deep" />
      <ScreenSign x={944} y={222} />

      {/* the tall tower is Wami itself, with its stacked top block and the pin beacon */}
      <Tower x={540} top={78} w={120} side={40} />
      <Tower x={572} top={36} w={64} side={24} front="light" />
      <Windows x={558} y={100} cols={4} rows={5} />
      <Beacon x={604} y={30} />

      {/* photographer's studio */}
      <Tower x={376} top={132} w={112} side={36} />
      <CameraSign x={408} y={150} />
      <Windows x={392} y={198} cols={3} rows={2} />
      <Awning x={376} y={262} w={112} />

      {/* gallery, with the orange stairs and door from the first reference */}
      <Tower x={738} top={150} w={130} side={38} />
      <FrameSign x={760} y={168} />
      <Windows x={820} y={170} cols={2} rows={1} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Rect key={i} tone="ember" x={768 + i * 16} y={GROUND - (i + 1) * 12} width={80 - i * 16} height={(i + 1) * 12} />
      ))}
      <Rect tone="brown" x={848} y={GROUND - 60} width={8} height={60} />
      <Rect tone="night" x={826} y={GROUND - 100} width={26} height={40} rx={13} />

      <Rect tone="night" x={584} y={262} width={32} height={38} rx={16} />
      <Rect tone="cloudSoft" x={598} y={278} width={5} height={5} rx={2.5} />

      {/* a pin over every shop: creatives, pinned near you */}
      <ShopPin x={432} y={123} delay="0s" />
      <ShopPin x={803} y={141} delay="-1.1s" />
      <ShopPin x={252} y={167} delay="-2.2s" />
      <ShopPin x={966} y={187} delay="-3.3s" />
      <ShopPin x={1112} y={167} delay="-4.4s" />

      <Plant x={514} y={GROUND} />
      <Plant x={700} y={GROUND} scale={0.8} />
      <Plant x={355} y={GROUND} scale={0.9} />
      <Plant x={898} y={GROUND} />
      <Plant x={190} y={GROUND} scale={0.8} />
      <Plant x={1048} y={GROUND} scale={0.85} />

      {/* the street, which the page's dark-teal footer carries on from */}
      <Rect tone="night" x={0} y={GROUND} width={1200} height={20} />
    </svg>
  );
}
