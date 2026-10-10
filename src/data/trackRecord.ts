export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface Highlight {
  title: string;
  description: string;
  accent: string;
}

export const stats: Stat[] = [
  {
    value: "5 yrs",
    label: "building and securing developer platforms in a large enterprise",
    color: "#FF7A1F",
  },
  {
    value: "40,000+",
    label: "users across the developer platforms I help secure (GitLab, Artifactory, RBAC)",
    color: "#31A7BB",
  },
  {
    value: "-75%",
    label: "provisioning time after automating IAM workflows",
    color: "#FF7A1F",
  },
  {
    value: "10+",
    label: "owners across teams coordinated on a single security-driven migration",
    color: "#31A7BB",
  },
];

export const highlights: Highlight[] = [
  {
    title: "Configuration as code, end to end",
    description:
      "Designed the automation architecture for GitLab and Artifactory configuration from scratch with Terraform, and own it from design to day-to-day operation.",
    accent: "#FF7A1F",
  },
  {
    title: "Secrets-management tech lead",
    description:
      "Tech lead and owner of the Vault secrets-management platform, running knowledge-transfer sessions to bring the whole team up to speed.",
    accent: "#31A7BB",
  },
  {
    title: "Cross-team security migration",
    description:
      "Designed and drove a security-driven migration, aligning 10+ owners across several teams around a single plan.",
    accent: "#FFB27A",
  },
];
