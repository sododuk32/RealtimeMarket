/**
 * Extends Error for message
 * add status on this constructor
 * @class Error: { message}=> CustomError: {message,status}
 */
export class CustomError extends Error {
  status: number | null;

  constructor(message: string, status: number | null = null) {
    super(message);
    this.status = status;
  }
}
