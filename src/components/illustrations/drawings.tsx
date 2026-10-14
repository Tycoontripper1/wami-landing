import { C, E, P, R } from "./shapes";

/* Nine hand-built drawings on a 96×96 grid. Each is only geometry and tone —
   outline weight, colours and theming live in shapes.tsx and globals.css. */

function Discover() {
  return (
    <>
      <R x={24} y={12} width={48} height={62} rx={8} tone="warm" transform="rotate(11 48 43)" />
      <R x={16} y={16} width={50} height={64} rx={8} tone="paper" />
      <R x={22} y={22} width={38} height={32} rx={5} tone="soft" />
      <P tone="primary" d="M22 48 L33 37 L42 45 L49 40 L60 50 V54 H22 Z" />
      <C cx={51} cy={31} r={4.5} tone="accent" />
      <P d="M22 63 H46" />
      <P d="M22 71 H36" strokeWidth={2} />
      <C cx={68} cy={72} r={13} tone="accent" />
      <P tone="paper" d="M68 80 C59 73 59 65 65 65 C67 65 68 66.5 68 67.5 C68 66.5 69 65 71 65 C77 65 77 73 68 80 Z" />
    </>
  );
}

function Location() {
  return (
    <>
      <E cx={48} cy={80} rx={26} ry={8} tone="soft" />
      <E cx={48} cy={80} rx={12} ry={4} tone="paper" strokeWidth={2} />
      <P tone="primary" d="M48 12 C36 12 27 21 27 32 C27 45 48 72 48 72 C48 72 69 45 69 32 C69 21 60 12 48 12 Z" />
      <C cx={48} cy={32} r={9} tone="paper" />
      <C cx={48} cy={32} r={3.5} tone="accent" strokeWidth={2} />
    </>
  );
}

function Book() {
  return (
    <>
      <R x={14} y={20} width={68} height={62} rx={9} tone="paper" />
      <P tone="primary" d="M14 40 V29 a9 9 0 0 1 9-9 H73 a9 9 0 0 1 9 9 V40 Z" />
      <P d="M32 13 V27" strokeWidth={4} />
      <P d="M64 13 V27" strokeWidth={4} />
      <R x={24} y={49} width={9} height={9} rx={2.5} tone="soft" strokeWidth={2} />
      <R x={38} y={49} width={9} height={9} rx={2.5} tone="soft" strokeWidth={2} />
      <R x={52} y={49} width={9} height={9} rx={2.5} tone="warm" strokeWidth={2} />
      <R x={24} y={63} width={9} height={9} rx={2.5} tone="soft" strokeWidth={2} />
      <C cx={68} cy={68} r={15} tone="accent" />
      <P d="M60.5 68 L66 73.5 L76 62" strokeWidth={3.5} />
    </>
  );
}

function Chat() {
  return (
    <>
      <P tone="paper" d="M48 52 H76 a8 8 0 0 1 8 8 V68 a8 8 0 0 1 -8 8 H72 L66 86 V76 H48 a8 8 0 0 1 -8 -8 V60 a8 8 0 0 1 8 -8 Z" />
      <P d="M50 62 H74" strokeWidth={2} />
      <P d="M50 69 H64" strokeWidth={2} />
      <P tone="primary" d="M16 18 a8 8 0 0 1 8 -8 H56 a8 8 0 0 1 8 8 V38 a8 8 0 0 1 -8 8 H36 L24 56 V46 a8 8 0 0 1 -8 -8 Z" />
      <C cx={28} cy={28} r={3} tone="ink" strokeWidth={1} />
      <C cx={40} cy={28} r={3} tone="ink" strokeWidth={1} />
      <C cx={52} cy={28} r={3} tone="ink" strokeWidth={1} />
    </>
  );
}

