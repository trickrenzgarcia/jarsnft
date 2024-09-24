import { ACCEPTED_IMAGE_TYPES } from "@/lib/constant";
import { ethers } from "ethers";
import { z } from "zod";

/**
 * GET /api/user/{walletAddress}
 * validate wallet address
 * @param {string} walletAddress
 */
const walletAddress = z.string().refine((value) => ethers.utils.isAddress(value), {
  message: 'Wallet address must be starts with "0x" prefix and 45 characters long.',
});

/**
 * POST /api/user/create
 * @param {string} address c.req.json()
 */
const createUser = z.object({
  address: walletAddress,
});


const userParams = z.object({
  address: walletAddress,
});

/**
 * POST /api/user/update
 * @param {string} address c.req.json()
 * @param {string} name c.req.json()
 * @param {string} email c.req.json()
 * @param {boolean} isListed c.req.json()
 */
const updateUser = z.object({
  address: walletAddress,
  name: z.string().min(3, { message: "Name must be at least 3 character long" }),
  email: z.string().email(),
  isListed: z.number().int().min(0).max(1),
});

/**
 * GET/POST /api/user/favorite
 * @param {string} contract c.req.json()
 * @param {string} token_id c.req.json()
 */
const favoriteScheme = z.object({
  uid: z.string().uuid(),
  contract: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid Contract Address",
  }),
  tokenId: z.string(),
})

/**
 * POST /api/nonce/validate
 * @param {string} nonce c.req.json()
 */
const nonce = z.object({
  nonce: z.string().min(1),
})

/**
 * GET /api/nfts/getNFTsForOwner?owner={contractAddress}
 * @param {string} contractAddress c.req.query('owner')
 * GET /api/collection/getCollectionsByOwner?owner={contractAddress}
 * @param {string} contractAddress c.req.query('owner')
 */
const ownerSchema = z.object({
  owner: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Input is not a valid address or ENS name.",
  }),
});


/**
 * GET /?contractAddress={contractAddress}
 * @param {string} contractAddress c.req.query('contractAddress')
 */
const contractAddress = z.string().refine((value) => ethers.utils.isAddress(value), {
  message: "Input is not a valid address or ENS name.",
})

/**
 * GET /collection/{contractAddress}/{owner}
 * @param {string} contractAddress c.req.param('contractAddress')
 * @param {string} owner c.req.param('owner')
 */
const collectionSchema = z.object({
  contractAddress,
  owner: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Owner Address Input is not a valid address or ENS name.",
  }),
})


/**
 * POST /api/deploy/nft-collection
 * @param {string} contractAddress c.req.json()
 * @param {string} owner c.req.json()
 */
const deployContract = z.object({
  contractAddress: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Contract Address Input is not a valid address or ENS name.",
  }),
  owner: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Owner Address Input is not a valid address or ENS name.",
  }),
  category: z.string().min(1)
});

/**
 * POST /storage/profile/create
 */
const addressSchema = z.object({
  address: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid address"
  })
})

/**
 * POST /storage/profile/update
 */
const updateSchema =  z.object({
  address: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid address"
  }),
  imageUrl: z.string().min(1)
})


/**
 * POST /storage/profile/image
 */
const uploadSchema =  z.object({
  address: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid address"
  }),
  image: z
    .any()
    .refine((file) => file?.size <= 5000000, 'Image size must be less than 5MB.')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Only .jpg, .jpeg, .png and .webp formats are supported.')
})

/**
 * POST /storage/profile/cover
 */
const uploadCover =  z.object({
  address: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid address"
  }),
  image: z
    .any()
    .refine((file) => file?.size <= 10000000, 'Image size must be less than 10MB.')
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), 'Only .jpg, .jpeg, .png and .webp formats are supported.')
})

/**
 * POST /nfts/{contractAddress}/{tokenId}
 */
const nftSchema = z.object({
  contractAddress: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Input is not a valid address or ENS name.",
  }),
  tokenId: z.string().min(1),
});

/**
 * GET /search?q={searchQuery}
 * @param {string} q c.req.query('q')
 */
const searchSchema = z.object({
  q: z.string().min(3),
});


const transactionSchema = z.object({
  transactionHash: z.string().min(10),
  eventType: z
    .enum([
      "TokensMinted",
      "Transfer",
      "NewListing",
      "NewAuction",
      "NewBid",
      "NewSale",
      "CancelledListing",
      "CancelledAuction",
      "AuctionClosed",
    ])
    .optional(),
});

const trendingSchema = z.object({
  category: z.string().min(1)
});

export { 
  walletAddress,
  nonce,
  ownerSchema,
  createUser,
  updateUser,
  userParams,
  contractAddress,
  deployContract,
  collectionSchema,
  addressSchema,
  updateSchema,
  uploadSchema,
  uploadCover,
  nftSchema,
  favoriteScheme,
  searchSchema,
  transactionSchema,
  trendingSchema
};