"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import {
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  StarIcon,
  UserGroupIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function AboutPage() {
  const { t } = useTranslation("common");

  const values = [
    {
      icon: ClockIcon,
      title: t("about.values.punctuality.title"),
      description: t("about.values.punctuality.description"),
    },
    {
      icon: ShieldCheckIcon,
      title: t("about.values.safety.title"),
      description: t("about.values.safety.description"),
    },
    {
      icon: StarIcon,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: UserGroupIcon,
      title: t("about.values.service.title"),
      description: t("about.values.service.description"),
    },
  ];

  const stats = [
    {
      number: "",
      label: t("about.stats.experience"),
      suffix: "",
      hasPlus: false,
    },
    {
      number: 4,
      label: t("about.stats.vehicles"),
      suffix: "",
      hasPlus: false,
    },
    {
      number: 4,
      label: t("about.stats.drivers"),
      suffix: "",
      hasPlus: false,
    },
    {
      number: 1000,
      label: t("about.stats.clients"),
      suffix: "",
      hasPlus: true,
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <p className="text-primary-light font-semibold uppercase tracking-wider text-sm mb-3">
              {t("about.subtitle")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("about.title")}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("about.heroDescription")}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {t("about.story.title")}
                </h2>
                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                  <p>{t("about.story.paragraph1")}</p>
                  <p>{t("about.story.paragraph2")}</p>
                  <p>{t("about.story.paragraph3")}</p>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/img/chauffeur-prive.jpg"
                  alt={t("about.story.imageAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("about.mission.title")}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {t("about.mission.description")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPinIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("about.mission.vision.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.mission.vision.description")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <StarIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("about.mission.excellence.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.mission.excellence.description")}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <UserGroupIcon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("about.mission.commitment.title")}
                  </h3>
                  <p className="text-gray-600">
                    {t("about.mission.commitment.description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("about.values.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("about.values.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t("about.stats.title")}
              </h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                {t("about.stats.description")}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center flex flex-col justify-center"
                >
                  {stat.number ? (
                    <>
                      <div className="text-5xl lg:text-6xl font-bold mb-2">
                        {stat.number}
                        {stat.hasPlus && "+"}
                      </div>
                      <div className="text-lg font-semibold text-white/90">
                        {stat.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="text-5xl lg:text-6xl font-bold mb-2 min-h-[4rem] lg:min-h-[5rem] flex items-center justify-center">
                        <span className="text-2xl lg:text-3xl font-bold text-white">
                          {stat.label}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {t("about.whyChoose.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t("about.whyChoose.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: t("about.whyChoose.reasons.experience.title"),
                  description: t(
                    "about.whyChoose.reasons.experience.description"
                  ),
                },
                {
                  title: t("about.whyChoose.reasons.fleet.title"),
                  description: t("about.whyChoose.reasons.fleet.description"),
                },
                {
                  title: t("about.whyChoose.reasons.drivers.title"),
                  description: t("about.whyChoose.reasons.drivers.description"),
                },
                {
                  title: t("about.whyChoose.reasons.availability.title"),
                  description: t(
                    "about.whyChoose.reasons.availability.description"
                  ),
                },
                {
                  title: t("about.whyChoose.reasons.pricing.title"),
                  description: t("about.whyChoose.reasons.pricing.description"),
                },
                {
                  title: t("about.whyChoose.reasons.coverage.title"),
                  description: t(
                    "about.whyChoose.reasons.coverage.description"
                  ),
                },
              ].map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              {t("about.cta.title")}
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t("about.cta.description")}
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
                {t("about.cta.contactButton")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
