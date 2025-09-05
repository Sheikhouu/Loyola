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
    title:
      language === "fr"
        ? "Prêt à soutenir la campagne ?"
        : "Ready to support the campaign?",
    subtitle:
      language === "fr"
        ? "Chaque contribution compte. Votre don nous aide à aller à la rencontre des citoyens."
        : "Every contribution matters. Your donation helps us reach more residents.",
    cta: language === "fr" ? "Faire un don" : "Donate",
    note:
      language === "fr"
        ? "Vous serez redirigé vers le formulaire officiel d’Ensemble Montréal"
        : "You’ll be redirected to Ensemble Montréal’s official donation form",
  };

  return (
    // md:hidden => cachée sur desktop
    <section className="md:hidden bg-white">
      {/* Espaces resserrés autour de la bannière */}
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 py-3 sm:py-4">
        <div
          className="
            mx-auto max-w-3xl
            rounded-[24px] p-5 sm:p-6
            border border-white/25 shadow-xl text-white
            bg-[radial-gradient(1200px_500px_at_-10%_-10%,rgba(255,255,255,0.12),transparent_40%),linear-gradient(135deg,#5e2db0_0%,#462080_45%,#2e0b63_100%)]
          "
        >
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold tracking-tight">
            {t.title}
          </h2>

          <p className="mt-3 text-center text-sm sm:text-base text-white/90 leading-relaxed">
            {t.subtitle}
          </p>

          <div className="mt-5 sm:mt-6 flex justify-center">
            <a
              href={donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.cta}
              className="
                inline-flex items-center justify-center
                rounded-full bg-white text-[#2e0b63]
                px-8 py-4 sm:px-10 sm:py-5
                text-base sm:text-lg font-bold
                shadow-xl hover:shadow-2xl
                hover:bg-violet-50 active:scale-[0.99]
                transition
              "
            >
              {t.cta}
              <span aria-hidden className="ml-3 text-xl">→</span>
            </a>
          </div>

          <p className="mt-3 text-center text-xs sm:text-sm text-white/80">
            {t.note}
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================
   HERO + bannière mobile en dessous
   ========================= */
const Hero: React.FC = () => {
  const { language } = useLanguage();

  const heroImage = language === "fr" ? "/content_hero/1.jpg" : "/content_hero/2.jpg";
  const heroSvg   = language === "fr" ? "/svg_s/svg_fr.svg"   : "/svg_s/svg_en.svg";

  const donateUrl =
    "https://monelection.org/form/donation/ugkmSizOHBzeusgSxitvTibHrQLRlL?solliciteur_id=33708";

  const btnPrimary =
    "relative rounded-xl font-bold leading-relaxed transition-all duration-500 " +
    "shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(51,0,102,0.6)] " +
    "border-2 border-white/20 hover:border-white/40 overflow-hidden group " +
    "bg-gradient-to-r from-[#330066] via-[#4a1a8a] to-[#330066] text-white";

  return (
    <>
      {/* HERO — padding bas réduit pour coller la bannière */}
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-14 pb-4 sm:pb-5 md:pb-6">
          <div className="relative rounded-2xl shadow-2xl overflow-hidden">
            <img
              src={heroImage}
              alt={language === "fr" ? "Campagne Alexandre Teo" : "Alexandre Teo Campaign"}
              className="block w-full h-auto"
            />

            <div className="absolute inset-0 bg-black/5 pointer-events-none z-10" />

            <img
              src={heroSvg}
              alt={language === "fr" ? "Logo Français" : "English Logo"}
              className="absolute z-30 left-1/2 -translate-x-1/2
                         top-2 sm:top-3 md:top-5
                         h-8 sm:h-10 md:h-14 lg:h-20 w-auto drop-shadow-lg"
            />

            {/* Bouton overlay uniquement desktop */}
            <div className="absolute inset-0 z-20 hidden md:grid grid-cols-[56%_44%] lg:grid-cols-[54%_46%]">
              <div className="flex items-end pl-10 lg:pl-12 pb-5 lg:pb-6">
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={language === "fr" ? "Faire un don" : "Donate"}
                  className={`${btnPrimary} px-10 py-5 md:text-base lg:px-12 lg:py-6 lg:text-lg`}
                >
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative z-10">
                    {language === "fr" ? "Faire un don" : "Donate"}
                  </span>
                </a>
              </div>
              <div />
            </div>
          </div>
        </div>
      </section>

      {/* BANNIÈRE DON — mobile/tablette seulement, espacements resserrés */}
      <DonateBannerMobile />
    </>
  );
};

export default Hero;
