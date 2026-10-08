export interface ProfileInfo {
  name: string;
  fullName: string;
  tagline: string;
  heroHeading: string;
  heroSupporting: string;
  heroDescription: string;
  philosophy: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  linkedinDisplay: string;
  educationSummary: {
    degree: string;
    institution: string;
    status: string;
    graduation: string;
  };
  stats: {
    value: string;
    label: string;
    detail: string;
  }[];
  focusAreas: string[];
  professionalInterests: string[];
}

export const profileData: ProfileInfo = {
  name: "Nakshatra",
  fullName: "Nakshatra Jaysing Pachpund",
  tagline: "Marketing Strategist · Brand Strategist · Digital Marketer · Market Researcher",
  heroHeading: "Building brands around what people actually care about.",
  heroSupporting: "Marketing strategist focused on brand positioning, digital growth, consumer insights, and audience-first storytelling.",
  heroDescription: "I combine creative storytelling with consumer research to develop practical marketing strategies that connect brands with the right audiences.",
  philosophy: "Understand the audience. Find the insight. Build the strategy. Create the connection.",
  email: "nakshatrapachpund@gmail.com",
  phone: "+91 9960273765",
  location: "Malshiras, Solapur, Maharashtra",
  linkedin: "https://linkedin.com/in/nakshatrapachpund",
  linkedinDisplay: "linkedin.com/in/nakshatrapachpund",
  educationSummary: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "Sanjay Ghodawat University, Kolhapur",
    status: "Pursuing",
    graduation: "2027",
  },
  stats: [
    {
      value: "2,000+",
      label: "Professional LinkedIn Network",
      detail: "Marketers, founders & brand strategists",
    },
    {
      value: "3+",
      label: "Professional Experiences",
      detail: "Marketing internships & student venture lead",
    },
    {
      value: "2027",
      label: "Expected BBA Graduation",
      detail: "Sanjay Ghodawat University",
    },
  ],
  focusAreas: [
    "Marketing Strategy",
    "Brand Strategy",
    "Digital Marketing",
    "Market Research",
    "Consumer Behaviour",
  ],
  professionalInterests: [
    "Brand Building",
    "Consumer Psychology",
    "Digital Growth",
    "Content Strategy",
    "Marketing Analytics",
  ],
};
