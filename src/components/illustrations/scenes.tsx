import { cx } from "@/lib/cx";
import { C, E, P, R } from "./shapes";

/* Large scenes on a 320×320 grid. Same shape system and tokens as the small
   drawings, so they read as one family — just given room to tell a story. */

function Sparkle({ x, y, size = 10 }: { x: number; y: number; size?: number }) {
  return <P d={`M${x} ${y - size} V${y + size} M${x - size} ${y} H${x + size}`} strokeWidth={3} />;
}

function Camera() {
  return (
    <>
      <g transform="rotate(-9 52 78)">
        <R x={18} y={34} width={68} height={82} rx={7} tone="paper" />
        <R x={26} y={42} width={52} height={52} rx={4} tone="soft" />
        <P tone="primary" d="M26 84 L40 66 L50 76 L58 68 L78 90 V94 H26 Z" strokeWidth={2} />
        <C cx={64} cy={54} r={5} tone="accent" strokeWidth={2} />
      </g>
      <g transform="rotate(10 268 70)">
        <R x={236} y={30} width={64} height={78} rx={7} tone="paper" />
        <R x={244} y={38} width={48} height={48} rx={4} tone="warm" />
        <C cx={268} cy={62} r={12} tone="paper" strokeWidth={2} />
      </g>
      <P tone="primary" d="M110 130 L126 102 H196 L212 130 Z" />
      <R x={212} y={108} width={30} height={18} rx={5} tone="accent" />
      <R x={56} y={128} width={208} height={140} rx={24} tone="primary" />
      <R x={76} y={148} width={38} height={22} rx={7} tone="warm" />
      <C cx={160} cy={204} r={62} tone="paper" />
      <C cx={160} cy={204} r={44} tone="soft" />
      <C cx={160} cy={204} r={24} tone="ink" />
      <C cx={148} cy={192} r={7} tone="paper" strokeWidth={0} />
      <C cx={240} cy={152} r={8} tone="paper" />
      <Sparkle x={36} y={176} />
      <Sparkle x={290} y={200} size={8} />
    </>
  );
}

function Beauty() {
  return (
    <>
      <R x={118} y={186} width={30} height={104} rx={15} tone="accent" />
      <C cx={133} cy={118} r={76} tone="primary" />
      <C cx={133} cy={118} r={58} tone="soft" />
      <P d="M96 96 C104 76 124 66 146 70" strokeWidth={5} className="stroke-ill-paper" />
      <Sparkle x={160} y={104} size={11} />
      <Sparkle x={104} y={142} size={7} />
      <R x={232} y={196} width={42} height={80} rx={9} tone="ink" />
      <R x={236} y={150} width={34} height={52} rx={7} tone="accent" />
      <P tone="warm" d="M240 150 L253 112 L266 150 Z" />
      <R x={232} y={226} width={42} height={10} tone="warm" strokeWidth={0} />
      <R x={30} y={274} width={120} height={28} rx={9} tone="warm" />
      <P d="M44 274 V302 M60 274 V302 M76 274 V302 M92 274 V302 M108 274 V302 M124 274 V302 M140 274 V302" strokeWidth={2} />
      <C cx={282} cy={76} r={5} tone="paper" strokeWidth={2} />
    </>
  );
}

function Fashion() {
  return (
    <>
      <P d="M160 34 C160 22 178 20 182 33 C186 46 160 52 160 66" strokeWidth={4} />
      <P tone="warm" d="M160 64 L66 116 C56 122 60 134 72 134 H248 C260 134 264 122 254 116 Z" />
      <P tone="accent" d="M122 134 L128 168 L96 276 C134 298 186 298 224 276 L192 168 L198 134 Z" />
      <R x={128} y={166} width={64} height={14} rx={5} tone="ink" />
      <C cx={134} cy={226} r={5} tone="paper" strokeWidth={2} />
      <C cx={166} cy={214} r={5} tone="paper" strokeWidth={2} />
      <C cx={186} cy={248} r={5} tone="paper" strokeWidth={2} />
      <C cx={150} cy={262} r={5} tone="paper" strokeWidth={2} />
      <P d="M232 232 C232 206 280 206 280 232" strokeWidth={4} />
      <R x={216} y={228} width={80} height={62} rx={12} tone="primary" />
      <C cx={256} cy={258} r={7} tone="paper" strokeWidth={2} />
      <C cx={58} cy={218} r={20} tone="soft" />
      <C cx={106} cy={218} r={20} tone="soft" />
      <P d="M78 218 H86" strokeWidth={3} />
      <Sparkle x={40} y={74} size={9} />
    </>
  );
}

