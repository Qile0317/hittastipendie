import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { locales, type Locale } from "../../i18n/request";

export async function generateStaticParams() {
  return locales.map((locale: Locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "HittaStipendier.se",
  description: "Aktiva stipendier för utlandsstudier",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
