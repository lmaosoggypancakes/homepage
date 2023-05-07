import { GitHubRepo } from "~/types";
import axios from "axios";
export default defineEventHandler(async (event): Promise<GitHubRepo[]> => {
  const response = await axios.get(
    "https://gh-pinned-repos.egoist.dev/?username=lmaosoggypancakes"
  );
  return <GitHubRepo[]>response.data;
});
