import { useState, useCallback } from 'react';

const useHttp: () => {
  isLoading: boolean;
  error: Error | null;
  sendRequest: (requestConfig: any, applyData: any) => Promise<void>;
} = () => {
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (requestConfig: any, applyData: any) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const data = await response.json();
        applyData(data);
      } catch (error: any) {
        setError(error);
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, sendRequest };
};

export default useHttp;
