export interface SkillGroup {
  title: string;
  description: string;
  tags: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Platform Security & IAM",
    description: "Securing developer platforms and enforcing governance at scale.",
    tags: ["GitLab", "Artifactory", "RBAC / IAM", "Vault", "Compliance"],
  },
  {
    title: "Automation & DevSecOps",
    description: "Automating security controls into developer workflows.",
    tags: ["Docker", "Python 3", "GitLab CI", "Secrets detection", "AI-assisted workflows"],
  },
  {
    title: "Infrastructure as Code",
    description: "Standardizing and auditing infrastructure through code.",
    tags: ["Terraform", "AWS", "Config as code", "CI/CD"],
  },
  {
    title: "Leadership & Mentoring",
    description: "Teaching skills applied to engineering, for any audience.",
    tags: ["Architecture decisions", "Cross-team coordination", "Stakeholder communication"],
  },
];
