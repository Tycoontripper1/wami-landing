import { cx } from "@/lib/cx";

/* Store marks as vectors, so they stay crisp and sit on any background.
   Apple's follows the theme text colour (black in light, white in dark);
   Google Play's four colours are fixed brand values, kept as tokens too. */

type LogoProps = { className?: string };

export function AppleLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={cx("size-7 fill-fg", className)}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09ZM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

export function PlayLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 392 437" aria-hidden="true" className={cx("h-7 w-auto", className)}>
      <path className="fill-play-blue" d="M0 20C0 10 8 8 12 14L190 217 12 423C8 429 0 427 0 417Z" />
      <path className="fill-play-green" d="M12 14C28-2 50-4 66 4L272 125 190 217Z" />
      <path className="fill-play-yellow" d="M272 125 370 180C392 193 392 241 370 254L276 312 190 217Z" />
      <path className="fill-play-red" d="M190 217 276 312 66 428C50 436 28 434 12 423Z" />
    </svg>
  );
}

export const storeLogos = {
  ios: AppleLogo,
  android: PlayLogo,
} as const;

export type StoreId = keyof typeof storeLogos;
