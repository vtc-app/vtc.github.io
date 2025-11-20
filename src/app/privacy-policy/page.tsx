// src/app/privacy-policy/page.tsx
"use client";

import NavBar from "@/Components/Navigation/NavBar";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import React from "react";
import scrollAnimator from "@/Context/Animation/AnimationService";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    scrollAnimator();
  }, []);

  // Définition des sections de contenu
  const sections = [
    {
      title: t("privacyPolicy.sections.1.title"),
      content: t("privacyPolicy.sections.1.content"),
    },
    {
      title: t("privacyPolicy.sections.2.title"),
      content: t("privacyPolicy.sections.2.content"),
    },
    {
      title: t("privacyPolicy.sections.3.title"),
      content: t("privacyPolicy.sections.3.content"),
    },
    {
      title: t("privacyPolicy.sections.4.title"),
      content: t("privacyPolicy.sections.4.content"),
    },
    {
      title: t("privacyPolicy.sections.5.title"),
      content: t("privacyPolicy.sections.5.content"),
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
              {t("privacyPolicy.subtitle")}
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t("privacyPolicy.title")}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t("privacyPolicy.description")}
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 lg:px-10">
            <div className="max-w-4xl mx-auto">
              {sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Last Updated */}
        <section className="py-10 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-10 text-center">
            <p className="text-gray-500 text-sm">
              {t("privacyPolicy.lastUpdated")}{" "}
              {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
