// @ts ctx types for database

export type User = {
  name: string;
  email: string;
  address: string;
  is_listed: boolean;
  createdAt: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};
