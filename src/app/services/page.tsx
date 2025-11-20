"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ServicesPage() {
  const { t } = useTranslation("common");

  const services = [
    {
      title: t("services.airportTransfer.name"),
      description: t("services.airportTransfer.description"),
      image: "/img/services/airport-transfer.jpg",
      features: t("services.airportTransfer.features", {
        returnObjects: true,
      }) as string[],
      href: "/services/airport",
    },
    {
      title: t("services.businessTransport.name"),
      description: t("services.businessTransport.description"),
      image: "/img/services/business-transport.jpg",
      features: t("services.businessTransport.features", {
        returnObjects: true,
      }) as string[],
      href: "/services/business",
    },
    {
      title: t("services.cityTransport.name"),
      description: t("services.cityTransport.description"),
      image: "/img/services/city-transport.jpg",
      features: t("services.cityTransport.features", {
        returnObjects: true,
      }) as string[],
      href: "/services/city",
    },
    {
      title: t("services.touristTransport.name"),
      description: t("services.touristTransport.description"),
      image: "/img/services/tourist-transport.jpg",
      features: t("services.touristTransport.features", {
        returnObjects: true,
      }) as string[],
      href: "/services/tours",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("services.page.heroTitle")}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("services.page.heroDescription")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.href}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 block cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <span className="inline-block bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300">
                      {t("services.page.learnMore")}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("services.page.ctaTitle")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("services.page.ctaDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0486123456"
                className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                04 86 12 34 56
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                {t("services.page.contactForm")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
