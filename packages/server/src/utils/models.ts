export const modelOptions = {
  timestamps: true,
  toObject: { getters: true },
};

export const compareIds = (one: any, two: any) => String(one) === String(two);
