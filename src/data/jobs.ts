export type Job = {
  id: string;
  title: string;
  location: string;
  employmentType: string;
  experience: string;
  skills: string[];
  description: string;
};

export const jobs: Job[] = [];
