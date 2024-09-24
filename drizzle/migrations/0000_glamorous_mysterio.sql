-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `api_keys` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`address` varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`apiKey` varchar(255) NOT NULL,
	`created_at` date NOT NULL DEFAULT 'current_timestamp(3)',
	`expired_at` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `contracts` (
	`contract_id` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`image` text NOT NULL,
	`external_link` text NOT NULL,
	`symbol` text NOT NULL,
	`owner` text NOT NULL,
	`primary_sale_recipient` text NOT NULL,
	`fee_recipient` text NOT NULL,
	`app_uri` text NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT 'current_timestamp()',
	`updatedAt` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `nft_collections` (
	`contract` varchar(255) NOT NULL,
	`image` text DEFAULT 'NULL',
	`name` text NOT NULL,
	`symbol` text DEFAULT 'NULL',
	`description` text DEFAULT 'NULL',
	`app_uri` text DEFAULT 'NULL',
	`external_link` text DEFAULT 'NULL',
	`fee_recipient` text DEFAULT 'NULL',
	`seller_fee_basis_points` int(11) DEFAULT 'NULL',
	`primary_sale_recipient` text DEFAULT 'NULL',
	`trusted_forwarders` longtext DEFAULT 'NULL',
	`owner` text NOT NULL,
	`view_count` int(11) NOT NULL DEFAULT 0,
	`created_at` datetime NOT NULL DEFAULT 'current_timestamp()',
	`is_nsfw` tinyint NOT NULL DEFAULT 0,
	`is_verified` tinyint NOT NULL DEFAULT 0,
	`safe_listed` tinyint NOT NULL DEFAULT 0,
	`category` text DEFAULT 'NULL'
);
--> statement-breakpoint
CREATE TABLE `nft_events` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`event_id` varchar(191) NOT NULL,
	`event_type` varchar(255) NOT NULL,
	`transaction_hash` varchar(255) NOT NULL,
	`created_at` datetime NOT NULL DEFAULT 'current_timestamp()',
	`address` varchar(255) DEFAULT 'NULL',
	CONSTRAINT `nft_events_event_id_key` UNIQUE(`event_id`)
);
--> statement-breakpoint
CREATE TABLE `nft_views` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`contract` varchar(255) NOT NULL,
	`token_id` varchar(255) NOT NULL,
	`view_count` int(11) NOT NULL DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `nonce` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`nonce` varchar(191) NOT NULL,
	`logged_at` datetime(3) NOT NULL DEFAULT 'current_timestamp(3)',
	CONSTRAINT `nonce_nonce_key` UNIQUE(`nonce`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`uid` text NOT NULL,
	`email` text DEFAULT 'NULL',
	`name` text DEFAULT 'NULL',
	`address` varchar(191) NOT NULL,
	`is_listed` tinyint NOT NULL DEFAULT 0,
	`created_at` datetime(3) NOT NULL DEFAULT 'current_timestamp(3)',
	`role` varchar(191) NOT NULL DEFAULT ''user'',
	CONSTRAINT `Users_address_key` UNIQUE(`address`),
	CONSTRAINT `uid` UNIQUE(`uid`)
);
--> statement-breakpoint
CREATE TABLE `user_favorites` (
	`id` int(11) AUTO_INCREMENT NOT NULL,
	`uid` text NOT NULL,
	`contract` varchar(255) NOT NULL,
	`token_id` text NOT NULL,
	`added_at` datetime NOT NULL DEFAULT 'current_timestamp()'
);
--> statement-breakpoint
CREATE TABLE `user_profile` (
	`address` varchar(191) NOT NULL,
	`image_url` text DEFAULT 'NULL',
	`banner_url` text DEFAULT 'NULL',
	`is_verified` tinyint NOT NULL DEFAULT 0,
	`socials` longtext DEFAULT 'NULL',
	`updated_at` datetime NOT NULL DEFAULT 'current_timestamp()',
	CONSTRAINT `user_profile_address_key` UNIQUE(`address`)
);
--> statement-breakpoint
ALTER TABLE `user_profile` ADD CONSTRAINT `user_profile_address_fkey` FOREIGN KEY (`address`) REFERENCES `users`(`address`) ON DELETE restrict ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `nft_collections_contract_name_idx` ON `nft_collections` (`contract`,`name`);
*/