import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "gold" | "white" | "original" | "dark" | "light";
  showTagline?: boolean;
  className?: string;
}

export default function BrandLogo({
  size = "md",
  variant = "gold",
  className = "",
}: BrandLogoProps) {
  // Determine dimensions based on size (original aspect ratio ~ 1024x392 = 2.61 : 1)
  const dimensions = {
    sm: { width: 110, height: 42 },
    md: { width: 145, height: 55 },
    lg: { width: 185, height: 71 },
    xl: { width: 230, height: 88 },
  }[size];

  // Select optimal logo asset
  const logoSrc =
    variant === "white" || variant === "light"
      ? "/logo-white.webp"
      : variant === "original"
      ? "/logo.webp"
      : "/logo-gold.webp"; // Default luxury champagne gold

  return (
    <Link
      href="/"
      className={`group inline-flex items-center select-none transition-transform hover:scale-[1.02] duration-300 ${className}`}
      aria-label="MALIK Men's Hair Point Home"
    >
      <div className="relative flex items-center justify-center">
        <Image
          src={logoSrc}
          alt="MALIK Men's Hair Point Official Logo"
          width={dimensions.width}
          height={dimensions.height}
          priority
          className="object-contain w-auto h-auto max-h-[50px] sm:max-h-[60px] filter drop-shadow-[0_2px_10px_rgba(200,169,126,0.15)] group-hover:brightness-110 transition-all"
        />
      </div>
    </Link>
  );
}
