export interface IrenderComsProps {
  value: number[] | string[] | string | boolean;
  handleData: (changedValue: number[] | string[] | string | boolean) => void;
}
