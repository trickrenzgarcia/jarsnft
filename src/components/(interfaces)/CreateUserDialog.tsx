"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { Spinner } from "@nextui-org/react";
import Link from "next/link";

// Zod Validation Form
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { createUser } from "@/app/actions";
import { useState } from "react";
import { Profile } from "@/types";

const formCreateUserSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Name is too short",
    })
    .max(50, {
      message: "Name is too long",
    }),
  email: z.string().email(),
});

type UserProfile = {
  user: Profile;
  isLoggedIn: boolean;
  isLoading: boolean;
};

export default function CreateUserDialog({
  isOpenCreate,
}: {
  isOpenCreate: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const { user, isLoggedIn, isLoading: sessionLoading } = useUser() as UserProfile
  // Logout/Disconnect the wallet
  const { logout, isLoading } = useLogout();
  const { data:session, update } = useSession()

  // Define the form with zod schema.
  const form = useForm<z.infer<typeof formCreateUserSchema>>({
    resolver: zodResolver(formCreateUserSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // handle the form submit with async
  const handleCreateUser = async (values: z.infer<typeof formCreateUserSchema>) => {
    if (!isLoggedIn) return;

    setLoading(true);

    const formData: FormData = new FormData();
    formData.set("address", user.data.address);
    formData.set("name", values.name);
    formData.set("email", values.email);

    try {
      const updatedData = await createUser(formData);
      //console.log(updatedData);
      console.log(session)
      await update({ ...session, user: { ...session?.user, session: { ...session?.user.session, 
        is_listed: true
      }, data: { ...session?.user.data, session: { ...session?.user.data.session, is_listed: true } } } });
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  

  // Define the form submit handler function
  async function onSubmit(values: z.infer<typeof formCreateUserSchema>) {
    await handleCreateUser(values)
  }

  
  return (
    <Dialog open={isOpenCreate}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="alan_turing@gmail.com" {...field} />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <div className="flex flex-col w-full justify-center items-center gap-3">
                <Button type="submit">Create</Button>
                <Button variant="ghost" onClick={() => logout()}>
                  {isLoading ? <Spinner /> : "Logout"}
                </Button>
                <Link
                  href="/learn/getting-started#installing-wallet"
                  className="text-left"
                  target="_blank"
                >
                  New to wallet?
                </Link>
              </div>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
