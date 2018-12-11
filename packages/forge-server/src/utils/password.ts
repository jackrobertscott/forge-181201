import * as bcrypt from 'bcryptjs';

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.genSalt(5).then(salt => bcrypt.hash(password, salt));
};

export const comparePassword = async (
  candidate: string,
  password: string
): Promise<boolean> => {
  return bcrypt.compare(candidate, password);
};
