export interface SkillGroup {
  number: string;
  category: string;
  description: string;
  skills: string[];
}

export const skillGroupsData: SkillGroup[] = [
  {
    number: "01",
    category: "Marketing Strategy",
    description: "Architecting brand foundations, sustainable market positioning, and goal-oriented campaign architectures.",
    skills: [
      "Marketing Strategy & Planning",
      "Brand Strategy",
      "Brand Positioning",
      "Campaign Planning",
    ],
  },
  {
    number: "02",
    category: "Digital Marketing",
    description: "Driving discoverability, community resonance, and multi-channel content performance across digital platforms.",
    skills: [
      "Digital Marketing",
      "Social Media Strategy",
      "Content Strategy",
      "SEO",
      "Keyword Research",
      "Community Engagement",
    ],
  },
  {
    number: "03",
    category: "Research",
    description: "Decoding audience motivations, competitive landscapes, and emerging macro trends to anchor strategies in truth.",
    skills: [
      "Market Research",
      "Consumer Insights",
      "Competitor Analysis",
      "Trend Analysis",
      "Consumer Behaviour",
    ],
  },
  {
    number: "04",
    category: "Creative & Communication",
    description: "Crafting resonant narratives, distinct brand voices, and high-clarity strategic communications.",
    skills: [
      "Copywriting",
      "Brand Voice",
      "Content Planning",
      "Communication",
      "Presentation",
    ],
  },
  {
    number: "05",
    category: "Analytics",
    description: "Tracking quantitative indicators to translate engagement patterns into actionable strategic optimization.",
    skills: [
      "Marketing Analytics",
      "Campaign KPIs",
      "Reach Analysis",
      "Engagement Analysis",
    ],
  },
];

export interface FrameworkStep {
  step: string;
  name: string;
  description: string;
  deliverable: string;
}

export const marketingFrameworkSteps: FrameworkStep[] = [
  {
    step: "01",
    name: "Research",
    description: "Conduct primary & secondary audits, competitor benchmarking, and consumer sentiment gathering.",
    deliverable: "Landscape & Competitor Audit",
  },
  {
    step: "02",
    name: "Insight",
    description: "Uncover underlying psychological friction, unmet emotional desires, and behavioral catalysts.",
    deliverable: "Consumer Truth Statement",
  },
  {
    step: "03",
    name: "Strategy",
    description: "Formulate a differentiated value hypothesis aligning brand capability with audience reality.",
    deliverable: "Strategic Brand Blueprint",
  },
  {
    step: "04",
    name: "Positioning",
    description: "Carve an unmistakable space in the consumer's mind through distinctive category framing.",
    deliverable: "Positioning Statement & Narrative",
  },
  {
    step: "05",
    name: "Content",
    description: "Translate high-level positioning into structured editorial pillars, brand voice, and message matrices.",
    deliverable: "Editorial Framework & Calendar",
  },
  {
    step: "06",
    name: "Campaign",
    description: "Deploy synchronized multi-channel storytelling and experiential activations across touchpoints.",
    deliverable: "Multi-Platform Launch Plan",
  },
  {
    step: "07",
    name: "Measurement",
    description: "Monitor weekly reach, audience engagement depth, retention indicators, and core KPIs.",
    deliverable: "Performance Tracking Dashboard",
  },
  {
    step: "08",
    name: "Optimization",
    description: "Iterate messaging, refine targeting, and feed real-world consumer feedback into future cycles.",
    deliverable: "Refined Iteration Roadmap",
  },
];
