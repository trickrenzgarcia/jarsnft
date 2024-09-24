import { relations } from "drizzle-orm/relations";
import { users, userProfile } from "./schema";

export const userProfileRelations = relations(userProfile, ({one}) => ({
	user: one(users, {
		fields: [userProfile.address],
		references: [users.address]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	userProfiles: many(userProfile),
}));