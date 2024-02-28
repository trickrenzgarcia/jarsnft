// @ts ctx types for database

export type User = {
    name?: string;
    email?: string;
    address: string;
    createdAt?: Date;
}

export type ApiResponse<T> = {
    success: boolean;
    message: string;
    data: T ;
}