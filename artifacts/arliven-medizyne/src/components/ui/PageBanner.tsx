import { FadeIn } from "@/components/FadeIn";

interface PageBannerProps {
  image: string;
  alt?: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  gradient?: string;
  desktopHeight?: string;
  mobileChildren?: React.ReactNode;
  desktopChildren?: React.ReactNode;
}

export function PageBanner({
  image,
  alt = "",
  eyebrow,
  title,
  subtitle,
  gradient = "from-black/80 via-black/50 to-transparent",
  desktopHeight = "h-[320px]",
  mobileChildren,
  desktopChildren,
}: PageBannerProps) {
  return (
    <section className="border-b border-[#2F80ED]/15">

      {/* ── DESKTOP (lg+): fixed height cinematic banner with overlay ─── */}
      <div className={`hidden lg:block relative ${desktopHeight} overflow-hidden`}>
        <img
          src={image}
          alt={alt || title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${gradient}`} />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-10 w-full">
            <FadeIn>
              <p className="text-[#2F80ED] font-semibold tracking-widest uppercase text-xs mb-2">
                {eyebrow}
              </p>
              <h1 className="text-xl font-semibold mb-3 text-white leading-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm text-gray-200 max-w-lg leading-relaxed">
                  {subtitle}
                </p>
              )}
              {desktopChildren && (
                <div className="mt-6">{desktopChildren}</div>
              )}
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── MOBILE (< lg): full image at natural proportions ─────────── */}
      <div className="lg:hidden">
        <img
          src={image}
          alt={alt || title}
          className="w-full h-auto block"
          loading="eager"
        />
        {/* Text block on dark navy background — always fully readable */}
        <div className="bg-[#0d1b2a] px-5 py-6">
          <p className="text-[#60aaff] font-semibold tracking-widest uppercase text-xs mb-2">
            {eyebrow}
          </p>
          <h1 className="text-base font-bold text-white mb-2 leading-snug">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
          {mobileChildren && (
            <div className="mt-5">{mobileChildren}</div>
          )}
        </div>
      </div>

    </section>
  );
}
