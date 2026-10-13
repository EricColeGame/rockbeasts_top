export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Rockbeasts Wiki",
  shortName: "Rockbeasts",
  logoText: "RB",
  tagline: "Guides, Creatures, Characters & Gameplay",
  description: "Your ultimate Rockbeasts wiki: creature and character details, gameplay and band management guides, progression tips, and everything about the rock & roll management RPG.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rockbeasts.top",
  supportEmail: "support@rockbeasts.top",
  gameUrl: "https://store.steampowered.com/app/1445880/Rockbeasts/",
  heroVideoId: "AF5ozCMpFrE", // ROCKBEASTS | Gameplay Trailer 2 | Lichthund
  social: {
    discord: "https://discord.gg/EEvM3T3SNv",
    youtube: "https://www.youtube.com/@LichthundDev",
    twitter: "https://x.com/RockbeastsGame",
  },
  locales: ["en", "de", "fr", "es"],
  defaultLocale: "en",
};
