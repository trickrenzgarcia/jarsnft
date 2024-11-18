/**
 * The main entry point for the Jars API
 * @public
 */

import { AlchemyContractMetadata, AlchemyNFTs, CollectionData, EventType, NFTCollection, NFTFavorite, StorageProfile, User } from "@/types";
import { SimpleHashContracts } from "@/types/simple-hash";
import { SimpleHashNFT } from "@/types/simple-hash/nft";
import { APP_URL } from "./constant";

export type JarsOptions = {
  baseUrl?: string;
  secretKey: string;
};

export class JarsAPI {
  private baseUrl: string;
  private secretKey: string;

  constructor(private options: JarsOptions) {
    this.baseUrl = "https://jarsnft.com";
    this.secretKey = options.secretKey || process.env.JWT_TOKEN;
  }

  private async request<TData>(endPoint: string, configs?: RequestInit): Promise<TData> {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1${endPoint}`, {
        headers: {
          Authorization: `Bearer ${this.secretKey}`,
          "Content-Type": "application/json",
        },
        ...configs,
      });

      if (!response.ok) {
        return undefined as TData;
      }

      const data = await response.json();
      return data as TData;
    } catch (err) {
      throw new Error(`Failed to fetch data from ${this.baseUrl}/api/v1${endPoint}`);
    }
  }

  /**
   * Get all users
   * @returns An array of users
   */
  async getUsers(): Promise<User[]> {
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
    const user = await this.request<User>(`/user/is-listed/${address}`);
    if (!user) return false;
    return true;
  }

  /**
   * Check if an email exists
   * @param email
   * @returns
   */
  async isEmailExists(email: string): Promise<boolean> {
    return await this.request<boolean>(`/user/email/${email}`);
  }

  /**
   * Create a user
   * @param address - The user's address
   */
  async createUser(address: string) {
    return await this.request<User>("/user/create", {
      method: "POST",
      body: JSON.stringify({ address: address }),
    });
  }

  /**
   * Update a user
   * @param address - The user's address
   * @param data - The user's data
   * @returns - A user
   */
  async updateUser(address: string, data: Omit<User, "id" | "uid" | "address" | "role" | "createdAt">) {
    return await this.request<User>("/user/update", {
      method: "POST",
      body: JSON.stringify({ address: address, ...data }),
    });
  }

  /**
   * Save nonce in database
   */
  async saveNonce(nonce: string) {
    return await this.request("/nonce/create", {
      method: "POST",
      body: JSON.stringify({ nonce: nonce }),
    });
  }

  /**
   * Verify nonce in database
   */
  async nonceExists(nonce: string) {
    return await this.request<boolean>("/nonce/validate", {
      method: "POST",
      body: JSON.stringify({ nonce: nonce }),
    });
  }

  /**
   * Get a user's profile
   * @param address - The user's address
   * @returns - A user's profile
   */
  async createProfile(address: string) {
    return await this.request<StorageProfile>("/storage/profile/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ address: address }),
    });
  }

  /**
   * Update a user's profile
   * @param address - The user's address
   * @param imageUrl - The user's profile data
   */
  async updateUserAvatar(address: string, imageUrl: string) {
    return await this.request<StorageProfile>("/storage/profile/update", {
      method: "POST",
      body: JSON.stringify({ address: address, imageUrl: imageUrl }),
    });
  }

  /**
   * Get a user's profile
   * @param address - The user's address
   * @returns - A user's profile
   */
  async getUserProfile(address: string) {
    const data = await this.request<User & { profile: StorageProfile }>(`/user/${address}/profile`, {
      next: {
        tags: ["user", "profile", "getUserProfile"],
      },
    });
    return data;
  }

  /**
   *
   * @param contractAddress address of the contract to deploy NFTCollection ERC721A
   * @returns ContractMetadata
   */
  async deployNFTCollection(contractAddress: string, owner: string, category: string) {
    return await this.request<NFTCollection>("/deploy/nft-collection", {
      method: "POST",
      body: JSON.stringify({
        contractAddress: contractAddress,
        owner: owner,
        category: category,
      }),
    });
  }

  /**
   *
   * @param contractAddress address of the contract to deploy NFTDrop ERC721A
   * @returns ContractMetadata
   */
  async deployNFTDrop(contractAddress: string, owner: string, category: string) {
    return await this.request(`/deploy/nft-collection`, {
      method: "POST",
      body: JSON.stringify({
        contractAddress: contractAddress,
        owner: owner,
        category: category,
      }),
    });
  }

  /**
   * Get single NFT collection
   * @returns - NFT collection
   * @param contractAddress
   */
  async getCollection(contractAddress: string) {
    return await this.request<NFTCollection>(`/collection/${contractAddress}`, {
      next: { tags: ["collection", "getCollection", contractAddress] },
    });
  }

  /**
   * Get all NFT collections
   * @returns - An array of NFT collections
   */
  async getNFTCollections() {
    return await this.request<CollectionData[]>(`/deploy/nft-collection`, {
      next: { tags: ["nft-collection", "metadata", "getNFTCollections"] },
    });
  }

  /**
   * Get a contract metadata
   * @param contractAddress - The contract address
   * @returns - A contract metadata of an NFT collection
   */
  async getContractMetadata(contractAddress: string) {
    return await this.request<AlchemyContractMetadata>(`/metadata/${contractAddress}`, {
      next: { tags: ["metadata", "getContractMetadata"] },
    });
  }

  /**
   * Get all NFTs for an owner
   * @param walletAddress
   * @returns
   */
  async getNFTsForOwner(walletAddress: string) {
    return await this.request<AlchemyNFTs>(`/nfts/getNFTsForOwner?owner=${walletAddress}`, {
      next: { tags: ["nfts", "getNFTsForOwner"] },
    });
  }

  /**
   * Get NFT by token id
   * @param contractAddress
   * @param tokenId
   * @returns SimpleHashNFT
   */
  async getNFTByTokenId(contractAddress: string, tokenId: string) {
    return await this.request<SimpleHashNFT>(`/nfts/${contractAddress}/${tokenId}`, {
      next: { tags: ["nfts", "nft", "getNFTByTokenId"] },
    });
  }

  /**
   * Get NFTs by wallet
   * @param walletAddress
   * @returns
   */
  async getNFTsByWallet(walletAddress: string) {
    return await this.request<SimpleHashNFT[]>(`/nfts/getNFTsByWallet?walletAddress=${walletAddress}`, {
      next: { tags: ["nfts", "getNFTsByWallet"] },
    });
  }

  /**
   * Get collection by owner
   * @param walletAddress
   */
  async getCollectionsByOwner(walletAddress: string) {
    return await this.request<Omit<NFTCollection[], "simpleHashData">>(`/collection/getCollectionsByOwner?owner=${walletAddress}`, {
      next: { tags: ["collections", "getCollectionsByOwner"] },
    });
  }

  async getFavoriteCount(contractAddress: string, tokenId: string) {
    return await this.request<{ count: number }>(`/user/favorite/count?contract=${contractAddress}&tokenId=${tokenId}`, {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        tags: ["likes"],
      },
    });
  }

  async getIsUserLiked(uid: string, contractAddress: string, tokenId: string) {
    return await this.request<boolean>(
      `/user/favorite/isLiked?
      uid=${uid}&
      contract=${contractAddress}&
      tokenId=${tokenId}`,
    );
  }

  async addToFavorite(uid: string, contractAddress: string, tokenId: string) {
    return await this.request<NFTFavorite>(`/user/favorite/create`, {
      method: "POST",
      cache: "no-cache",
      body: JSON.stringify({
        uid: uid,
        contract: contractAddress,
        tokenId: tokenId,
      }),
    });
  }

  async getSearchResults(query: string) {
    return await this.request<Omit<NFTCollection[], "simpleHashData">>(`/search?q=${query}`, {
      next: { tags: ["search"] },
    });
  }

  /**
   * Get all ERC721 Contracts for an owner
   * @param walletAddress
   * @returns
   */
  async getContractsForOwner(walletAddress: string) {
    return await this.request<SimpleHashContracts>(`/contracts/getContractsForOwner?walletAddress=${walletAddress}`, {
      cache: "no-store",
      next: { tags: ["contracts"] },
    });
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
      return await this.request<{ bannerUrl: string }>("/storage/profile/cover", {
        method: "POST",
        body: formData,
      });
    },

    /**
     * Update a user's profile avatar
     * @param formData - The form data
     * @field avatar - The avatar image
     * @field address - The user's address
     * @returns - A user profile
     */
    updateProfileAvatar: async (formData: FormData) => {
      return await this.request<{ imageUrl: string }>("/storage/profile/update", {
        method: "POST",
        body: formData,
      });
    },
  };

  public collection = {
    /**
     * Get collection trending
     */
    getTrending: async (category: string, page: number = 1, limit: number = 50) => {
      return await this.request<CollectionData[]>(`/collections/trending?category=${category}&page=${1}&limit=${50}`, {
        next: { tags: ["collections", "getTrending", category] },
      });
    },

    /**
     * Update collection view count
     * @param contractAddress - The contract address
     */
    updateCollectionViewCount: async (contractAddress: string) => {
      return await this.request<{ viewCount: number }>(`/collection/${contractAddress}/update-view-count`, {
        method: "PUT",
      });
    },

    /**
     * Get floor price
     * @param contractAddress - The contract address
     */
    getFloorPrice: async (contractAddress: string) => {
      return await this.request<number | "N/A">(`/getFloorPrice?contractAddress=${contractAddress}`, {
        cache: "no-store",
      });
    },

    /**
     * Get listed nft counts
     * @param contractAddress - The contract address
     */
    getListedNfts: async (contractAddress: string) => {
      return await this.request<number>(`/getListedNfts?contractAddress=${contractAddress}`, {
        cache: "no-store",
      });
    },
  };

  public nft = {
    /**
     * Get NFT view count
     * @param contractAddress - The contract address
     * @param tokenId - The token id
     */
    getNftViews: async (contractAddress: string, tokenId: string) => {
      return await this.request<{ viewCount: number }>(`/nfts/views?contractAddress=${contractAddress}&tokenId=${tokenId}`, {
        cache: "no-cache",
        next: {
          tags: ["views", "getNftViews"],
        },
      });
    },

    /**
     * Get NFT likes
     * @param contractAddress - The contract address
     * @param tokenId - The token id
     */
    getNftLikes: async (contractAddress: string, tokenId: string) => {
      return await this.request<{ count: number }>(`/nfts/likes?contractAddress=${contractAddress}&tokenId=${tokenId}`, {
        cache: "no-cache",
        next: {
          tags: ["likes", "getNftLikes"],
        },
      });
    },

    /**
     * Update NFT view count
     * @param contractAddress - The contract address
     * @param tokenId - The token id
     */
    updateNftViews: async (contractAddress: string, tokenId: string) => {
      return await this.request<{ view_count: number }>(`/nfts/views`, {
        method: "POST",
        body: JSON.stringify({ contractAddress, tokenId }),
        cache: "no-cache",
        next: {
          tags: ["views", "updateNftViews"],
        },
      });
    },

    /**
     * Get NFT Activities
     * @param contractAddress - The contract address
     * @param tokenId - The token id
     */
    getNftActivities: async (contractAddress: string, tokenId: string) => {
      return await this.request(`/nfts/activities?contractAddress=${contractAddress}&tokenId=${tokenId}`, {
        cache: "no-cache",
        next: {
          tags: ["activities", "getNftActivities"],
        },
      });
    },

    /**
     * Get NFT Transaction by Hash
     * @param transactionHash
     * @returns
     */
    getTransactionByHash: async (transactionHash: string) => {
      return await this.request(`/nfts/tx?transactionHash=${transactionHash}`);
    },

    /**
     * Create NFT Transaction Hash and Event Type
     * @param event
     * @param txHash
     * @returns
     */
    createTxHash: async (event: EventType, txHash: string) => {
      if (!txHash) return;
      return await this.request("/nfts/tx", {
        method: "POST",
        body: JSON.stringify({
          transactionHash: txHash,
          eventType: event,
        }),
      });
    },
  };
}

const jars = new JarsAPI({
  secretKey: process.env.NEXT_PUBLIC_JWT_TOKEN!,
});

export default jars;
