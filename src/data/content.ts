// Central copy + data store for the one-page portfolio.
// Philosophy: show, don't tell — the resume carries the narrative, this page
// carries the evidence. Keep every string here as short as it can be.

export const EMAIL = "ban.sauvik@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sauvik-banerjee-a1b28b151/";

export const LINKS = {
  sportsRush: "https://thesportsrush.com/author/sauvikbanerjee/",
  essentiallySports: "https://www.essentiallysports.com/author/sauvik-banerjee/",
  sooperScript: "https://sooperscript.com/",
  proFootballAction: "https://profootballaction.com/",
  wagLife: "https://waglife.beehiiv.com/",
};

export const website = {
  name: "Pro Football Action",
  url: "profootballaction.com",
  graphs: [
    {
      label: "Pro Football Action lifetime pageviews graph",
      src: "images/pfa-lifetime-pageviews.jpeg",
      aspect: "aspect-[1170/1110]",
      contentBg: "bg-ink",
      stat: "1.8L",
      detail: "Lifetime pageviews, Oct 2023 – Aug 2026",
    },
    {
      label: "Pro Football Action sessions by landing page graph",
      src: "images/pfa-website-sessions.jpg",
      aspect: "aspect-[1600/581]",
      contentBg: "bg-paper",
      stat: "Sessions",
      detail: "By landing page, all-time",
    },
  ],
};

export const heroStats = [
  { numeric: 30, suffix: "M+", label: "Monthly views scaled" },
  { numeric: 100, suffix: "M+", label: "Organic social views" },
  { numeric: 92, suffix: "K", label: "Facebook followers" },
  { numeric: 180, suffix: "K+", label: "Independent-media pageviews" },
];

export interface ArticleShot {
  label: string;
  src?: string;
  pageviews: number;
}

export const tsrArticles: ArticleShot[] = [
  { label: "TSR article: Travis Hunter debut game", src: "images/tsr-article-travis-hunter.jpg", pageviews: 512960 },
  { label: "TSR article: Patrick Mahomes dream mansion", src: "images/tsr-article-mahomes-mansion.jpg", pageviews: 333539 },
  { label: "TSR article: Shedeur Sanders' Mercedes Maybach", src: "images/tsr-article-shedeur-sanders.jpg", pageviews: 274257 },
  { label: "TSR title: Tyreek Hill gifting his parents cars", src: "images/tsr-title-tyreek-hill.jpg", pageviews: 463951 },
  { label: "TSR title: The Rock responds to Colin Kaepernick", src: "images/tsr-title-kaepernick-rock.jpg", pageviews: 447942 },
  { label: "TSR title: Odell Beckham Jr. Ravens deal", src: "images/tsr-title-odell-beckham.jpg", pageviews: 283557 },
];

export const mentorship = {
  intro: "I mentored a newly onboarded writer through their first week on the team, logging progress day by day.",
  pageShotLabel: "Mentorship program log, day 1",
  pageSrc: "images/mentorship-log-page-1.jpg",
  pdfUrl: "documents/mentorship-program-log.pdf",
  stats: [
    { value: "7 days", label: "Mentorship sprint" },
    { value: "5/day", label: "Articles published" },
    { value: "~1h45m", label: "Avg. time per article by day 7" },
  ],
  before: [
    "Struggled with article format and structure",
    "Misused featured images",
    "Wrote overly complex sentences",
    "Inconsistent publishing pace without supervision",
  ],
  after: [
    "Writing flair and article structure improved",
    "Pieces went publish-ready, cutting editor rework time",
    "Articles began ranking in Google Top Stories and Discover",
    "Confidence, initiative and motivation all up",
  ],
};

export const socialProfiles = [
  {
    platform: "Instagram",
    handle: "@profootballaction",
    followers: "7,802 followers",
    src: "images/pfa-instagram-profile.jpg",
    url: "https://www.instagram.com/profootballaction/",
  },
  {
    platform: "YouTube",
    handle: "@ProFootballAction",
    followers: "152 subscribers",
    src: "images/pfa-youtube-channel.jpg",
    url: "https://www.youtube.com/@ProFootballAction",
  },
  {
    platform: "Facebook",
    handle: "Deion Sanders Fan Club",
    followers: "92K followers",
    src: "images/pfa-facebook-page.jpg",
    url: "https://www.facebook.com/profile.php?id=61550786892131",
  },
];

export const facebookGrowth = {
  label: "Pro Football Action Facebook page views graph",
  src: "images/facebook-page-metrics.jpg",
  views: "100.2M",
  detail: "All-organic page views, 0 from ads.",
};

export const socialProof = [
  {
    name: "Shaquille O'Neal",
    detail: "Reshared Pro Football Action content to his Instagram Story.",
    shotLabel: "Shaquille O'Neal Instagram Story share screenshot",
    src: "images/shaq-ig-story-share.jpg",
  },
  {
    name: "Chad Johnson",
    detail: "126K impressions on a Pro Football Action post.",
    shotLabel: "Chad Johnson engagement screenshot",
    src: "images/chad-johnson-tweet.jpg",
  },
  {
    name: "Terrell Owens · Jimmy Smith · Deion Sanders",
    detail: "Liked a Pro Football Action Instagram post.",
    shotLabel: "Terrell Owens, Jimmy Smith and Deion Sanders liking an Instagram post",
    src: "images/nfl-drilltown-likes.jpg",
  },
  {
    name: "Antonio Brown",
    detail: "Shared an EssentiallySports headline I assigned.",
    shotLabel: "Antonio Brown share screenshot",
    src: "images/antonio-brown-share.jpg",
  },
];

export const wagLife = {
  name: "WAG Life",
  shots: [
    {
      label: "WAG Life newsletter signup page",
      src: "images/wag-life-site.jpg",
      aspect: "aspect-[604/1200]",
      overlayTitle: "WAG Life",
      overlayDetail: "11,000+ subscriber community",
    },
    {
      label: "WAG Life subscriber growth graph",
      src: "images/wag-life-growth.jpg",
      aspect: "aspect-[1200/835]",
      overlayTitle: "Subscriber growth",
      overlayDetail: "+11,582 in the last 12 months",
    },
    {
      label: "WAG Life open rate and click-to-open rate metrics",
      src: "images/wag-life-metrics.jpg",
      aspect: "aspect-[1400/371]",
      overlayTitle: "Engagement",
      overlayDetail: "35.03% open rate · 7.89% click-to-open",
    },
  ],
};

export const capabilities = [
  "Growth strategy",
  "Marketing",
  "Content strategy",
  "SEO",
  "Audience insights",
  "Organic distribution",
  "A/B testing",
  "Social media",
  "Product strategy",
  "AI workflow design",
  "GTM experimentation",
  "Team leadership",
];
