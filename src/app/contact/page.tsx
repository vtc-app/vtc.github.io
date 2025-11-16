"use client";

import NavBar from "@/Components/Navigation/NavBar";
import React from "react";
import scrollAnimator from "@/Context/Animation/AnimationService";
import Footer from "@/Components/Navigation/Footer";
import { useTranslation } from "react-i18next";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  const { t, i18n } = useTranslation("common");

  React.useEffect(() => {
    scrollAnimator();
  }, []);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const validateInput = (
    input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  ) => {
    if (input.checkValidity()) {
      input.classList.remove("bg-red-50");
      input.classList.add("bg-green-50");
    } else {
      input.classList.remove("bg-green-50");
      input.classList.add("bg-red-50");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          subject,
          position: subject === "vtc" ? position : "",
          destination: subject === "vtc" ? destination : "",
          message,
          locale: i18n.language || "fr",
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Email sent successfully:", data);
        setSubmitStatus("success");
        // Reset form
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setPosition("");
        setDestination("");
        setMessage("");
        // Reset validation classes
        document.querySelectorAll("input, textarea").forEach(input => {
          input.classList.remove("bg-red-50", "bg-green-50");
        });
      } else {
        console.error("Email sending failed:", data);
        setSubmitStatus("error");
        setErrorMessage(
          data.details || data.error || t("contact.errorMessage")
        );
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
      setErrorMessage(t("contact.errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center opacity-0">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {t("contact.description")}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl sm:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.subtitle")}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  {/* First Name */}
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.firstName")}
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      required
                      value={firstName}
                      onChange={e => {
                        setFirstName(e.target.value);
                        validateInput(e.target);
                      }}
                      placeholder={t("contact.namePlaceholder")}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.lastName")}
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      required
                      value={lastName}
                      onChange={e => {
                        setLastName(e.target.value);
                        validateInput(e.target);
                      }}
                      placeholder={t("contact.namePlaceholder")}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.phone")}
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary">
                      <span className="flex select-none items-center gap-2 px-3 text-gray-500 sm:text-sm">
                        <span className="text-lg">🇫🇷</span>
                        <span>+33</span>
                      </span>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={e => {
                          // Remove any non-digit characters except spaces
                          const value = e.target.value.replace(/[^\d\s]/g, "");
                          setPhone(value);
                          validateInput(e.target);
                        }}
                        placeholder={t("contact.phonePlaceholder")}
                        className="block flex-1 border-0 bg-transparent py-2 pl-1 pr-3.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={e => {
                        setEmail(e.target.value);
                        validateInput(e.target);
                      }}
                      placeholder={t("contact.emailPlaceholder")}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>

                  {/* Subject */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.subject")}
                    </label>
                    <select
                      id="subject"
                      required
                      value={subject}
                      onChange={e => {
                        setSubject(e.target.value);
                        validateInput(e.target);
                        // Clear position and destination when subject changes
                        if (e.target.value !== "vtc") {
                          setPosition("");
                          setDestination("");
                        }
                      }}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    >
                      <option value="">{t("contact.selectSubject")}</option>
                      <option value="vtc">
                        {t("contact.subjectOptions.vtc")}
                      </option>
                      <option value="booking">
                        {t("contact.subjectOptions.booking")}
                      </option>
                      <option value="information">
                        {t("contact.subjectOptions.information")}
                      </option>
                      <option value="reclamation">
                        {t("contact.subjectOptions.reclamation")}
                      </option>
                      <option value="other">
                        {t("contact.subjectOptions.other")}
                      </option>
                    </select>
                  </div>

                  {/* Position and Destination - Only show for VTC option */}
                  {subject === "vtc" && (
                    <>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="position"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          {t("contact.position")}
                        </label>
                        <input
                          id="position"
                          type="text"
                          required
                          value={position}
                          onChange={e => {
                            setPosition(e.target.value);
                            validateInput(e.target);
                          }}
                          placeholder={t("contact.positionPlaceholder")}
                          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="destination"
                          className="block text-sm font-semibold text-gray-900"
                        >
                          {t("contact.destination")}
                        </label>
                        <input
                          id="destination"
                          type="text"
                          required
                          value={destination}
                          onChange={e => {
                            setDestination(e.target.value);
                            validateInput(e.target);
                          }}
                          placeholder={t("contact.destinationPlaceholder")}
                          className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                        />
                      </div>
                    </>
                  )}

                  {/* Message - Always visible */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      maxLength={500}
                      required
                      value={message}
                      onChange={e => {
                        setMessage(e.target.value);
                        validateInput(e.target);
                      }}
                      placeholder={t("contact.messagePlaceholder")}
                      className="mt-2 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                    />
                  </div>
                </div>

                <div className="mt-10">
                  {submitStatus === "success" && (
                    <div className="mb-4 rounded-md bg-green-50 p-4">
                      <p className="text-sm font-medium text-green-800">
                        {t("contact.successTitle")}
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        {t("contact.successMessage")}
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-4 rounded-md bg-red-50 p-4">
                      <p className="text-sm font-medium text-red-800">
                        {t("contact.errorTitle")}
                      </p>
                      <p className="mt-1 text-sm text-red-700">
                        {errorMessage || t("contact.errorMessage")}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: "#054eb4" }}
                  >
                    {isSubmitting ? t("contact.sending") : t("contact.send")}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information & Map */}
            <div className="opacity-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contact.contactInfo")}
              </h3>

              {/* Contact Details */}
              <div className="mb-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t("contact.address")}
                    </h4>
                    <p className="text-gray-600">
                      Marseille, France
                      <br />
                      Région PACA
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t("contact.phone")}
                    </h4>
                    <a
                      href="tel:0486123456"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <p className="text-gray-600">04 86 12 34 56</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t("contact.email")}
                    </h4>
                    <a
                      href="mailto:contact@vtcmarseille.fr"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <p className="text-gray-600">contact@vtcmarseille.fr</p>
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185818.573496678!2d5.3046!3d43.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9bf4344da5333%3A0x40819a5fd970220!2sMarseille%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MassiliaDrive Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
