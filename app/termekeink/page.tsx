import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Termékeink | Rabka Hűtéstechnika",
  description: "Prémium klíma és hűtéstechnikai berendezések vezető márkáktól.",
};

const FEATURES = [
  { icon: "Database" as const, title: "Adatgyűjtő rendszer", desc: "Automatizált lead-gyűjtés és ügyfélkezelés." },
  { icon: "Mail" as const, title: "Email marketing", desc: "Célzott kampányok és automatikus hírlevelek." },
  { icon: "Star" as const, title: "Google értékelés gyűjtés", desc: "Több és jobb visszajelzés, automatikusan." },
  { icon: "Search" as const, title: "Jobb SEO", desc: "Magasabb helyezés, több organikus látogató." },
  { icon: "PhoneMissed" as const, title: "Missed call textback", desc: "SMS visszaigazolás minden kihagyott hívásra." },
  { icon: "Users" as const, title: "Ügyfél utánkövetés", desc: "Automatikus követés a lezárt ajánlatok után." },
];

export default function TermekekPage() {
  return <ComingSoonPage title="Termékeink" features={FEATURES} />;
}
