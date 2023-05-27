export interface GitHubRepo {
  repo: string;
  language: string;
  website?: string;
  description: string;
  image: string;
  repoUrl: string;
}

export interface Work {
  org: string;
  position: string;
  website: string;
  startDate: string;
  endDate?: string;
  mascot: string;
  responsibilities: string[];
  tags: string[];
  image: string;
}
