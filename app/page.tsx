"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Determine the user's preferred or saved locale
    let savedLocale = "fr";
    try {
      savedLocale = localStorage.getItem("locale") || "fr";
      if (!["fr", "en", "sw"].includes(savedLocale)) {
        savedLocale = "fr";
      }
    } catch {
      // localStorage might not be available or throw error in some browser environments
    }
    router.replace(`/${savedLocale}`);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-kivuBlue"></div>
        <p className="text-sm text-gray-500 dark:text-gray-400">Loading John Moka...</p>
      </div>
    </div>
  );
}
