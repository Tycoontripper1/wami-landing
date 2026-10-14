import { useId, type SVGProps } from "react";
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
function Tower({
  x,
  top,
  w,
  side,
  front = "blue",
  shade = "deep",
}: {
  x: number;
  top: number;
  w: number;
  side: number;
  front?: DuskTone;
  shade?: DuskTone;
}) {
  const height = GROUND - top;
  return (
    <g>
      <Rect tone={front} x={x} y={top} width={w} height={height} />
      <Rect tone={shade} x={x + w} y={top} width={side} height={height} />
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

/* A cloud is round lobes on a flat base, with circles cut out of its
   underside — the cut-outs scallop the edge and make it read as a real cloud
   rather than a pill. They are cut with a mask, so it works over any colour. */
function Cloud({ x, y, scale = 1, delay = "0s", soft = false }: { x: number; y: number; scale?: number; delay?: string; soft?: boolean }) {
  const id = `cloud-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="animate-float" style={{ animationDelay: delay }}>
        <mask id={id} maskUnits="userSpaceOnUse" x={0} y={0} width={170} height={70}>
          <g className="fill-white">
            <circle cx={34} cy={40} r={20} />
            <circle cx={66} cy={28} r={26} />
            <circle cx={104} cy={34} r={22} />
            <circle cx={138} cy={42} r={17} />
            <rect x={30} y={38} width={110} height={22} />
          </g>
          <g className="fill-black">
            <circle cx={46} cy={64} r={9} />
            <circle cx={80} cy={66} r={11} />
            <circle cx={114} cy={64} r={9} />
            <circle cx={150} cy={58} r={6} />
          </g>
        </mask>
        <rect x={0} y={0} width={170} height={70} mask={`url(#${id})`} className={tones[soft ? "cloudSoft" : "cloud"]} />
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

/* Each sign's drawn size, so a shop can centre it on its front face. */
const signs = {
  camera: { Draw: CameraSign, w: 48, h: 32 },
  frame: { Draw: FrameSign, w: 46, h: 36 },
  hanger: { Draw: HangerSign, w: 44, h: 30 },
  screen: { Draw: ScreenSign, w: 44, h: 40 },
  mirror: { Draw: MirrorSign, w: 35, h: 46 },
} as const;

type ShopProps = {
  x: number;
  top: number;
  w: number;
  side: number;
  sign: keyof typeof signs;
  pinDelay: string;
  /** Rows of windows under the sign; 0 when the building is short. */
  windowRows?: number;
  front?: DuskTone;
  shade?: DuskTone;
};

/* A shopfront: everything is placed from the building's own front face, so the
   sign, windows, awning, door and the pin overhead share one centre line. */
function Shop({ x, top, w, side, sign, pinDelay, windowRows = 0, front, shade }: ShopProps) {
  const centre = x + w / 2;
  const { Draw, w: signW, h: signH } = signs[sign];
  const signY = top + 18;
  const cols = w >= 100 ? 3 : 2;
  const windowsX = centre - (cols * 24 - 10) / 2;
  return (
    <g>
      <Tower x={x} top={top} w={w} side={side} front={front} shade={shade} />
      <Draw x={centre - signW / 2} y={signY} />
      {windowRows > 0 ? <Windows x={windowsX} y={signY + signH + 18} cols={cols} rows={windowRows} /> : null}
      <Awning x={x} y={GROUND - 40} w={w} />
      <Rect tone="night" x={centre - 11} y={GROUND - 28} width={22} height={28} rx={11} />
      <ShopPin x={centre} y={top - 9} delay={pinDelay} />
    </g>
  );
}

/** The closing scene: a small town at dusk, drawn wide so it can crop to any width. */
export function DuskScene({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 -50 1200 370"
      preserveAspectRatio="xMidYMax slice"
      className={cx("block w-full", className)}
      aria-hidden="true"
    >
      <Cloud x={70} y={30} delay="0s" />
      <Cloud x={930} y={20} scale={0.85} delay="-2.4s" soft />
      <Cloud x={730} y={92} scale={0.55} delay="-4.2s" soft />
      <Cloud x={240} y={104} scale={0.6} delay="-1.3s" />

      {/* back row, so the front row reads as nearer — each is a different kind of creative */}
      <Tower x={20} top={196} w={92} side={30} front="deep" shade="night" />
      <Shop x={1070} top={176} w={84} side={30} sign="mirror" front="deep" shade="night" pinDelay="-4.4s" />
      <Shop x={210} top={176} w={84} side={28} sign="hanger" front="deep" shade="night" pinDelay="-2.2s" />
      <Shop x={920} top={190} w={92} side={30} sign="screen" front="deep" shade="night" pinDelay="-3.3s" />

      {/* the tall tower is Wami itself, with its stacked top block and the pin beacon */}
      <Tower x={540} top={78} w={120} side={40} />
      <Tower x={572} top={36} w={64} side={24} front="light" />
      <Windows x={557} y={100} cols={4} rows={5} />
      <Rect tone="night" x={584} y={262} width={32} height={38} rx={16} />
      <Rect tone="cloudSoft" x={598} y={278} width={5} height={5} rx={2.5} />
      <Beacon x={604} y={30} />

      {/* photographer's studio */}
      <Shop x={376} top={132} w={112} side={36} sign="camera" windowRows={2} pinDelay="0s" />

      {/* gallery: the framed picture sits above the orange stairs and the door,
          like the first reference, all on the building's centre line */}
      <Tower x={738} top={150} w={130} side={38} />
      <FrameSign x={738 + 65 - 23} y={164} />
      {[0, 1, 2, 3, 4].map((i) => (
        <Rect key={i} tone="ember" x={768 + i * 16} y={GROUND - (i + 1) * 12} width={80 - i * 16} height={(i + 1) * 12} />
      ))}
      <Rect tone="brown" x={848} y={GROUND - 60} width={8} height={60} />
      <Rect tone="night" x={826} y={GROUND - 96} width={26} height={36} rx={13} />
      <ShopPin x={738 + 65} y={141} delay="-1.1s" />

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
