export interface Project {
  title: string;
  summary: string;
  tags: string[];
  cover: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "Horizon",
    summary: "A personal net-worth tracker — point-in-time account check-ins with automatic net-worth calculation and charts.",
    tags: ["Python", "FastAPI", "Svelte", "Docker"],
    cover: "/images/projects/horizon/01-overview.jpg",
    images: [
      "/images/projects/horizon/01-overview.jpg",
      "/images/projects/horizon/02-accounts.jpg",
      "/images/projects/horizon/03-darkmode.jpg",
      "/images/projects/horizon/04-add-account.jpg",
      "/images/projects/horizon/05-french.jpg",
    ],
  },
  {
    title: "RainAlert",
    summary: "Serverless weather alert pipeline — checks the forecast daily and emails contacts when rain is expected.",
    tags: ["Python", "AWS Lambda", "Terraform", "CloudWatch"],
    cover: "/images/projects/rainalert/architecture.png",
    images: ["/images/projects/rainalert/architecture.png"],
  },
  {
    title: "Email Phishing Detector",
    summary: "Analyzes .eml and .json files for phishing indicators — SPF/DKIM/DMARC, typosquatting, social engineering, with a web UI and exportable HTML report.",
    tags: ["Python", "FastAPI", "Svelte", "WebSocket"],
    cover: "/images/projects/phishing/01-upload.jpg",
    images: [
      "/images/projects/phishing/01-upload.jpg",
      "/images/projects/phishing/02-result.jpg",
      "/images/projects/phishing/03-details.jpg",
      "/images/projects/phishing/04-alerts.jpg",
      "/images/projects/phishing/05-report.jpg",
      "/images/projects/phishing/06-terminal.jpg",
    ],
  },
  {
    title: "Pathfinding Visualizer",
    summary: "Visualizes pathfinding algorithms in real time — A*, BFS, DFS — with a configurable grid, start/end points and barriers.",
    tags: ["Python", "PyGame", "Algorithms"],
    cover: "/images/projects/pathfinding/03.png",
    images: [
      "/images/projects/pathfinding/03.png",
      "/images/projects/pathfinding/demo-1.gif",
      "/images/projects/pathfinding/demo-2.gif",
    ],
  },
];
