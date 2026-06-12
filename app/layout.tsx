import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PWARegister from "@/components/PWARegister";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "John Moka | Full-Stack Developer",
  description: "Portfolio professionnel de John Moka — Développeur Full-Stack, UI/UX Designer et Co-fondateur de TAL Communities. Découvrez mes projets, compétences et parcours.",
  keywords: ["John Moka", "TAL Communities", "Bukavu", "DRC", "Developer", "Flutter", "Next.js", "Django", "Congolese Developer"],
  authors: [{ name: "John Moka", url: "https://github.com/johnmoka111" }],
  verification: {
    google: "JRSScFix7NY9LacKoR_tUbYJb7KuqPafpxnv-J8HFkM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/john.png" type="image/png" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta name="google-site-verification" content="JRSScFix7NY9LacKoR_tUbYJb7KuqPafpxnv-J8HFkM" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className="font-sans antialiased text-[#1F2937] bg-[#F9FAFB] dark:text-[#F3F4F6] dark:bg-[#111827] min-h-screen">
        <PWARegister />
        {children}
      </body>
    </html>
  );
}
