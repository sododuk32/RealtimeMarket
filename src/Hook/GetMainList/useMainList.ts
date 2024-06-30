import { useState, useEffect } from 'react';
import { CustomError } from '../../types/CustomErrorClass/CustomErrorClass';
import { isErrorWithMessage, isErrorWithStatus } from '../../types/typeGuard';
import {
  FetchError,
  FetchResult,
  UseMainListOptions,
} from '../../types/fetchResultType';

export const useMainList = <T>(
  url: string,
  options: UseMainListOptions,
): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<FetchError | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const headers: HeadersInit = {
          'Content-Type': 'application/json',
          'api-key': options.apiKey || '',
        };
        if (options.authToken) {
          headers['Authorization'] = `Bearer ${options.authToken}`;
        }

        const response = await fetch(url, {
          method: 'GET', // 추후 모든 메서드 모든 option 타입 추가
          headers,
          body: null,
        });

        if (!response.ok) {
          throw new CustomError(
            `Error ${response.status}: ${response.statusText}`,
            response.status,
          );
        }
        const result: T = await response.json();
        setData(result);
      } catch (error: unknown) {
        if (isErrorWithStatus(error)) {
          setError({ status: error.status, message: error.message });
        } else if (isErrorWithMessage(error)) {
          setError({ status: null, message: error.message });
        } else {
          setError({ status: null, message: 'An unknown error occurred' });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
