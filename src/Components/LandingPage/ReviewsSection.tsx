"use client";

import { useTranslation } from "react-i18next";

export default function ReviewsSection() {
  const { t } = useTranslation("common");

  const reviews = [
    {
      name: "Marie Dubois",
      rating: 5,
      comment:
        "Service impeccable ! Chauffeur très professionnel et ponctuel. Je recommande vivement pour les trajets aéroport.",
      service: "Transfert Aéroport",
    },
    {
      name: "Jean-Pierre Martin",
      rating: 5,
      comment:
        "Excellent service pour notre mariage. Véhicule luxueux et chauffeur très discret. Parfait !",
      service: "Événement Mariage",
    },
    {
      name: "Sophie Laurent",
      rating: 5,
      comment:
        "Toujours à l'heure pour mes rendez-vous professionnels. Service de qualité, je recommande.",
      service: "Transfert Professionnel",
    },
    {
      name: "Ahmed El Mansouri",
      rating: 5,
      comment:
        "Prix très compétitifs et service excellent. L'application de réservation est très pratique.",
      service: "Course Urbaine",
    },
    {
      name: "Nathalie Rousseau",
      rating: 5,
      comment:
        "Chauffeur très sympathique qui connaît parfaitement la région. Voyage très agréable.",
      service: "Tour Touristique",
    },
    {
      name: "David Chen",
      rating: 5,
      comment:
        "Perfect service from airport to hotel. Driver was waiting and very helpful with luggage.",
      service: "Airport Transfer",
    },
  ];

  return (
    <section className="py-20 bg-white" id="reviews">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <h3 className="text-primary text-lg font-semibold mb-4">
            {t("reviews.subtitle")}
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            {t("reviews.title")}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t("reviews.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-primary font-medium">
                  {review.service}
                </span>
              </div>

              <p className="text-gray-700 mb-4 italic">
                &quot;{review.comment}&quot;
              </p>

              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                  <p className="text-sm text-gray-500">Client vérifié</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex text-yellow-400 mr-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xl font-bold text-gray-900">4.9/5</span>
            <span className="text-gray-600 ml-2">(127 avis)</span>
          </div>

          <p className="text-gray-600 mb-6">
            Plus de 95% de nos clients recommandent nos services
          </p>

          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            {t("reviews.cta")}
          </button>
        </div>
      </div>
    </section>
  );
}
