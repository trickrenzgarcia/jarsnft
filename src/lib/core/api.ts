/**
 * The main entry point for the Jars API
 * @public
 */

import {
  AlchemyContractMetadata,
  AlchemyContractsForOwner,
  AlchemyNFTs,
  JarsContract,
  NFTCollection,
  StorageProfile,
} from "./types";
import { BASE_URL } from "../ctx";
import { User } from "./types";
import { env } from "../env.mjs";

export type JarsOptions = {
  /**
   * The secret key for the Jars API
   */
  secretKey: string;
};

export class JarsAPI {
  constructor(
    private baseUrl: string,
    private options: JarsOptions,
  ) {}

  private async request<TData>(
    endpoint: string,
    configs?: RequestInit,
  ): Promise<TData> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          Authorization: `Bearer ${this.options.secretKey}`,
        },
        ...configs,
      });

      if (!response.ok) {
        return undefined as TData;
      }

      const data = await response.json();
      return data as TData;
    } catch (e) {
      console.log(e);
      throw new Error(`Failed to fetch data from ${this.baseUrl}${endpoint}`);
    }
  }
  /**
   * Get all users
   * @returns - An array of users
   */
  async getAllUsers(): Promise<User[]> {
    return await this.request<User[]>("/user/all");
  }
  /**
   * Get a user by address
   * @param address - The user's address
   * @returns - A user
   */
  async getUser(address: string): Promise<User> {
    return await this.request<User>(`/user/${address}`, {
      next: { tags: ["user"] },
    });
  }
  /**
   * Check if a user exists
   * @param address - The user's address
   * @returns - A boolean
   */
  async isUserExists(address: string): Promise<boolean> {
    const user = await this.request<User>(`/user/${address}`);
    if (!user) return false;
    return true;
  }
  /**
   * Update a user
   * @param address - The user's address
   * @param data - The user's data
   * @returns - A user
   */
  async updateUser(
    address: string,
    data: Omit<User, "address" | "id" | "uid" | "created_at" | "is_listed"> & {
      email: string;
      name: string;
    },
  ) {
    return await this.request<User>(`/user/update`, {
      method: "PUT",
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        is_listed: true,
        address: address,
      }),
    });
  }
  /**
   * Create a user
   * @param address - The user's address
   */
  async createUser(address: string) {
    return await this.request<User>(`/user/create`, {
      method: "POST",
      body: JSON.stringify({ address: address }),
    });
  }
  /**
   * Get a user's profile
   * @param address - The user's address
   * @returns - A user's profile
   */
  async createProfile(address: string) {
    return await this.request<StorageProfile>(`/storage/profile`, {
      method: "POST",
      body: JSON.stringify({ address: address }),
    });
  }
  /**
   * Get a user's profile
   * @param address - The user's address
   * @returns - A user's profile
   */
  async getUserProfile(address: string) {
    const data = await this.request<User & { profile: StorageProfile }>(
      `/user/profile/${address}`,
    );
    return data;
  }
  /**
   *
   * @param contractAddress address of the contract to deploy NFTCollection ERC721A
   * @returns ContractMetadata
   */
  async deployNFTCollection(contractAddress: string, owner: string) {
    return await this.request<NFTCollection>(`/deploy/nft-collection`, {
      method: "POST",
      body: JSON.stringify({ contractAddress: contractAddress, owner: owner }),
    });
  }
  /**
   *
   * @param contractAddress address of the contract to deploy NFTDrop ERC721A
   * @returns ContractMetadata
   */
  async deployNFTDrop(contractAddress: string, owner: string) {
    return await this.request(`/deploy/nft-collection`, {
      method: "POST",
      body: JSON.stringify({ contractAddress: contractAddress, owner: owner }),
    });
  }
  /**
   * Get all NFT collections
   * @returns - An array of NFT collections
   */
  async getNFTCollections() {
    return await this.request<NFTCollection[]>(`/deploy/nft-collection`, {
      next: { tags: ["nft-collection", "metadata", "getNFTCollections"] },
    });
  }
  /**
   * Get a contract metadata
   * @param contractAddress - The contract address
   * @returns - A contract metadata of an NFT collection
   */
  async getContractMetadata(contractAddress: string, tags?: string[]) {
    return await this.request<AlchemyContractMetadata>(
      `/metadata/getContractMetadata?contractAddress=${contractAddress}`,
      {
        next: { tags: ["metadata", "getContractMetadata"] },
      },
    );
  }

  /**
   * Get all NFTs for an owner
   * @param walletAddress
   * @returns
   */
  async getNFTsForOwner(walletAddress: string) {
    return await this.request<AlchemyNFTs>(
      `/nfts/getNFTsForOwner?owner=${walletAddress}`,
      {
        next: { tags: ["nfts", "getNFTsForOwner"] },
      },
    );
  }

  /**
   * Get all ERC721 Contracts for an owner
   * @param walletAddress
   * @returns
   */
  async getContractsForOwner(walletAddress: string) {
    return await this.request<JarsContract[]>(
      `/collections/getContractsForOwner?owner=${walletAddress}`,
      {
        next: { tags: ["contracts", "collections", "getContractsForOwner"] },
      },
    );
  }

  public storage = {
    /**
     * Update a user's profile banner
     * @param formData - The form data
     * @field cover - The cover image
     * @field address - The user's address
     * @returns - A user profile
     */
    updateProfileBanner: async (formData: FormData) => {
      return await this.request<{ banner_url: string }>(
        "/storage/profile/cover",
        {
          method: "POST",
          body: formData,
        },
      );
    },

    /**
     * Update a user's profile avatar
     * @param formData - The form data
     * @field avatar - The avatar image
     * @field address - The user's address
     * @returns - A user profile
     */
    updateProfileAvatar: async (formData: FormData) => {
      return await this.request<{ image_url: string }>(
        "/storage/profile/avatar",
        {
          method: "POST",
          body: formData,
        },
      );
    },
  };
}

export const jars = new JarsAPI(BASE_URL, {
  secretKey: env.NEXT_PUBLIC_JWT_AUTH_TOKEN,
});
