export interface GitHubRepo {
  owner: string;
  repo: string;
  link: string;
  language: string;
  website?: string;
  description: string;
  image: string;
}

export interface Work {
  org: string;
  position: string;
  website: string;
  startDate: string;
  endDate?: string;
  image: string;
  responsibilities: string[];
  tags: string[];
}
