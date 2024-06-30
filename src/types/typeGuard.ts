// typeGuards.ts
interface ErrorWithMessage {
  message: string;
}

interface ErrorWithStatus {
  status: number;
  message: string;
}

export function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

export function isErrorWithStatus(error: unknown): error is ErrorWithStatus {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    typeof (error as Record<string, unknown>).status === 'number' &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}
