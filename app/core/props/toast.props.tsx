export type tToastProps = {
  message: string;
  type: tToastType;
};

export enum tToastType {
  success,
  error,
  info,
}
