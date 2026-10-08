export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  date: string;
  categoryLabel: string;
  project?: string;
  description: string;
  responsibilities: string[];
  keyContribution: string;
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "exp-01",
    role: "Marketing Strategist Intern — Social Media Focus",
    company: "Yukti Yantra",
    date: "April 2026 – June 2026",
    categoryLabel: "Social Media Strategy",
    description: "Spearheaded audience-focused social media strategy and content positioning for brand consistency across digital touchpoints.",
    responsibilities: [
      "Planned and executed multi-platform social content strategies.",
      "Strengthened brand consistency and audience engagement.",
      "Conducted competitor and trend benchmarking.",
      "Identified 3 content-positioning opportunities for social growth.",
      "Pitched campaign and content concepts adopted by the team.",
      "Collaborated with design and messaging teams.",
      "Tracked weekly reach and engagement metrics.",
      "Converted findings into recommendations for future content.",
    ],
    keyContribution: "Identified 3 high-impact content-positioning opportunities adopted by the core team for sustained cross-platform engagement.",
  },
  {
    id: "exp-02",
    role: "Digital Marketing Intern",
    company: "Schola Classes",
    date: "December 2025 – January 2026",
    categoryLabel: "Digital Marketing · SEO",
    description: "Executed search optimization, content scheduling, and campaign performance monitoring to elevate organic visibility and learner engagement.",
    responsibilities: [
      "Conducted SEO keyword research.",
      "Performed on-page content optimization.",
      "Wrote and scheduled email and social media copy.",
      "Monitored campaign KPIs.",
      "Recommended performance improvements.",
      "Supported campaign planning from ideation through reporting.",
    ],
    keyContribution: "Delivered comprehensive keyword research and on-page optimization alongside structured email and social campaigns.",
  },
  {
    id: "exp-03",
    role: "Brand Launch & Marketing Lead — Student Venture",
    company: "Biz Bazaar College Fest · Sanjay Ghodawat University",
    date: "October 2025",
    categoryLabel: "Brand Launch · B2C Marketing",
    project: "Student-led Mojito Brand",
    description: "Directed end-to-end brand creation, positioning, tasting trial, and consumer activation for an artisan beverage venture at the university festival.",
    responsibilities: [
      "Planned launch strategy.",
      "Developed naming and positioning.",
      "Conducted market and consumer research.",
      "Planned promotion and activation.",
      "Executed audience engagement.",
      "Conducted product sampling.",
      "Applied B2C marketing.",
      "Used brand storytelling.",
      "Worked on product differentiation.",
    ],
    keyContribution: "Designed distinctive naming, on-ground product sampling, and experiential storytelling that drove rapid trial and campus brand awareness.",
  },
  {
    id: "exp-04",
    role: "Market Research Consultant — Client Project",
    company: "Independent Client Engagement",
    date: "2026",
    categoryLabel: "Market Research · Market Entry",
    description: "Conducted regional consumer and competitor landscape evaluation to advise leadership on commercial expansion into Tier 2 and Tier 3 cities.",
    responsibilities: [
      "Conducted market research for business expansion.",
      "Evaluated Tier 2 and Tier 3 city opportunities.",
      "Analyzed consumer preferences.",
      "Studied target-market characteristics.",
      "Analyzed competition.",
      "Identified market opportunities.",
      "Developed recommendations for market selection.",
      "Supported positioning and market-entry decisions.",
    ],
    keyContribution: "Synthesized regional characteristics into structured market-selection scorecards and strategic market-entry briefs for executive decision-makers.",
  },
  {
    id: "exp-05",
    role: "Freelance Digital Marketing & Branding Consultant",
    company: "Independent",
    date: "April 2025 – June 2025",
    categoryLabel: "Freelance · Branding · Social Media",
    description: "Supported independent initiatives and creative projects through audience research, editorial calendars, and brand voice recommendations.",
    responsibilities: [
      "Built social media content calendars.",
      "Developed branding recommendations.",
      "Created audience research frameworks.",
      "Researched social media trends.",
      "Studied consumer behaviour.",
      "Conducted competitor research.",
      "Supported marketing campaigns.",
      "Worked on independent music projects.",
      "Focused on audience engagement.",
    ],
    keyContribution: "Devised structured content calendars and audience engagement frameworks for client campaigns and independent music initiatives.",
  },
];
