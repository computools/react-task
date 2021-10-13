import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { apiClient } from "../infra/api-client";

const REPOSITORIES_DATA = "repositoriesData";

export type RepositoryBuiltBy = {
  username: string;
  url: string;
  avatar: string;
};

export type Repository = {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: RepositoryBuiltBy[];
};

type ReturnUseHttpRepositories = {
  isLoading: boolean;
  error: AxiosError<unknown, any> | null;
  data: Repository[] | undefined;
};

export const useHttpRepositories = (): ReturnUseHttpRepositories => {
  const { isLoading, error, data } = useQuery<
    Repository[],
    AxiosError,
    Repository[]
  >(REPOSITORIES_DATA, async () => {
    const { data } = await apiClient.get<Repository[]>("/repositories");

    return data;
  });

  return { isLoading, error, data };
};
