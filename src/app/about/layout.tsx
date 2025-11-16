import { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos de Nous | MassiliaDrive",
  description:
    "Découvrez l'histoire de MassiliaDrive, votre partenaire de confiance pour des services de transfert premium à Marseille et dans la région PACA. Chauffeurs expérimentés.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
