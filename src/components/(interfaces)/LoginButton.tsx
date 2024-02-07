"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { zodResolver } from "@hookform/resolvers/zod"
import { useAddress, useAuth, useConnect, metamaskWallet } from '@thirdweb-dev/react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Name must be at least 3 characters.'
  }),
  email: z.string().email()
})

const metamaskConfig = metamaskWallet();

export default function LoginButton() {
  const nextTheme = useTheme()
  const address = useAddress()
  const connect = useConnect()
  const auth = useAuth()
  const { data: session } = useSession();
  const [isOpen, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if(session?.user.address){
      setOpen(true)
    }
  }, [session])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: ""
    }
  })

  function onSubmitForm(values: z.infer<typeof formSchema>) {
    console.log("login submitted!")
  }

  async function loginWithWallet() {
    // Prompt the user to sign a login with wallet message
    const payload = await auth?.login();

    // Then send the payload to next auth as login credentials
    // using the "credentials" provider method
    await signIn("credentials", {
      payload: JSON.stringify(payload),
      redirect: false,
    });
  }

  return (
    <>
      <Dialog defaultOpen={false} open={isOpen} >
        <DialogTrigger onClick={() => setOpen(true)}></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create your JarsNFT account</DialogTitle>
            <DialogDescription>
              Start collecting valuable piece of digital artworks.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmitForm)}>
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Email' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='Name' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      {address ? 
      (
        <Button onClick={() => loginWithWallet()}>Login</Button>
      )
      : 
      (
        <Button onClick={async () => {
          await connect(metamaskConfig, {
            chainId: 11155111
          })
        }}>Connect Wallet</Button>
      )}
      
    </>
  )
}