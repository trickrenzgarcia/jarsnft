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
};

type ApiError = {
    message: string;
    status: number;
} | ZError | undefined;

type ZError = {
    validator: string;
    code: string | number;
    message: string;
    path: [string];
}[]

type ApiResponse<T = User | User[], E = ApiError | ZError> = {
    user: T;
    error?: E;
}

class JarsClientService {
    constructor(private baseUrl: string, private headers: JarsHeaders) {}

    async request<T, E>(endpoint: string, config?: RequestInit): Promise<ApiResponse<T, E>> {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            headers: {
                "Content-Type": this.headers.contentType,
                "Authorization": `Bearer ${this.headers.secretKey}`
            },
            ...config
        });

        if(!response.ok) {
            return { error: await response.json() } as ApiResponse<T, E>;
        }
        
        return { user: await response.json() } as ApiResponse<T, E>;
    }
}

export class UsersApi extends JarsClientService {
    constructor(baseUrl: string, headers: JarsHeaders) {
        super(baseUrl, headers);
    }

    async getAllUsers() {
        return await this.request<User[], ApiError>("/user/all");
    }

    async getUser(address: string) {
        return await this.request<User, ApiError>(`/user/${address}`, {
            method: "GET",
        });
    }

    async isUserExists(address: string) {
        const { user } = await this.request(`/user/${address}`);
        
        if(!user) return false;

        return true;
    }

    async updateUser(address: string, data: Omit<User, "id" | "uid" | "createdAt"> & { email: string, name: string }) {
        return await this.request<User, ApiError>(`/user/update`, {
            method: "PUT",
            body: JSON.stringify({
                email: data.email,
                name: data.name,
                is_listed: true,
                address: address
            })
        })
    }

    async createUser(address: string) {
        return await this.request<User, ApiError>(`/user/create`, {
            method: "POST",
            body: JSON.stringify({ address: address })
        })
    }
}