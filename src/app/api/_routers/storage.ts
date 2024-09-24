import { Hono } from "hono";
import { randomUUID } from "crypto";
import supabase from "@/lib/supabase";
import { db } from "@/../drizzle/db";
import { userProfile as userProfileTable } from "@/../drizzle/migrations/schema";
import { eq } from "drizzle-orm";
import { addressSchema, updateSchema, uploadCover, uploadSchema } from "@/schema/zod";

export const storage = new Hono()



storage.post('/profile/create', async (c) => {
  try {
    const body = await c.req.json()
    const schemaData = addressSchema.safeParse(body)

    if(!schemaData.success) {
      return c.json(schemaData.error.errors, 400)
    }

    await db.insert(userProfileTable).values({
      address: schemaData.data.address
    })

    const profile = await db.query.userProfile.findFirst({
      where: eq(userProfileTable.address, schemaData.data.address)
    })

    return c.json(profile, 200)
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

storage.post('/profile/update', async (c) => {
  try {
    const body = await c.req.json()
    const data = updateSchema.safeParse(body)

    if(!data.success) {
      return c.json(data.error.errors, 400)
    }

    await db.update(userProfileTable).set({
      imageUrl: data.data.imageUrl
    }).where(eq(userProfileTable.address, data.data.address))

    const profile = await db.query.userProfile.findFirst({
      where: eq(userProfileTable.address, data.data.address)
    })

    return c.json(profile, 200)
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

storage.post('/profile/image', async (c) => {
  try {
    const body = await c.req.parseBody()
    const validated = uploadSchema.safeParse(body)

    if(!validated.success) {
      return c.json(validated.error.errors, 400)
    }

    const image: File = body['image'] as File

    if(!image) {
      return c.json({ message: 'Image is required' }, 400)
    }

    const uuid = randomUUID()
    const fileName = `${uuid}.${image.name.split('.').pop()}`
    const arrayBuff = await image.arrayBuffer()

    const { data: result , error } = await supabase.storage.from('jarsnft_profile').upload(fileName, arrayBuff, {
      contentType: image.type
    })

    if(error) {
      return c.json({ message: 'Failed to upload image' }, 500)
    }

    const fileUrl = supabase.storage.from('jarsnft_profile').getPublicUrl(result.path).data.publicUrl;

    await db.transaction(async (tx) => {
      await tx.update(userProfileTable).set({
        imageUrl: fileUrl
      }).where(eq(userProfileTable.address, validated.data.address))

      const userCover = await tx.query.userProfile.findFirst({
        where: eq(userProfileTable.address, validated.data.address)
      })

      if(!userCover) {
        return c.json({ message: 'Failed to update user profile' }, 500)
      }

      return c.json({ imageUrl: userCover.imageUrl }, 200)
    })
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})

storage.post('/profile/cover', async (c) => {
  try {
    const body = await c.req.parseBody()
    const validated = uploadCover.safeParse(body)

    if(!validated.success) {
      return c.json(validated.error.errors, 400)
    }

    const image: File = body['image'] as File

    if(!image) {
      return c.json({ message: 'Image is required' }, 400)
    }

    const uuid = randomUUID()
    const fileName = `${uuid}.${image.name.split('.').pop()}`
    const arrayBuff = await image.arrayBuffer()

    const { data: result , error } = await supabase.storage.from('jarsnft_cover').upload(fileName, arrayBuff, {
      contentType: image.type
    })

    if(error) {
      return c.json({ message: 'Failed to upload image' }, 500)
    }

    const fileUrl = supabase.storage.from('jarsnft_cover').getPublicUrl(result.path).data.publicUrl;

    await db.transaction(async (tx) => {
      await tx.update(userProfileTable).set({
        bannerUrl: fileUrl
      }).where(eq(userProfileTable.address, validated.data.address))

      const userCover = await tx.query.userProfile.findFirst({
        where: eq(userProfileTable.address, validated.data.address)
      })

      if(!userCover) {
        return c.json({ message: 'Failed to update user profile' }, 500)
      }

      return c.json({ bannerUrl: userCover.bannerUrl }, 200)
    })
  } catch (error) {
    return c.json({ message: 'Invalid request' }, 400)
  }
})