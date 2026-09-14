import { projects, type Project } from "./projects-data";
import { services, type Service } from "./services-data";
import {
  ORGANIZATION_ID,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LANGUAGE,
  SITE_LEGAL_NAME,
  SITE_LOCALE,
  SITE_NAME,
  SITE_PHONE,
  SITE_SAME_AS,
  SITE_TAGLINE,
  SITE_URL,
  WEBSITE_ID,
  absoluteUrl,
} from "./site";

type HeadInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
};

export function pageHead({ title, description, path, image, type = "website", noindex = false }: HeadInput) {
  const url = absoluteUrl(path);
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl("/favicon.png");

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large" },
      { name: "author", content: SITE_NAME },
      { name: "language", content: SITE_LANGUAGE },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { property: "og:image:alt", content: title },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: SITE_LOCALE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: title },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    alternateName: ["RIZIQ Inventions", "RIZ IQ"],
    url: SITE_URL,
    slogan: SITE_TAGLINE,
    description: SITE_DESCRIPTION,
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "Engineering projects",
      "Student major and mini projects",
      "IoT projects",
      "Robotics and automation",
      "Embedded systems",
      "VLSI",
      "MATLAB",
      "Software development",
      "Artificial intelligence",
      "Research paper assistance",
      "Research publications",
      "Technical workshops",
      "Faculty Development Programs",
      "Campus Recruitment Training",
      "Mechanical CAD and CAE",
      "Civil engineering design",
    ],
    founder: {
      "@type": "Person",
      name: "Jessy Yadav Maddina",
      jobTitle: "Founder & CEO",
      url: absoluteUrl("/about"),
    },
    sameAs: [...SITE_SAME_AS],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      availableLanguage: ["English"],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function webPageSchema(input: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
}) {
  return {
    "@type": input.type ?? "WebPage",
    "@id": `${absoluteUrl(input.path)}#webpage`,
    url: absoluteUrl(input.path),
    name: input.title,
    description: input.description,
    inLanguage: SITE_LANGUAGE,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "India" },
    url: absoluteUrl(`/services/${service.slug}`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} offerings`,
      itemListElement: service.offerings.map((offering) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: offering.title,
          description: offering.detail,
        },
      })),
    },
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function personSchema() {
  return {
    "@type": "Person",
    name: "Jessy Yadav Maddina",
    jobTitle: "Founder & CEO",
    worksFor: { "@id": ORGANIZATION_ID },
    url: absoluteUrl("/about"),
    description:
      "Founder and CEO of RIZIQ. M.Tech graduate with more than five years of experience leading research-led engineering, teaching and technology delivery.",
    knowsAbout: ["Research", "Engineering education", "Embedded systems", "Technology training"],
  };
}

export function projectSchema(project: Project) {
  return {
    "@type": "TechArticle",
    headline: project.title,
    description: project.summary,
    about: project.industry,
    image: project.image.startsWith("http") ? project.image : absoluteUrl(project.image),
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    mainEntityOfPage: absoluteUrl(`/projects/${project.slug}`),
    keywords: [project.industry, "engineering project", "RIZIQ case study"],
  };
}

export function serviceListSchema() {
  return {
    "@type": "ItemList",
    name: "RIZIQ technology services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: absoluteUrl(`/services/${service.slug}`),
    })),
  };
}

export function projectListSchema() {
  return {
    "@type": "ItemList",
    name: "RIZIQ engineering project case studies",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
    })),
  };
}

export function jsonLdGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export const serviceSeo: Record<Service["slug"], { title: string; description: string }> = {
  "software-development": {
    title: "Software Development & Custom Applications | RIZIQ",
    description:
      "Custom web, mobile and cloud software from RIZIQ for teams that need reliable applications, integrations and long-term improvement.",
  },
  "ai-machine-learning": {
    title: "AI & Machine Learning Solutions | RIZIQ",
    description:
      "Practical AI, machine learning, computer vision and GenAI systems from RIZIQ, built with evaluation, oversight and a clear purpose.",
  },
  "iot-solutions": {
    title: "IoT Projects & Smart Systems | RIZIQ",
    description:
      "IoT, sensor, Arduino and Raspberry Pi systems from RIZIQ that make field conditions visible, measurable and easier to act on.",
  },
  robotics: {
    title: "Robotics & Automation Projects | RIZIQ",
    description:
      "Robotics, motion control and automation prototypes from RIZIQ for research, labs, training and task-specific engineering work.",
  },
  "embedded-systems": {
    title: "Embedded Systems & VLSI Development | RIZIQ",
    description:
      "Firmware, FPGA, PCB and VLSI foundations from RIZIQ for connected products and machines that must work beyond the lab.",
  },
  "training-workshops": {
    title: "Engineering Training, FDP & CRT | RIZIQ",
    description:
      "Workshops, student projects, Faculty Development Programs, CRT and campus training from RIZIQ for colleges and engineering teams.",
  },
  "mechanical-engineering-cad-cae": {
    title: "Mechanical Engineering, CAD & CAE | RIZIQ",
    description:
      "SolidWorks, CATIA, ANSYS and CAD/CAE support from RIZIQ for 3D modelling, analysis, drawings and prototype-ready design.",
  },
  "matlab-engineering-simulation": {
    title: "MATLAB & Engineering Simulation | RIZIQ",
    description:
      "MATLAB, Simulink and system modelling support from RIZIQ for analysis, control simulation and documented engineering results.",
  },
  "civil-engineering-design": {
    title: "Civil Engineering & CAD Design | RIZIQ",
    description:
      "AutoCAD, Civil 3D and structural design documentation from RIZIQ for students, consultants and project teams.",
  },
  "research-publications": {
    title: "Research Papers & Publication Support | RIZIQ",
    description:
      "Ethical research assistance from RIZIQ for topic selection, literature review, methodology, paper writing and publication readiness.",
  },
};
