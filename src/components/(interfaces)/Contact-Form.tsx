"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "@/lib/contactSchema";
import { sendEmail } from "@/actions/contactActions";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await sendEmail(data);

    if (result?.success) {
      console.log({ data: result.data });
      toast.success("Email sent!");
      reset();
      return;
    }

    console.log(result?.error);
    toast.error("Something went wrong!");
  };

  return (
      <div className="flex flex-col flex-1 justify-center gap-4">
        <h1 className="mb-1 text-2xl font-semibold">Get Verified Now!</h1>
      <form
        onSubmit={handleSubmit(processForm)}
        className="flex flex-col gap-4"
        autoComplete="off"
      >
        <div>
          <Input type="text" placeholder="Name" {...register("name")} />
          {errors.name?.message && (
            <p className="text-center text-md text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <Input type="email" placeholder="Email" {...register("email")} />
          {errors.email?.message && (
            <p className="text-center text-md text-red-500">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <Textarea
            placeholder="Type your message"
            className="w-full rounded-md h-"
            autoComplete="off"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="text-center text-md text-red-500">
              {errors.message.message}
            </p>
          )}
        </div>

        <Button
          variant="outline"
          disabled={isSubmitting}
          className="font-bold dark:text-sky-500 w-[50%] self-center"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
}
