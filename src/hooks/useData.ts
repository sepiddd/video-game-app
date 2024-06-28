import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        setIsLoading(true);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { error, data, setData, isLoading };
};

export default useData;
