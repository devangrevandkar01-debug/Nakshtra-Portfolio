export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  statusOrScore: string;
  year: string;
  highlight?: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "Sanjay Ghodawat University",
    degree: "Bachelor of Business Administration (BBA)",
    location: "Kolhapur, Maharashtra",
    statusOrScore: "Pursuing",
    year: "Expected Graduation: 2027",
    highlight: "Specializing in Marketing, Brand Strategy, Consumer Behaviour & Digital Marketing.",
  },
  {
    institution: "K.J.S.P. Junior College",
    degree: "Higher Secondary Certificate (12th Grade)",
    location: "Malshiras, Solapur, Maharashtra",
    statusOrScore: "64.67%",
    year: "2023",
  },
  {
    institution: "K.J.S.P. High School",
    degree: "Secondary School Certificate (10th Grade)",
    location: "Malshiras, Solapur, Maharashtra",
    statusOrScore: "95.40%",
    year: "2021",
    highlight: "Academic distinction with top percentile performance.",
  },
];
