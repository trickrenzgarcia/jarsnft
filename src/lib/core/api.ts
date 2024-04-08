/**
 * The main entry point for the Jars API
 * @public
 */

import { AlchemyContractsForOwner, NFTCollection } from "./types";
import { BASE_URL } from "../ctx";
import { User } from "./types";

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
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.options.secretKey}`,
        },
        ...configs,
      });

      if (!response.ok) {
        return undefined as TData;
      }

      const data = await response.json();
      console.log(data);
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
   *
   * @param contractAddress address of the contract to deploy NFTCollection ERC721A
   * @returns ContractMetadata
   */
  async deployNFTCollection(contractAddress: string) {
    return await this.request<NFTCollection>(`/deploy/nft-collection`, {
      method: "POST",
      body: JSON.stringify({ contractAddress: contractAddress }),
    });
  }
  /**
   *
   * @param contractAddress address of the contract to deploy NFTDrop ERC721A
   * @returns ContractMetadata
   */
  async deployNFTDrop(contractAddress: string) {
    return await this.request(`/deploy/nft-collection`, {
      method: "POST",
      body: JSON.stringify({ contractAddress: contractAddress }),
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
    return await this.request<NFTCollection>(`/metadata/${contractAddress}`, {
      next: { tags: ["metadata", "getContractMetadata"] },
    });
  }

  /**
   * Get all NFTs for an owner
   * @param walletAddress
   * @returns
   */
  async getNFTsForOwner(walletAddress: string) {
    return await this.request(`/nfts/${walletAddress}`, {
      next: { tags: ["nfts", "getNFTsForOwner"] },
    });
  }

  /**
   * Get all ERC721 Contracts for an owner
   * @param walletAddress
   * @returns
   */
  async getContractsForOwner(walletAddress: string) {
    return await this.request<AlchemyContractsForOwner>(
      `/collections/${walletAddress}`,
      {
        next: { tags: ["contracts", "collections", "getContractsForOwner"] },
      },
    );
  }
}

export const jars = new JarsAPI(BASE_URL, {
  secretKey: process.env.JWT_AUTH_TOKEN as string,
});
