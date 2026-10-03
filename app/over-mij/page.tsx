import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/schema";
import { IconCheck, IconHeart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Hanan El Morabit | Kraamzorg in Almere met Hart & Ziel",
  description:
    "Hanan El Morabit: uw vertrouwde kraamverzorgende in Almere. Warme, professionele zorg met ruim 25 jaar ervaring. Ontdek mijn aanpak.",
  alternates: { canonical: "/over-mij" },
};

const waarom = [
  { title: "Persoonlijke zorg", text: "Persoonlijke aandacht voor moeder én kind, met ondersteuning die verder gaat dan de basiszorg. Ik kijk naar úw verhaal, úw behoeften en úw gezinssituatie." },
  { title: "Ervaren & betrokken", text: "Met 25+ jaar ervaring in de kraamzorg en als moeder van vier weet ik wat er écht toe doet. Deskundig
