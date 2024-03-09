
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
}

type ApiResponse<T> = {
    user: T | undefined;
    error?: unknown
}


class JarsClientService {
    constructor(private baseUrl: string | URL, private headers: JarsHeaders) {}

    async request<T>(endpoint: string, config?: RequestInit): Promise<ApiResponse<T>> {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                headers: {
                    "Content-Type": this.headers.contentType,
                    "Authorization": `Bearer ${this.headers.secretKey}`
                },
                ...config
            });

            return await response.json();
        } catch (error) {
            return { error } as ApiResponse<T>;
        }
    }
}

export class UsersApi extends JarsClientService {
    constructor(baseUrl: string, headers: JarsHeaders) {
        super(baseUrl, headers);
    }

    async getUser(address: string) {
        return await this.request<User>(`/user/${address}`);
    }
}