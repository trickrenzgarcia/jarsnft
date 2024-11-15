import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  int,
  varchar,
  date,
  text,
  datetime,
  index,
  longtext,
  tinyint,
  unique,
  foreignKey,
} from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";

export const apiKeys = mysqlTable("api_keys", {
  id: int("id").autoincrement().notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  apiKey: varchar("apiKey", { length: 255 }).notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  createdAt: date("created_at", { mode: "string" }).default("current_timestamp(3)").notNull(),
  // you can use { mode: 'date' }, if you want to have Date as type for this column
  expiredAt: date("expired_at", { mode: "string" }).notNull(),
});

export const contracts = mysqlTable("contracts", {
  contractId: text("contract_id").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  externalLink: text("external_link").notNull(),
  symbol: text("symbol").notNull(),
  owner: text("owner").notNull(),
  primarySaleRecipient: text("primary_sale_recipient").notNull(),
  feeRecipient: text("fee_recipient").notNull(),
  appUri: text("app_uri").notNull(),
  createdAt: datetime("createdAt", { mode: "string" }).default("current_timestamp()").notNull(),
  updatedAt: datetime("updatedAt", { mode: "string" }).default("current_timestamp()").notNull(),
});

export const nftCollections = mysqlTable(
  "nft_collections",
  {
    contract: varchar("contract", { length: 255 }).notNull(),
    collectionId: varchar("collection_id", { length: 255 }).default("NULL"),
    image: text("image").default("NULL"),
    name: text("name").notNull(),
    symbol: text("symbol").default("NULL"),
    description: text("description").default("NULL"),
    appUri: text("app_uri").default("NULL"),
    externalLink: text("external_link").default("NULL"),
    feeRecipient: text("fee_recipient").default("NULL"),
    sellerFeeBasisPoints: int("seller_fee_basis_points").default(0),
    primarySaleRecipient: text("primary_sale_recipient").default("NULL"),
    trustedForwarders: longtext("trusted_forwarders").default("NULL"),
    owner: text("owner").notNull(),
    viewCount: int("view_count").default(0).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).default("current_timestamp()").notNull(),
    isNsfw: tinyint("is_nsfw").default(0).notNull(),
    isVerified: tinyint("is_verified").default(0).notNull(),
    safeListed: tinyint("safe_listed").default(0).notNull(),
    category: text("category").default("NULL"),
    floorPrice: tinyint("floor_Price").default(0).notNull(),
  },
  (table) => {
    return {
      contractNameIdx: index("nft_collections_contract_name_idx").on(table.contract, table.name),
    };
  },
);

export const nftEvents = mysqlTable(
  "nft_events",
  {
    id: int("id").autoincrement().notNull(),
    eventId: varchar("event_id", { length: 191 }).notNull(),
    eventType: varchar("event_type", { length: 255 }).notNull(),
    transactionHash: varchar("transaction_hash", { length: 255 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).default("current_timestamp()").notNull(),
    address: varchar("address", { length: 255 }).default("NULL"),
  },
  (table) => {
    return {
      nftEventsEventIdKey: unique("nft_events_event_id_key").on(table.eventId),
    };
  },
);

export const nftViews = mysqlTable("nft_views", {
  id: int("id").autoincrement().notNull(),
  contract: varchar("contract", { length: 255 }).notNull(),
  tokenId: varchar("token_id", { length: 255 }).notNull(),
  viewCount: int("view_count").default(0).notNull(),
});

export const nonce = mysqlTable(
  "nonce",
  {
    id: int("id").autoincrement().notNull(),
    nonce: varchar("nonce", { length: 191 }).notNull(),
    loggedAt: datetime("logged_at", { mode: "string", fsp: 3 }).default("current_timestamp(3)").notNull(),
  },
  (table) => {
    return {
      nonceNonceKey: unique("nonce_nonce_key").on(table.nonce),
    };
  },
);

export const users = mysqlTable(
  "users",
  {
    id: int("id").autoincrement().notNull(),
    uid: text("uid").notNull(),
    email: text("email").default("NULL"),
    name: text("name").default("NULL"),
    address: varchar("address", { length: 191 }).notNull(),
    isListed: tinyint("is_listed").default(0).notNull(),
    createdAt: datetime("created_at", { mode: "string", fsp: 3 }).default("current_timestamp(3)").notNull(),
    role: varchar("role", { length: 191 }).default("user").notNull(),
  },
  (table) => {
    return {
      usersAddressKey: unique("Users_address_key").on(table.address),
      uid: unique("uid").on(table.uid),
    };
  },
);

export const userFavorites = mysqlTable("user_favorites", {
  id: int("id").autoincrement().notNull(),
  uid: text("uid").notNull(),
  contract: varchar("contract", { length: 255 }).notNull(),
  tokenId: text("token_id").notNull(),
  addedAt: datetime("added_at", { mode: "string" }).default("current_timestamp()").notNull(),
});

export const userProfile = mysqlTable(
  "user_profile",
  {
    address: varchar("address", { length: 191 })
      .notNull()
      .references(() => users.address, { onDelete: "restrict", onUpdate: "cascade" }),
    imageUrl: text("image_url").default("NULL"),
    bannerUrl: text("banner_url").default("NULL"),
    isVerified: tinyint("is_verified").default(0).notNull(),
    socials: longtext("socials").default("NULL"),
    updatedAt: datetime("updated_at", { mode: "string" }).default("current_timestamp()").notNull(),
  },
  (table) => {
    return {
      userProfileAddressKey: unique("user_profile_address_key").on(table.address),
    };
  },
);