function Art() {
  return (
    <>
      <P tone="warm" d="M46 178 C28 100 122 56 206 78 C292 100 304 196 244 238 C204 264 184 226 152 244 C108 268 62 252 46 178 Z" />
      <C cx={118} cy={210} r={17} tone="paper" />
      <C cx={106} cy={120} r={18} tone="primary" />
      <C cx={160} cy={96} r={18} tone="accent" />
      <C cx={218} cy={118} r={18} tone="soft" />
      <C cx={246} cy={178} r={18} tone="ink" />
      <g transform="rotate(-38 232 232)">
        <R x={146} y={222} width={150} height={20} rx={10} tone="accent" />
        <R x={96} y={219} width={56} height={26} rx={6} tone="paper" />
        <P tone="primary" d="M96 219 C70 219 58 232 50 232 C58 232 70 245 96 245 Z" />
      </g>
      <P tone="primary" d="M270 262 C270 252 278 244 278 244 C278 244 286 252 286 262 C286 270 270 270 270 262 Z" />
      <Sparkle x={52} y={60} size={10} />
    </>
  );
}

function Digital() {
  return (
    <>
      <R x={40} y={52} width={196} height={140} rx={14} tone="paper" />
      <R x={54} y={66} width={168} height={112} rx={7} tone="soft" />
      <P tone="primary" d="M54 160 L98 108 L128 140 L156 118 L222 176 V178 H54 Z" strokeWidth={2} />
      <C cx={186} cy={92} r={12} tone="accent" strokeWidth={2} />
      <P tone="warm" d="M22 192 H254 L240 220 H36 Z" />
      <R x={226} y={110} width={72} height={138} rx={14} tone="primary" />
      <R x={236} y={124} width={52} height={96} rx={6} tone="paper" strokeWidth={2} />
      <C cx={262} cy={236} r={5} tone="paper" strokeWidth={2} />
      <P tone="accent" d="M140 130 L140 186 L154 172 L166 198 L178 192 L166 166 L186 164 Z" />
      <Sparkle x={274} y={70} size={10} />
      <Sparkle x={30} y={116} size={8} />
    </>
  );
}

function Stall() {
  return (
    <>
      <R x={44} y={116} width={232} height={160} rx={6} tone="paper" />
      <P tone="accent" d="M30 116 L46 54 H274 L290 116 Z" />
      <P d="M70 54 L62 116 M102 54 L98 116 M134 54 L134 116 M166 54 L170 116 M198 54 L206 116 M230 54 L242 116" strokeWidth={2} />
      <P tone="primary" d="M30 116 C30 134 62 134 62 116 C62 134 98 134 98 116 C98 134 134 134 134 116 C134 134 170 134 170 116 C170 134 206 134 206 116 C206 134 242 134 242 116 C242 134 290 134 290 116 Z" />
      <R x={64} y={160} width={192} height={10} rx={3} tone="warm" />
      <R x={72} y={130} width={28} height={30} rx={5} tone="primary" />
      <C cx={134} cy={146} r={14} tone="accent" />
      <R x={166} y={126} width={26} height={34} rx={5} tone="soft" />
      <R x={212} y={138} width={36} height={22} rx={5} tone="warm" />
      <R x={64} y={214} width={192} height={10} rx={3} tone="warm" />
      <R x={76} y={182} width={32} height={32} rx={6} tone="soft" />
      <C cx={150} cy={198} r={16} tone="primary" />
      <R x={196} y={176} width={44} height={38} rx={6} tone="accent" />
      <R x={44} y={262} width={232} height={14} rx={4} tone="ink" />
      <Sparkle x={300} y={40} size={9} />
    </>
  );
}

export const scenes = {
  camera: Camera,
  beauty: Beauty,
  fashion: Fashion,
  art: Art,
  digital: Digital,
  stall: Stall,
} as const;

export type SceneName = keyof typeof scenes;

export function Scene({ name, className }: { name: SceneName; className?: string }) {
  const Drawing = scenes[name];
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cx("size-full", className)}
    >
      <Drawing />
    </svg>
  );
}

export function SceneSparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cx("size-6 fill-ill-accent stroke-ill-ink", className)} strokeWidth={2} strokeLinejoin="round">
      <path d="M12 2 L14.4 9.6 L22 12 L14.4 14.4 L12 22 L9.6 14.4 L2 12 L9.6 9.6 Z" />
    </svg>
  );
}
