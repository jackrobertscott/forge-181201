export interface IComponentProps {
  handlers?: {
    [name: string]: (...args: any[]) => any;
  };
  data?: {
    [name: string]: object | boolean | string | number | null | undefined;
  };
}
