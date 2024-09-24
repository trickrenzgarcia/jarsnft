import { createUser, favoriteScheme, updateUser, walletAddress } from "@/schema/zod";
import { Hono } from "hono";
import { db } from "@/../drizzle/db";
import { and, eq, sql } from "drizzle-orm";
import { userFavorites, userProfile as userProfileTable, users as usersTable } from "@/../drizzle/migrations/schema";
import { randomUUID } from "crypto";

export const user = new Hono()

user.get('/all', async (c) => {
  try {
    const users = await db.query.users.findMany()
    return c.json(users, 200)
  } catch(error) {
    return c.json({ message: "Internal Server Error!" }, 500)
  }
})

user.get('/favorite/count', async (c) => {
  const query = c.req.query()
  const schema = favoriteScheme.omit({ uid: true }).safeParse(query)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }


  const [{ count }] = await db.select({
    count: sql<number>`COUNT(*)`,
  })
  .from(userFavorites)
  .where(
    and(
      eq(userFavorites.contract, schema.data.contract),
      eq(userFavorites.tokenId, schema.data.tokenId)
    )
  );

  return c.json({ count }, 200)
})

user.get('/favorite/isLiked', async (c) => {
  const query = c.req.query()
  const schema = favoriteScheme.safeParse(query)

  if(!schema.success) {
    return c.json(schema.error.errors, 400)
  }

  const user = await db.query.userFavorites.findFirst({
    where: and(
      eq(userFavorites.uid, schema.data.uid),
      eq(userFavorites.contract, schema.data.contract),
      eq(userFavorites.tokenId, schema.data.tokenId)
    )
  })

  return c.json(!!user, 200)
})

user.post('/favorite/create', async (c) => {
  try {
    const body = await c.req.json()
    const schema = favoriteScheme.safeParse(body)

    if(!schema.success) {
      return c.json(schema.error.errors, 400)
    }

    const favExists = await db.query.userFavorites.findFirst({
      where: and(
        eq(userFavorites.uid, schema.data.uid),
        eq(userFavorites.contract, schema.data.contract),
        eq(userFavorites.tokenId, schema.data.tokenId)
      )
    })

    if(!favExists) {
      await db.insert(userFavorites).values({
        uid: schema.data.uid,
        contract: schema.data.contract,
        tokenId: schema.data.tokenId
      })

      const fav = await db.query.userFavorites.findFirst({
        where: and(
          eq(userFavorites.uid, schema.data.uid),
          eq(userFavorites.contract, schema.data.contract),
          eq(userFavorites.tokenId, schema.data.tokenId)
        )
      })

      return c.json(fav, 201)
    }

    await db.delete(userFavorites).where(
      and(
        eq(userFavorites.uid, schema.data.uid),
        eq(userFavorites.contract, schema.data.contract),
        eq(userFavorites.tokenId, schema.data.tokenId)
      )
    )

    return c.json({ message: "Favorite removed" }, 200)
  } catch (error) {
    return c.json({ message: "Invalid Request!" }, 500)
  }
})

user.get('/:address', async (c) => {
  const params = walletAddress.safeParse(c.req.param('address'))

  if(!params.success) {
    return c.json(params.error.errors, 400)
  }

  // to fetch user data from database
  const address = params.data

  const user = await db.query.users.findFirst({
    where: eq(usersTable.address, address)
  })

  if(!user) {
    return c.json({ message: 'User not found' }, 404)
  }

  return c.json(user, 200)

})

user.get('/:address/profile', async (c) => {
  const params = walletAddress.safeParse(c.req.param('address'))

  if(!params.success) {
    return c.json(params.error.errors, 400)
  }

  const address = params.data

  const userProfile = await db.select({
    user: usersTable,
    profile: userProfileTable
  }).from(usersTable)
  .leftJoin(userProfileTable, eq(usersTable.address, userProfileTable.address))
  .where(eq(usersTable.address, address))
  .limit(1)

  if(!userProfile[0]) {
    return c.json(null, 404)
  }

  return c.json({
    ...userProfile[0].user,
    profile: userProfile[0].profile
  }, 200)
})

user.get('/is-listed/:address', async (c) => {
  const address = c.req.param('address').toString()
  const user = await db.query.users.findFirst({
    where: eq(usersTable.address, address)
  })

  if(!user) {
    return c.json(false, 404)
  }

  if(user.isListed === 0) {
    return c.json(false, 200)
  }

  return c.json(true, 200)
})

user.get('/email/:email', async (c) => {
  const email = c.req.param('email').toString()
  const user = await db.query.users.findFirst({
    where: eq(usersTable.email, email)
  })

  if(!user) {
    return c.json(false, 404)
  }

  return c.json(true, 200)
})

user.post('/create', async (c) => {
  try {
    const body = await c.req.json()
    const user = createUser.safeParse(body)

    if(!user.success) {
      return c.json(user.error.errors, 400)
    }

    await db.insert(usersTable).values({
      uid: randomUUID(),
      address: user.data.address,
      isListed: 0,
    })

    const data = await db.query.users.findFirst({
      where: eq(usersTable.address, user.data.address)
    })    

    return c.json(data, 200)
  } catch(error) {
    return c.json({ message: "Invalid Request!" }, 500)
  }
})

user.put('/update', async (c) => {
  try {
    const body = await c.req.json()
    const user = updateUser.safeParse(body)

    if(!user.success) {
      return c.json(user.error.errors, 400)
    }

    // Check if user exists
    const cUser = await db.query.users.findFirst({
      where: eq(usersTable.address, user.data.address)
    })

    if(!cUser) {
      return c.json({ message: "User not found" }, 404)
    }

    // Update user data
    await db.update(usersTable).set({
      name: user.data.name,
      email: user.data.email,
      isListed: user.data.isListed
    }).where(eq(usersTable.address, user.data.address))

    // Fetch updated user data
    const data = await db.query.users.findFirst({
      where: eq(usersTable.address, user.data.address)
    })

    return c.json(data, 200)
  } catch (error) {
    return c.json({ message: "Invalid Request!" }, 500)
  }
})