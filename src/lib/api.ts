type JarsHeaders = {
    contentType: "application/json" | "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain";
    secretKey: string;
}

type User = {
    id: number;
    uid: string;
    address: string;
    name: string;
    email: string;
    is_listed: boolean;
    createdAt: string;
} | undefined;

type ApiError = {
    message: string;
    status: number;
} | undefined;

type ApiResponse<T = User, E = ApiError> = {
    user?: T;
    error?: E;
}


class JarsClientService {
    constructor(private baseUrl: string | URL, private headers: JarsHeaders) {}

    async request<T, E>(endpoint: string, config?: RequestInit): Promise<ApiResponse<T | undefined, E>> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            headers: {
                "Content-Type": this.headers.contentType,
                "Authorization": `Bearer ${this.headers.secretKey}`
            },
            ...config
        });
        
        if(!response.ok) {
            const { message } = await response.json();
            return { error: { message: message, status: response.status } } as ApiResponse<T, E>;
        }

        return await { user: response.json() } as ApiResponse<T, E>;
    }
}

export class UsersApi extends JarsClientService {
    constructor(baseUrl: string, headers: JarsHeaders) {
        super(baseUrl, headers);
    }

    async getUser(address: string) {
        return await this.request<User, ApiError>(`/user/${address}`);
    }

    async createUser(address: string) {
        console.log(address)
        return await this.request<User, ApiError>(`/user/create`, {
            method: "POST",
            body: JSON.stringify({ address: address })
        })
    }
}