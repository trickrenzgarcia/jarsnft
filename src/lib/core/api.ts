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
import { SimpleHashContracts } from "@/types/simple-hash";

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
    return await this.request<User[]>("/user/getUsers");
  }
  /**
   * Get a user by address
   * @param address - The user's address
   * @returns - A user
   */
  async getUser(address: string): Promise<User> {
    return await this.request<User>(`/user/getUser?address=${address}`, {
      next: { tags: ["user"] },
    });
  }
  /**
   * Check if a user exists
   * @param address - The user's address
   * @returns - A boolean
   */
  async isUserExists(address: string): Promise<boolean> {
    const user = await this.request<User>(`/user/getUser?address=${address}`);
    if (!user) return false;
    return true;
  }

  /**
   * Save nonce in database
   */
  async saveNonce(nonce: string) {
    return await this.request(`/nonce/create`, {
      method: "POST",
      body: JSON.stringify({ nonce: nonce }),
    });
  }

  /**
   * check nonce exists in database
   * @param nonce - The nonce
   */
  async nonceExists(nonce: string) {
    return await this.request<boolean>(`/nonce/validate`, {
      method: "POST",
      body: JSON.stringify({ nonce: nonce }),
    });
  }

  /**
   * Update a user
   * @param address - The user's address
   * @param data - The user's data
   * @returns - A user
   */
  async updateUser(
    address: string,
    data: Omit<
      User,
      "id" | "uid" | "address" | "is_listed" | "role" | "created_at"
    >,
  ) {
    return await this.request<User>(`/user/updateUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: address, ...data }),
    });
  }
  /**
   * Create a user
   * @param address - The user's address
   */
  async createUser(address: string) {
    return await this.request<User>(`/user/createUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
   * Get single NFT collection
   * @returns - NFT collection
   * @param contractAddress
   */
  async getCollection(contractAddress: string) {
    return await this.request<NFTCollection>(
      `/collection/getCollection?contractAddress=${contractAddress}`,
      {
        next: { tags: ["collection", "getCollection", contractAddress] },
      },
    );
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
    return await this.request<SimpleHashContracts>(
      `/contracts/getContractsForOwner?walletAddress=${walletAddress}`,
      {
        cache: "no-store",
        next: { revalidate: 10 },
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

  public collection = {
    /**
     * Update collection view count
     * @param contractAddress - The contract address
     */
    updateCollectionViewCount: async (contractAddress: string) => {
      return await this.request<{ view_count: number }>(
        `/collection/updateViewCount?contractAddress=${contractAddress}`,
        {
          method: "PUT",
        },
      );
    },
  };
}

export const jars = new JarsAPI(BASE_URL, {
  secretKey: env.NEXT_PUBLIC_JWT_AUTH_TOKEN,
});
