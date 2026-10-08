import perfumeImage from "../assets/images/case_study_perfume_1790961668814.jpg";
import consumerImage from "../assets/images/case_study_consumer_1790961678194.jpg";
import mojitoImage from "../assets/images/case_study_mojito_1790961689344.jpg";
import marketExpansionImage from "../assets/images/case_study_market_expansion_1790961700234.jpg";

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  category: string;
  categoryTag: string;
  shortDescription: string;
  heroImage: string;
  typeBadge: string;
  flowSteps?: string[];
  overview: string;
  challenge: string;
  approach?: string[];
  research: string;
  consumerInsight: string;
  strategy: string;
  execution: string;
  learning: string;
  outcome: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "01",
    slug: "emotion-led-perfume-strategy",
    title: "Emotion-Led Social Media Strategy",
    category: "Brand Strategy · Social Media · Consumer Psychology",
    categoryTag: "Brand Strategy",
    shortDescription: "An emotion-based storytelling and sensory content strategy developed to differentiate a perfume brand in a competitive market.",
    heroImage: perfumeImage,
    typeBadge: "Strategy-Focused Case Study",
    flowSteps: ["Sensory Research", "Emotional Triggers", "Brand Positioning", "Content Narratives", "Community Resonance"],
    overview: "In a fragmented fragrance sector dominated by legacy luxury names and generic glamorous imagery, this strategy explores how an emerging perfume brand can build authentic differentiation by tapping directly into sensory human memories and personal emotional rituals.",
    challenge: "How can a fragrance brand create genuine emotional differentiation in a crowded market where traditional feature-led marketing and generic notes fail to capture buyer affection?",
    approach: [
      "Emotional storytelling anchored in authentic memory recall",
      "Sensory positioning centered on personal scent identity rather than status",
      "Audience understanding exploring psychological motivations behind fragrance application",
      "Social content strategy engineered for reflective engagement over passive scrolling",
    ],
    research: "Conducted qualitative analysis into how consumers select, wear, and reminisce about scents. Scent is intimately linked to the brain's limbic system, meaning decisions are intensely personal and rooted in nostalgic moments, comforting rituals, and aspiration.",
    consumerInsight: "Consumers do not merely buy fragrance for its molecular chemistry or aromatic top-notes; they purchase fragrance as an emotional armor, a subconscious identity statement, and a portal to cherished memories.",
    strategy: "Connect fragrance with emotions, memories, identity, and sensory experiences. Rather than listing cold notes (bergamot, sandalwood, amber), position each scent around an evocative lived feeling: early morning solitude, dusk introspection, or grounded quiet confidence.",
    execution: "Developed a comprehensive social content framework with three core editorial pillars: Sensory Micro-Narratives (vivid sensory vignettes), Scent Identity Mapping (matching feelings to notes), and Audience Scent Memories (curated personal community anecdotes). Paired with minimalist tactile art direction.",
    learning: "Audience resonance and brand intimacy multiply when communication mirrors the wearer's internal psychological landscape rather than imposing external status standards.",
    outcome: "Strategy-focused case study. Details available upon request.",
  },
  {
    id: "02",
    slug: "consumer-loyalty-brand-preference",
    title: "Consumer Loyalty & Brand Preference",
    category: "Consumer Research · Brand Strategy",
    categoryTag: "Consumer Research",
    shortDescription: "A consumer research case study exploring loyalty triggers, brand-switching behaviour, and preference patterns.",
    heroImage: consumerImage,
    typeBadge: "Research-Driven Strategy",
    flowSteps: ["Research", "Consumer Behaviour", "Insights", "Social Positioning", "Brand Strategy"],
    overview: "An in-depth investigation into modern consumer decision journeys, analyzing why buyers abandon established brands and what behavioral triggers sustain genuine repeat preference in commoditized categories.",
    challenge: "Identifying the precise psychological friction points and behavioral incentives that drive brand-switching versus cementing sustainable consumer loyalty.",
    approach: [
      "Behavioral friction auditing across touchpoints",
      "Assessment of habit formation vs transactional discounts",
      "Qualitative interviews on perceived switching costs",
      "Synthesis into actionable social positioning guidelines",
    ],
    research: "Analyzed consumer repurchase patterns across retail and digital touchpoints. Examined the psychological contrast between transactional retention (loyalty points, coupons) and emotional retention (shared values, uncompromised consistency, effortless experience).",
    consumerInsight: "Modern loyalty is rarely earned through transactional point systems; it is cemented through psychological safety, friction-free reliability, and perceived cultural alignment with the buyer's self-image.",
    strategy: "Transition brand messaging from periodic promotional discounts to continuous trust-reinforcement. Build social positioning that addresses subtle micro-frictions, celebrates customer rituals, and reinforces post-purchase validation.",
    execution: "Created a 5-stage Consumer Retention Matrix mapping touchpoints from first conversion to habitual advocacy. Developed strategic content templates for brand transparency, customer recognition, and empathetic service communication.",
    learning: "Minor recurring micro-frustrations (clunky interfaces, broken promises, inconsistent tone) drive brand switching far more decisively than aggressive competitor discounts.",
    outcome: "Strategy-focused case study. Details available upon request.",
  },
  {
    id: "03",
    slug: "mojito-student-brand-launch",
    title: "Mojito Student Brand Launch",
    category: "Brand Launch · B2C Marketing",
    categoryTag: "Live Brand Activation",
    shortDescription: "A student-led brand launch developed for Biz Bazaar College Fest at Sanjay Ghodawat University.",
    heroImage: mojitoImage,
    typeBadge: "Live Venture & Activation",
    flowSteps: ["Brand Naming", "Brand Positioning", "Consumer Research", "Promotion", "Product Sampling", "Audience Engagement", "Brand Storytelling", "Activation"],
    overview: "A student-led entrepreneurial venture executed at the Biz Bazaar College Fest at Sanjay Ghodawat University, bringing a fresh, artisan mocktail beverage to life through creative branding, sensory sampling, and audience-first activation.",
    challenge: "How to introduce a completely new student beverage brand in a crowded, high-noise festival environment and convert spontaneous campus footfall into enthusiastic repeat buyers.",
    approach: [
      "Rapid consumer taste surveying and recipe refinement",
      "Vibrant brand naming and playful visual aesthetic",
      "Sensory sampling strategy for instant taste validation",
      "On-ground activation and live peer storytelling",
    ],
    research: "Conducted preliminary student taste-testing to assess sweetness balance, refreshing citrus notes, price-point sensitivity, and packaging appeal. Identified that students desired premium-feeling, highly photogenic beverages without prohibitive prices.",
    consumerInsight: "Students respond enthusiastically to fresh, handcrafted authenticity over mass-produced beverages, especially when presented with vibrant visual flair and genuine peer energy.",
    strategy: "Position the brand as the essential revitalizing celebration drink of the festival. Combine memorable naming, transparent fresh-ingredient display, and interactive customer engagement at the booth.",
    execution: "Designed the full brand identity, signage, and menu boards. Implemented live sensory sampling stations allowing attendees to taste before purchasing. Coordinated energetic on-ground storytelling and word-of-mouth student network buzz.",
    learning: "Immediate sensory proof (guided taste sampling) coupled with high-energy, relatable storytelling eliminates purchase hesitation faster than traditional promotional signage.",
    outcome: "Successfully launched and activated at Biz Bazaar College Fest, achieving strong campus engagement and rapid sell-through. Details available upon request.",
  },
  {
    id: "04",
    slug: "tier-2-tier-3-market-expansion",
    title: "Tier 2 & Tier 3 Market Expansion Research",
    category: "Market Research · Market Entry",
    categoryTag: "Market Research",
    shortDescription: "A client research project evaluating business expansion opportunities into Tier 2 and Tier 3 cities.",
    heroImage: marketExpansionImage,
    typeBadge: "Client Research Engagement",
    flowSteps: ["Market Research", "Consumer Preferences", "Competition", "Target Market", "Opportunity Identification", "Market Selection", "Positioning", "Market Entry"],
    overview: "A comprehensive market intelligence project evaluating commercial expansion prospects across emerging Tier 2 and Tier 3 urban centers for an expanding enterprise.",
    challenge: "Determining whether and where to expand business operations beyond Tier 1 metropolitan markets, while navigating distinct regional consumer preferences, distribution realities, and competitive landscapes.",
    approach: [
      "Rigorous secondary and field data analysis on regional consumer behaviour",
      "Evaluation of local competitive density and alternative services",
      "Target demographic segmentation and spending propensity profiling",
      "Development of a multi-criteria Market Selection Scorecard",
    ],
    research: "Systematically assessed demographic indices, retail infrastructure, consumer adoption patterns, and local marketing channels across shortlisted regional urban clusters in Maharashtra and western India.",
    consumerInsight: "Consumers in Tier 2 and Tier 3 cities place exceptional weight on personal trust, verified community credibility, and tangible value-for-money rather than abstract lifestyle branding.",
    strategy: "Formulate a phased, low-friction entry roadmap prioritizing regional hub cities with high readiness scores. Recommend localized messaging emphasizing reliability, transparent value, and local community presence.",
    execution: "Delivered a structured strategic dossier including comparative city evaluation matrices, regional persona profiles, competitive risk audits, and actionable market-entry positioning guidelines.",
    learning: "A direct 'copy-paste' of Tier 1 metropolitan marketing playbooks fails; successful expansion requires respecting local cultural nuance, trusted community channels, and direct value demonstration.",
    outcome: "Strategy-focused case study for client expansion. Details available upon request.",
  },
];
