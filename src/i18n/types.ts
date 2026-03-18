export type Locale = "es" | "en";

export type TNavigation = {
  brand: string;
  services: string;
  portfolio: string;
  contact: string;
};

export type TLink = {
  label: string;
  href: string;
};

export type THome = {
  general: {
    title: string;
    description: string;
  };
  navigation: TNavigation;
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: TLink;
    secondaryCta: TLink;
  };

  services: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  };

  engineering: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
};