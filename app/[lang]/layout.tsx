import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

// Import translations statically
import frMessages from "../../messages/fr.json";
import enMessages from "../../messages/en.json";
import swMessages from "../../messages/sw.json";

const messagesMap: Record<string, typeof frMessages> = {
  fr: frMessages,
  en: enMessages as unknown as typeof frMessages,
  sw: swMessages as unknown as typeof frMessages,
};

export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
    { lang: "sw" },
  ];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export default function LocaleLayout({
  children,
  params: { lang },
}: LocaleLayoutProps) {
  const messages = messagesMap[lang];

  if (!messages) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={lang} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
