export interface IPrefill {
  [name: string]: any;
}

export const cleanFormPrefill = (defaults: IPrefill, values?: IPrefill) => {
  const filledValues = values || {};
  const allKeys = {
    ...defaults,
    ...filledValues,
  };
  return Object.keys(allKeys).reduce((accum, next) => {
    return {
      ...accum,
      [next]: filledValues[next] || defaults[next],
    };
  }, {});
};
