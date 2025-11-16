import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      position = "",
      destination = "",
      message,
      locale = "fr",
    } = body;

    // Determine email language (default to French)
    const emailLocale = locale === "en" ? "en" : "fr";

    console.log("Received contact form submission:", {
      firstName,
      lastName,
      email,
      phone,
      subject,
      locale: emailLocale,
    });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      console.error("Validation failed: Missing required fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate position and destination for VTC requests
    if (subject === "vtc" && (!position || !destination)) {
      console.error(
        "Validation failed: Position and destination required for VTC"
      );
      return NextResponse.json(
        {
          error:
            emailLocale === "en"
              ? "Position and destination are required for VTC requests"
              : "Le lieu de prise en charge et la destination sont requis pour les demandes VTC",
        },
        { status: 400 }
      );
    }

    // Email configuration
    const emailConfig = {
      host: process.env.EMAIL_HOST || "plesk1.tn.oxa.host",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
      requireTLS: true, // Require TLS
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
      auth: {
        user: process.env.EMAIL_USER || "contact@waaw.tn",
        pass: process.env.EMAIL_PASSWORD || "JK0Wsb5qJ2&P",
      },
    };

    console.log("Email configuration:", {
      host: emailConfig.host,
      port: emailConfig.port,
      secure: emailConfig.secure,
      user: emailConfig.auth.user,
    });

    const transporter = nodemailer.createTransport(emailConfig);

    // Verify connection
    try {
      await transporter.verify();
      console.log("SMTP server connection verified");
    } catch (verifyError) {
      console.error("SMTP verification failed:", verifyError);
      return NextResponse.json(
        {
          error:
            "Email server connection failed. Please check your configuration.",
        },
        { status: 500 }
      );
    }

    // Format phone number with prefix
    const fullPhone = phone ? `+33 ${phone}` : "";

    // Email content - Send to admin
    const adminEmail =
      process.env.ADMIN_EMAIL || "ranizouaouicontact@gmail.com";
    const fromName = process.env.EMAIL_FROM_NAME || "MassiliaDrive";

    console.log("Sending email to:", adminEmail);
    console.log("From:", emailConfig.auth.user);
    console.log("Email language:", emailLocale);

    // Subject options mapping
    const subjectOptions = {
      fr: {
        vtc: "Besoin d'un VTC à Marseille",
        booking: "Demande de réservation",
        information: "Renseignements généraux",
        reclamation: "Réclamation",
        other: "Autre",
      },
      en: {
        vtc: "Need a VTC in Marseille",
        booking: "Booking Request",
        information: "General Information",
        reclamation: "Complaint / Reclamation",
        other: "Other",
      },
    };

    const subjectText =
      subjectOptions[emailLocale as keyof typeof subjectOptions]?.[
        subject as keyof typeof subjectOptions.fr
      ] || subject;

    // Email translations
    const emailTexts = {
      fr: {
        subject: "Nouvelle soumission du formulaire de contact",
        title: "Nouvelle soumission du formulaire de contact",
        name: "Nom",
        email: "Email",
        phone: "Téléphone",
        subjectLabel: "Sujet",
        position: "Lieu de prise en charge",
        destination: "Destination",
        message: "Message",
        confirmationTitle: "Merci de nous avoir contactés !",
        confirmationGreeting: "Cher/Chère",
        confirmationBody:
          "Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.",
        confirmationVTCBody:
          "Nous avons bien reçu votre demande de VTC. Notre équipe vous enverra une estimation du coût dans les plus brefs délais.",
        confirmationYourMessage: "Votre message :",
        confirmationRegards: "Cordialement",
      },
      en: {
        subject: "New Contact Form Submission",
        title: "New Contact Form Submission",
        name: "Name",
        email: "Email",
        phone: "Phone",
        subjectLabel: "Subject",
        position: "Pickup Location",
        destination: "Destination",
        message: "Message",
        confirmationTitle: "Thank you for contacting us!",
        confirmationGreeting: "Dear",
        confirmationBody:
          "We have received your message and will get back to you as soon as possible.",
        confirmationVTCBody:
          "We have received your VTC request. Our team will send you a cost estimation as soon as possible.",
        confirmationYourMessage: "Your message:",
        confirmationRegards: "Best regards",
      },
    };

    const texts = emailTexts[emailLocale as keyof typeof emailTexts];

    const mailOptions = {
      from: `"${fromName}" <${emailConfig.auth.user}>`,
      to: adminEmail,
      replyTo: email,
      subject: `${texts.subject}: ${subjectText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #054eb4;">${texts.title}</h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>${texts.name}:</strong> ${firstName} ${lastName}</p>
            <p><strong>${texts.email}:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>${texts.phone}:</strong> ${fullPhone}</p>
            <p><strong>${texts.subjectLabel}:</strong> ${subjectText}</p>
            ${
              subject === "vtc" && position && destination
                ? `
            <p><strong>${texts.position}:</strong> ${position}</p>
            <p><strong>${texts.destination}:</strong> ${destination}</p>
            `
                : ""
            }
            <div style="margin-top: 20px;">
              <strong>${texts.message}:</strong>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
            </div>
          </div>
        </div>
      `,
      text: `
        ${texts.title}
        
        ${texts.name}: ${firstName} ${lastName}
        ${texts.email}: ${email}
        ${texts.phone}: ${fullPhone}
        ${texts.subjectLabel}: ${subjectText}
        ${
          subject === "vtc" && position && destination
            ? `
        ${texts.position}: ${position}
        ${texts.destination}: ${destination}
        `
            : ""
        }
        ${texts.message}:
        ${message}
      `,
    };

    // Send email to admin
    console.log("Attempting to send email to admin...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);
    console.log("Email response:", info.response);
    console.log("Email accepted by server:", info.accepted);
    console.log("Email rejected by server:", info.rejected);

    // Also send confirmation email to the user
    try {
      const confirmationMailOptions = {
        from: `"${fromName}" <${emailConfig.auth.user}>`,
        to: email,
        subject:
          emailLocale === "en"
            ? `Confirmation: We received your message - ${subject}`
            : `Confirmation : Nous avons reçu votre message - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #054eb4;">${texts.confirmationTitle}</h2>
            <p>${texts.confirmationGreeting} ${firstName} ${lastName},</p>
            <p>${
              subject === "vtc"
                ? texts.confirmationVTCBody
                : texts.confirmationBody
            }</p>
            ${
              subject === "vtc" && position && destination
                ? `
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p><strong>${texts.position}:</strong> ${position}</p>
              <p><strong>${texts.destination}:</strong> ${destination}</p>
            </div>
            `
                : ""
            }
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
              <p><strong>${texts.confirmationYourMessage}</strong></p>
              <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message}</p>
            </div>
            <p style="margin-top: 20px;">${texts.confirmationRegards},<br>${fromName}</p>
          </div>
        `,
        text: `
          ${texts.confirmationTitle}
          
          ${texts.confirmationGreeting} ${firstName} ${lastName},
          
          ${
            subject === "vtc"
              ? texts.confirmationVTCBody
              : texts.confirmationBody
          }
          ${
            subject === "vtc" && position && destination
              ? `
          
          ${texts.position}: ${position}
          ${texts.destination}: ${destination}
          `
              : ""
          }
          
          ${texts.confirmationYourMessage}
          ${message}
          
          ${texts.confirmationRegards},
          ${fromName}
        `,
      };

      console.log("Sending confirmation email to user:", email);
      const confirmationInfo = await transporter.sendMail(
        confirmationMailOptions
      );
      console.log("Confirmation email sent:", confirmationInfo.messageId);
    } catch (confirmationError) {
      console.error("Failed to send confirmation email:", confirmationError);
      // Don't fail the whole request if confirmation email fails
    }

    return NextResponse.json(
      {
        message: "Email sent successfully",
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error("Error details:", { errorMessage, errorStack });

    return NextResponse.json(
      {
        error: "Failed to send email. Please try again later.",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
