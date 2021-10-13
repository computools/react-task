import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { apiClient } from "../infra/api-client";

const DEVELOPERS_DATA = "DEVELOPERS_DATA";

export type DeveloperPopularRepository = {
  repositoryName: string | null;
  description: string | null;
  url: string | null;
};

export type Developer = {
  rank: number;
  username: string;
  name: string;
  url: string;
  avatar: string;
  since: string;
  popularRepository: DeveloperPopularRepository;
};

type ReturnUseHttpDevelopers = {
  isLoading: boolean;
  error: AxiosError<unknown, any> | null;
  data: Developer[] | undefined;
};

export const useHttpDevelopers = (): ReturnUseHttpDevelopers => {
  const { isLoading, error, data } = useQuery<
    Developer[],
    AxiosError,
    Developer[]
  >(DEVELOPERS_DATA, async () => {
    const { data } = await apiClient.get<Developer[]>("/developers");

    return data;
  });

  return { isLoading, error, data };
};
