export interface ExpressValidationError {
  location?: string;
  msg?: string;
  path?: string;
  type?: string;
  value?: string;
}