function Shield() {
  return (
    <>
      <P tone="soft" d="M48 10 L76 20 V44 C76 62 64 75 48 84 C32 75 20 62 20 44 V20 Z" />
      <P tone="paper" d="M48 20 L67 27 V44 C67 56 59 66 48 73 C37 66 29 56 29 44 V27 Z" strokeWidth={2} />
      <P d="M42 44 V39 a6 6 0 0 1 12 0 V44" strokeWidth={3} />
      <R x={36} y={44} width={24} height={18} rx={4.5} tone="accent" />
      <C cx={48} cy={53} r={2.6} tone="ink" strokeWidth={1} />
      <C cx={80} cy={78} r={11} tone="warm" />
      <C cx={80} cy={78} r={5} strokeWidth={2} />
    </>
  );
}

function Star() {
  return (
    <>
      <P tone="accent" d="M48 16 L55.5 36 L76.5 37.2 L60.2 50.5 L65.7 71 L48 59.5 L30.3 71 L35.8 50.5 L19.5 37.2 L40.5 36 Z" />
      <P tone="paper" d="M48 30 L51.5 39.5 L61.5 40 L53.8 46.3 L56.4 56 L48 50.5 L39.6 56 L42.2 46.3 L34.5 40 L44.5 39.5 Z" strokeWidth={2} />
      <P d="M16 14 V26 M10 20 H22" strokeWidth={3} />
      <P d="M82 56 V66 M77 61 H87" strokeWidth={3} />
      <C cx={80} cy={22} r={3.5} tone="primary" strokeWidth={2} />
    </>
  );
}

function Sell() {
  return (
    <>
      <P d="M36 36 V28 a12 12 0 0 1 24 0 V36" strokeWidth={3} />
      <P tone="primary" d="M26 36 H70 L76 80 a4 4 0 0 1 -4 4 H24 a4 4 0 0 1 -4 -4 Z" />
      <P d="M36 52 a12 12 0 0 0 24 0" strokeWidth={2.5} />
      <g transform="rotate(-14 68 66)">
        <R x={50} y={56} width={36} height={22} rx={5} tone="accent" />
        <C cx={59} cy={67} r={3} tone="paper" strokeWidth={2} />
        <P d="M67 67 H79" strokeWidth={2} />
      </g>
    </>
  );
}

function Import() {
  return (
    <>
      <R x={10} y={10} width={32} height={32} rx={7} tone="soft" />
      <P tone="primary" d="M10 40 V34 L21 25 L29 31 L36 26 L42 31 V40 a2 2 0 0 1 -2 2 H12 a2 2 0 0 1 -2 -2 Z" strokeWidth={2} />
      <C cx={32} cy={19} r={3.5} tone="accent" strokeWidth={2} />
      <R x={54} y={10} width={32} height={32} rx={7} tone="warm" />
      <C cx={70} cy={26} r={8} tone="paper" />
      <R x={10} y={54} width={32} height={32} rx={7} tone="paper" />
      <P d="M18 66 H34 M18 74 H30" strokeWidth={2} />
      <R x={54} y={54} width={32} height={32} rx={7} tone="primary" />
      <P d="M70 64 V76 M64 70 H76" strokeWidth={3} />
      <C cx={48} cy={48} r={13} tone="accent" />
      <P d="M48 41 V55 M41.5 48.5 L48 55 L54.5 48.5" strokeWidth={3} />
    </>
  );
}

function Wallet() {
  return (
    <>
      <R x={20} y={14} width={50} height={26} rx={6} tone="warm" transform="rotate(-6 45 27)" />
      <P tone="primary" d="M14 34 a8 8 0 0 1 8 -8 H74 a8 8 0 0 1 8 8 V70 a8 8 0 0 1 -8 8 H22 a8 8 0 0 1 -8 -8 Z" />
      <R x={56} y={46} width={32} height={22} rx={8} tone="paper" />
      <C cx={69} cy={57} r={3.5} tone="ink" strokeWidth={1} />
      <P d="M24 38 H44" strokeWidth={2} />
    </>
  );
}

export const drawings = {
  discover: Discover,
  location: Location,
  book: Book,
  chat: Chat,
  shield: Shield,
  star: Star,
  sell: Sell,
  import: Import,
  wallet: Wallet,
} as const;

export type IllustrationName = keyof typeof drawings;
