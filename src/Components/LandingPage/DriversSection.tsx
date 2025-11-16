"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function DriversSection() {
  const { t } = useTranslation("common");

  const drivers = [
    {
      name: "Anis Ouerghi",
      languages: ["Français", "Anglais", "Arabe"],
      image: "/img/drivers/Anis.png",
      speciality: "Chauffeur VTC - Transferts Aéroport, Transfert d'Affaires",
      rating: 4.96,
      ratingSource: "Uber",
      quote:
        "Votre confort et votre ponctualité sont ma priorité absolue. Je m'engage à vous offrir un service irréprochable à chaque trajet.",
      phone: "+33 6 47 52 87 85",
      social: {
        linkedin: "#",
        whatsapp: "https://wa.me/0033647528785",
        email: "Anis.Ouerghi93@gmail.com",
      },
    },
    {
      name: "Azidine Zigham",
      image: "/img/drivers/Azidine.png",
      languages: ["Français", "Arabe"],
      speciality: "Chauffeur VTC - Tours Touristiques, Découverte",
      rating: 5,
      ratingSource: "Bolt",
      quote:
        "Découvrir Marseille avec mes clients, c'est partager ma passion pour cette ville. Je vous emmène explorer les plus beaux endroits de la région.",
      phone: "00336500045858",
      social: {
        linkedin: "#",
        whatsapp: "https://wa.me/00336500045858",
        email: "Btsormiou188@gmail.com",
      },
    },
    {
      name: "Djamel mechia",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop&crop=face",
      languages: ["Français", "Arabe"],
      speciality: "Chauffeur VTC - Événements de Luxe, Mariages",
      rating: 4.8,
      ratingSource: "Bolt",
      quote:
        "Chaque trajet est une expérience unique que je rends mémorable. Mon objectif est de dépasser vos attentes à chaque voyage.",
      phone: "+33 7 81 59 11 80",
      social: {
        linkedin: "#",
        whatsapp: "https://wa.me/0033781591180",
        email: "djamel.mechia@yahoo.fr",
      },
    },
    {
      name: "Riadh Zigham",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&crop=face",
      languages: ["Français", "Arabe"],
      speciality: "Chauffeur VTC - Transfert Professionnel, Cadres",
      rating: 4.98,
      ratingSource: "Uber",
      quote:
        "L'excellence dans le service, c'est dans les détails que ça se joue. Je porte une attention particulière à chaque aspect de votre voyage.",
      phone: "+33 7 82 31 77 73",
      social: {
        linkedin: "#",
        whatsapp: "https://wa.me/0033782317773",
        email: "reredu13b@gmail.com",
      },
    },
  ];

  return (
    <section className="py-12 bg-gray-50" id="drivers">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-semibold mb-4">
            {t("drivers.subtitle")}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("drivers.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("drivers.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Left: Image - Rectangular to fill vertical space */}
                  <div className="flex-shrink-0 flex flex-col items-center md:items-center">
                    <div className="relative w-24 h-36 md:w-36 md:h-56 rounded-lg overflow-hidden border-4 border-primary/10 shadow-md">
                      <Image
                        src={driver.image}
                        alt={driver.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 96px, 144px"
                      />
                    </div>
                    {/* Contact Icons - Below Image */}
                    <div className="flex items-center gap-2 mt-3 md:mt-4">
                      <a
                        href={`tel:${driver.phone}`}
                        className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
                        title={t("drivers.call")}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </a>

                      <a
                        href={driver.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors border border-green-200"
                        title="WhatsApp"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                        </svg>
                      </a>

                      <a
                        href={`mailto:${driver.social.email}`}
                        className="p-2.5 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                        title={t("drivers.email")}
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    {/* Name and Experienced badge - aligned */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                        {driver.name}
                      </h3>
                      <div className="bg-secondary/10 text-secondary text-xs px-3 py-1.5 rounded-full font-semibold border border-secondary/20 w-fit">
                        {t("drivers.experienced")}
                      </div>
                    </div>

                    {/* Rating and Platform - Top Right */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(driver.rating)
                                ? "text-secondary"
                                : i < driver.rating
                                  ? "text-secondary"
                                  : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-bold text-gray-900">
                        {driver.rating}
                      </span>
                      <span className="text-sm font-medium text-secondary">
                        {driver.ratingSource}
                      </span>
                    </div>

                    {/* Speciality/Title */}
                    <p className="text-gray-700 font-semibold text-xs md:text-sm mb-2 md:mb-3">
                      {driver.speciality}
                    </p>

                    {/* Quote */}
                    <div className="border-l-4 border-secondary pl-3 md:pl-4 py-2 mb-4 md:mb-6">
                      <p className="text-gray-600 italic text-xs md:text-sm leading-relaxed">
                        &ldquo;{driver.quote}&rdquo;
                      </p>
                    </div>

                    {/* Languages */}
                    <div className="mt-auto">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        {t("drivers.languages")}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {driver.languages.map((language, langIndex) => (
                          <span
                            key={langIndex}
                            className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium border border-gray-200"
                          >
                            {language}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6 text-lg">
            {t("drivers.professional")}
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t("drivers.professionalLicense")}
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t("drivers.safetyTraining")}
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t("drivers.localKnowledge")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
