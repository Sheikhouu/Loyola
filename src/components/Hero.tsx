import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

/* =========================
   Bannière DON — MOBILE ONLY
   ========================= */
const DonateBannerMobile: React.FC = () => {
  const { language } = useLanguage();

  const donateUrl =
    "https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708";

  const t = {
    title: language === "fr" ? "Soutenez la campagne" : "Support the campaign",
    subtitle:
      language === "fr"
        ? "Votre don fait la différence."
        : "Your donation makes the difference.",
    cta: language === "fr" ? "Faire un don" : "Donate",
  };

  return (
    <section className="md:hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <div
          className="
            w-full
            rounded-3xl p-6 sm:p-8
            text-center shadow-xl backdrop-blur-sm
            bg-gradient-to-br from-white/95 via-blue-50/90 to-indigo-100/95
            border border-blue-200/50
            relative overflow-hidden
          "
        >
          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
          
          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {t.subtitle}
            </p>

            <div className="mt-6 flex justify-center">
              <a
                href={donateUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.cta}
                className="
                  inline-flex items-center justify-center
                  rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700
                  hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800
                  text-white px-8 py-4 sm:px-10 sm:py-5
                  text-base sm:text-lg font-bold tracking-wide
                  shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/40
                  hover:scale-105 active:scale-[0.98]
                  transition-all duration-500 ease-out
                  border border-blue-400/30 hover:border-blue-300/50
                  relative overflow-hidden group
                "
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10">{t.cta}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   HERO + bouton overlay desktop + bannière mobile
   ========================= */
const Hero: React.FC = () => {
  const { language } = useLanguage();

  const heroImage = language === "fr" ? "/content_hero/1.jpg" : "/content_hero/2.jpg";
  const heroSvg = language === "fr" ? "/svg_s/svg_fr.svg" : "/svg_s/svg_en.svg";
  const donateUrl =
    "https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708";

  const btnPrimary =
    "relative rounded-2xl font-bold leading-relaxed transition-all duration-500 ease-out " +
    "shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-600/40 " +
    "border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group " +
    "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 " +
    "text-white hover:scale-105 active:scale-[0.98] tracking-wide";

  return (
    <>
      {/* HERO — caché sur mobile, visible desktop uniquement */}
      <section className="bg-white hidden md:block">
        <div className="mx-auto max-w-screen-xl px-0 sm:px-2 md:px-4 pt-1 sm:pt-2 md:pt-4 pb-1 sm:pb-2 md:pb-3">
          <div className="relative rounded-2xl shadow-xl overflow-hidden">
            <img
              src={heroImage}
              alt={language === "fr" ? "Campagne Alexandre Teo" : "Alexandre Teo Campaign"}
              className="block w-full h-auto"
            />

            {/* voile léger */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none z-10" />

            {/* logo haut centré */}
            <img
              src={heroSvg}
              alt={language === "fr" ? "Logo Français" : "English Logo"}
              className="absolute z-30 left-1/2 -translate-x-1/2
                         top-2 sm:top-3 md:top-5
                         h-8 sm:h-10 md:h-14 lg:h-20 w-auto drop-shadow-lg"
            />

            {/* DESKTOP (≥ md) : bouton overlay, ancré bas */}
            <div className="absolute inset-0 z-20 hidden md:grid grid-cols-[56%_44%] lg:grid-cols-[54%_46%]">
              <div className="relative">
                <div className="absolute inset-x-0 bottom-[25px] pl-6 lg:pl-12">
                  <a
                    href={donateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={language === "fr" ? "Faire un don" : "Donate"}
                    className={`${btnPrimary} px-8 py-4 md:text-base lg:px-10 lg:py-5 lg:text-lg`}
                  >
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10">
                      {language === "fr" ? "Faire un don" : "Donate"}
                    </span>
                  </a>
                </div>
              </div>
              <div />
            </div>
          </div>
        </div>
      </section>

      {/* Bannière DON — mobile/tablette seulement */}
      <DonateBannerMobile />
    </>
  );
};

export default Hero;
