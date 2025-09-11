interface SEOMetaData {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  locale?: string;
}

interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

class SEOManager {
  private static instance: SEOManager;
  private defaultMeta: SEOMetaData = {
    title: "KodLab Junior 7-17 Yaş Çocuklar İçin Kodlama ve Tasarım Eğitimi",
    description: "7-17 yaş arası çocuklar için eğlenceli ve etkili kodlama eğitimleri. Geleceğin teknolojisini bugünden öğrenmeye başlayın!",
    keywords: "kodlama eğitimi, çocuk kodlama, programlama kursu, python, scratch, web tasarım, robotik, 7-17 yaş, online eğitim, teknoloji eğitimi",
    image: "https://kodlabjunior.com/sitepreview.png",
    url: "https://kodlabjunior.com",
    type: "website",
    siteName: "KodLab Junior",
    locale: "tr_TR"
  };

  static getInstance(): SEOManager {
    if (!SEOManager.instance) {
      SEOManager.instance = new SEOManager();
    }
    return SEOManager.instance;
  }

  updateMetaTags(meta: SEOMetaData): void {
    const finalMeta = { ...this.defaultMeta, ...meta };

    // Update title
    if (finalMeta.title) {
      document.title = finalMeta.title;
      this.updateMetaTag('og:title', finalMeta.title);
      this.updateMetaTag('twitter:title', finalMeta.title);
    }

    // Update description
    if (finalMeta.description) {
      this.updateMetaTag('description', finalMeta.description);
      this.updateMetaTag('og:description', finalMeta.description);
      this.updateMetaTag('twitter:description', finalMeta.description);
    }

    // Update keywords
    if (finalMeta.keywords) {
      this.updateMetaTag('keywords', finalMeta.keywords);
    }

    // Update image
    if (finalMeta.image) {
      this.updateMetaTag('og:image', finalMeta.image);
      this.updateMetaTag('twitter:image', finalMeta.image);
    }

    // Update URL
    if (finalMeta.url) {
      this.updateMetaTag('og:url', finalMeta.url);
      this.updateMetaTag('twitter:url', finalMeta.url);
      this.updateCanonical(finalMeta.url);
    }

    // Update type
    if (finalMeta.type) {
      this.updateMetaTag('og:type', finalMeta.type);
    }

    // Update site name
    if (finalMeta.siteName) {
      this.updateMetaTag('og:site_name', finalMeta.siteName);
    }

    // Update locale
    if (finalMeta.locale) {
      this.updateMetaTag('og:locale', finalMeta.locale);
    }
  }

  private updateMetaTag(name: string, content: string): void {
    let selector: string;
    let attribute: string;

    if (name.startsWith('og:') || name.startsWith('twitter:')) {
      selector = `meta[property="${name}"]`;
      attribute = 'property';
    } else {
      selector = `meta[name="${name}"]`;
      attribute = 'name';
    }

    let metaTag = document.querySelector(selector) as HTMLMetaElement;

    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attribute, name);
      document.head.appendChild(metaTag);
    }

    metaTag.setAttribute('content', content);
  }

  private updateCanonical(url: string): void {
    let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }

    canonicalTag.setAttribute('href', url);
  }

  addStructuredData(data: StructuredData): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }

  generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>): StructuredData {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  generateCourseStructuredData(course: {
    name: string;
    description: string;
    provider: string;
    url: string;
    price?: string;
    currency?: string;
  }): StructuredData {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.name,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": course.provider,
        "url": "https://kodlabjunior.com"
      },
      "url": course.url,
      "teaches": "Kodlama ve Programlama",
      "audience": {
        "@type": "Audience",
        "audienceType": "Children",
        "suggestedMinAge": 7,
        "suggestedMaxAge": 17
      },
      ...(course.price && {
        "offers": {
          "@type": "Offer",
          "price": course.price,
          "priceCurrency": course.currency || "TRY",
          "availability": "https://schema.org/InStock"
        }
      })
    };
  }

  generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>): StructuredData {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }
}

// SEO Hooks for React components
export const useSEO = () => {
  const seoManager = SEOManager.getInstance();

  const updateSEO = (meta: SEOMetaData) => {
    seoManager.updateMetaTags(meta);
  };

  const addStructuredData = (data: StructuredData) => {
    seoManager.addStructuredData(data);
  };

  return {
    updateSEO,
    addStructuredData,
    generateBreadcrumbStructuredData: seoManager.generateBreadcrumbStructuredData,
    generateCourseStructuredData: seoManager.generateCourseStructuredData,
    generateFAQStructuredData: seoManager.generateFAQStructuredData
  };
};

// Utility functions
export const generateSlug = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength - 3) + '...';
};

// Page-specific SEO configurations
export const pageSEOConfigs = {
  home: {
    title: "KodLab Junior 7-17 Yaş Çocuklar İçin Kodlama ve Tasarım Eğitimi",
    description: "7-17 yaş arası çocuklar için eğlenceli ve etkili kodlama eğitimleri. Python, Scratch, web tasarım ve robotik dersleri. Ücretsiz deneme dersi!",
    keywords: "kodlama eğitimi, çocuk kodlama, programlama kursu, python, scratch, web tasarım, robotik, 7-17 yaş, online eğitim",
    url: "https://kodlabjunior.com/"
  },
  courses: {
    title: "Kodlama Kursları - KodLab Junior",
    description: "Çocuklar için özel olarak tasarlanmış kodlama kursları. Python, Scratch, web geliştirme ve robotik eğitimleri.",
    keywords: "kodlama kursları, python kursu, scratch eğitimi, web geliştirme, robotik, çocuk programlama",
    url: "https://kodlabjunior.com/kurslar"
  },
  faq: {
    title: "Sıkça Sorulan Sorular - KodLab Junior",
    description: "Kodlama eğitimlerimiz hakkında merak ettiğiniz tüm soruların cevapları burada.",
    keywords: "sıkça sorulan sorular, kodlama eğitimi sss, kurs bilgileri",
    url: "https://kodlabjunior.com/sss"
  },
  refund: {
    title: "İade Politikası - KodLab Junior",
    description: "KodLab Junior iade politikası ve koşulları hakkında detaylı bilgi.",
    keywords: "iade politikası, geri ödeme, kurs iptali",
    url: "https://kodlabjunior.com/iade-politikasi"
  }
};

export default SEOManager; 