export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  field: string;
  description: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-01",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    field: "Digital Strategy & Online Presence",
    description: "Core principles of search engine presence, content marketing, digital advertising channels, and user analytics.",
  },
  {
    id: "cert-02",
    title: "Social Media Marketing",
    issuer: "Great Learning",
    field: "Audience Engagement & Social Media",
    description: "Multi-platform brand storytelling, community curation, organic growth frameworks, and social campaign planning.",
  },
  {
    id: "cert-03",
    title: "Market Research",
    issuer: "Great Learning",
    field: "Consumer Intelligence & Market Analysis",
    description: "Methodologies for primary & secondary research, competitor benchmarking, qualitative analysis, and market feasibility.",
  },
  {
    id: "cert-04",
    title: "AI for Business Professionals",
    issuer: "HP Life",
    field: "Applied Business Technology",
    description: "Practical applications of artificial intelligence tools to enhance research efficiency, data synthesis, and workflow operations.",
  },
  {
    id: "cert-05",
    title: "Financial Literacy",
    issuer: "NISM",
    field: "Commercial & Financial Acumen",
    description: "Fundamental financial concepts, investment principles, risk assessment, and market structure understanding.",
  },
];
