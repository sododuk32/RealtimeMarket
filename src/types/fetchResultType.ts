export interface FetchError {
  status: number | null;
  message: string;
}

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: FetchError | null;
}
export interface UseMainListOptions {
  apiKey: string | null;
  authToken: string | null;
}
