"use client";

import { ethers } from "ethers"; // ethers v5^

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { set, z } from "zod";
import { Input } from "@/components/ui/input";
import { useDropzone } from "react-dropzone";
import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import { cn, ipfsToCfIpfs, shortenFileName, truncate } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  useAddress,
  useContract,
  useMintNFT,
  useSDK,
} from "@thirdweb-dev/react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, PlusIcon } from "lucide-react";
import { RxDashboard } from "react-icons/rx";
import { jars } from "@/lib/core/api";
import { ContractForOwner, JarsContract } from "@/lib/core/types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useUserContext } from "@/components/(providers)";
import Image from "next/image";
import { Image as NextUIImage } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";
import { sdk } from "@/lib/sdk";
import { Textarea } from "@/components/ui/textarea";
import { ACCEPTED_IMAGE_TYPES } from "@/types/constant";

const mintSchema = z.object({
  collection: z.string().refine((value) => ethers.utils.isAddress(value), {
    message: "Invalid collection address.",
  }),
  name: z.string().min(1),
  description: z.string().optional(),
  image: z.instanceof(File, {
    message: "Required field.",
  }),
  animation_url: z.string().optional(),
  external_url: z.string().optional(),
  background_color: z.string().optional(),
  attributes: z.array(z.object({})).optional(),
  properties: z.array(z.object({})).optional(),
});

type FormMintNft = z.infer<typeof mintSchema>;

export default function MintNFTCard() {
  const router = useRouter();
  const { user, isLoading, isLoggedIn } = useUserContext();
  const [contracts, setContracts] = useState<JarsContract[]>([]);
  const [open, setOpen] = useState(false);
  const [uploadedMedia, setUploadedMedia] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string>("");
  const [loadingContract, setLoadingContract] = useState(false);
  const [selectedContract, setSelectedContract] = useState<
    JarsContract | undefined
  >(undefined);
  const { contract } = useContract(selectedContract?.contract);
  const {
    mutateAsync: mintNft,
    isLoading: mintLoading,
    error: mintError,
  } = useMintNFT(contract);

  const form = useForm<FormMintNft>({
    resolver: zodResolver(mintSchema),
    defaultValues: {
      collection: "",
      name: "",
      image: undefined,
      description: "",
      animation_url: "",
      external_url: "",
      background_color: "",
      attributes: [],
      properties: [],
    },
  });

  useEffect(() => {
    const fetchCollections = async () => {
      if (user) {
        setLoadingContract(true);
        const collections = await jars.getContractsForOwner(user.address);
        setContracts(collections);
        setLoadingContract(false);
      }
    };
    fetchCollections();
  }, [user]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (
        acceptedFiles.length > 0 &&
        acceptedFiles[0].type.startsWith("image/")
      ) {
        const file = acceptedFiles[0];

        if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
          toast.error("Invalid image type. Please upload a valid image file.", {
            position: "top-center",
            closeButton: true,
          });
          return;
        }

        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          setUploadedMedia(e.target?.result?.toString() || "");
          form.setValue("image", file);
        };
        reader.readAsDataURL(file);
        setUploadedFileName(shortenFileName(file.name));
      } else {
        toast.error("Invalid file type. Please upload an image file.", {
          position: "top-center",
          closeButton: true,
        });
      }
    },
    [form],
  );

  const { getInputProps, getRootProps, isDragActive } = useDropzone({ onDrop });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        setUploadedMedia(e.target?.result?.toString() || "");
        form.setValue("image", file);
      };
      reader.readAsDataURL(file);
      setUploadedFileName(shortenFileName(file.name));
    } else {
      toast.error("Invalid file type. Please upload an image file.", {
        position: "top-center",
        closeButton: true,
      });
    }
  };

  const submitMintNft = async (data: FormMintNft) => {
    const imageNft = new File([data.image], data.image.name, {
      type: data.image.type,
    });
    mintNft(
      {
        metadata: {
          name: data.name,
          image: imageNft,
          description: data.description,
          animation_url: data.animation_url,
          external_url: data.external_url,
          background_color: data.background_color,
          attributes: data.attributes,
          properties: data.properties,
        },
        to: user.address,
      },
      {
        onSettled(data, error, variables, context) {
          console.log(data, error, variables, context);
        },
        onError(error, variables, context) {
          console.log(error, variables, context);
        },
        onSuccess(data, variables, context) {
          console.log(data, variables, context);
        },
      },
    );
  };

  return (
    <Card className="w-full max-w-[800px]">
      <CardHeader>
        <CardTitle>Mint</CardTitle>
        <CardDescription>
          Mint your NFT by uploading an image and entering the metadata.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-5">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitMintNft)}
            className="flex flex-col items-center"
          >
            <FormField
              control={form.control}
              name="collection"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>* Choose a collection</FormLabel>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          role="combobox"
                          variant="outline"
                          className="flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]"
                        >
                          {selectedContract ? (
                            <>
                              <div className="relative flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <Image
                                  src={selectedContract.image}
                                  fill
                                  style={{ objectFit: "cover" }}
                                  alt={selectedContract.name}
                                  className="absolute h-[60px] w-[60px] rounded-md"
                                />
                              </div>
                              <div className="flex flex-col items-start">
                                <h2 className="text-medium">
                                  {truncate(selectedContract.name, 26)}
                                </h2>
                                <h3 className="text-xs font-light text-foreground">
                                  ERC-721
                                </h3>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-muted">
                                <RxDashboard className="h-[24px] w-[24px]" />
                              </div>
                              <div className="flex flex-col items-start">
                                <h2 className="text-medium">
                                  Choose a collection
                                </h2>
                              </div>
                            </>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="max-h-[400px] w-[384px] min-w-[300px] items-center justify-start gap-3 overflow-y-scroll scroll-smooth bg-background md:w-[420px] lg:w-[500px] xl:w-[600px]">
                      {loadingContract && (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                        >
                          <Skeleton className="h-[60px] w-[60px] rounded-md" />
                          <div className="flex flex-col items-start gap-1">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-20" />
                          </div>
                        </Button>
                      )}
                      {!loadingContract && (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                          onClick={() => {
                            router.push("/create/deploy-contract");
                            setOpen(false);
                          }}
                        >
                          <div className="flex h-[60px] w-[60px] select-none items-center justify-center rounded-md bg-muted">
                            <PlusIcon className="h-[24px] w-[24px]" />
                          </div>
                          <div className="flex select-none flex-col items-start">
                            <h2 className="text-medium">
                              Create a new collection
                            </h2>
                          </div>
                        </Button>
                      )}
                      {contracts.map((contract) => (
                        <Button
                          variant="ghost"
                          className="flex h-fit w-full justify-start gap-3"
                          onClick={() => {
                            form.setValue("collection", contract.contract);
                            setSelectedContract(contract);
                            setOpen(false);
                          }}
                        >
                          <div className="relative flex h-[60px] w-[60px] select-none rounded-md bg-muted">
                            <Image
                              src={contract.image}
                              alt={contract.name}
                              style={{ objectFit: "cover" }}
                              fill
                              className="absolute h-24 w-24 rounded-md"
                            />
                          </div>
                          <div className="flex select-none flex-col items-start">
                            <h2 className="text-medium">
                              {truncate(contract.name, 26)}
                            </h2>
                            <h3 className="text-xs font-light text-foreground">
                              ERC-721
                            </h3>
                          </div>
                        </Button>
                      ))}
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-md flex items-center gap-1 font-semibold">
                    <span className="text-red-400">*</span>Media
                  </FormLabel>
                  <FormControl>
                    <>
                      <Input
                        {...getInputProps()}
                        {...form.register("image")}
                        id="media"
                        className="h-full w-full"
                        type="file"
                        accept=""
                        onChange={handleImageChange}
                        style={{ display: "none" }}
                      />
                      <div
                        className={cn(
                          "flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]",
                        )}
                        {...getRootProps()}
                        onClick={(e) => {
                          e.preventDefault();
                          const fileInput = document.getElementById(
                            "media",
                          ) as HTMLInputElement;
                          fileInput?.click();
                        }}
                      >
                        <div className="relative h-[240px] w-[240px]">
                          <NextUIImage
                            isBlurred
                            src={uploadedMedia || ""}
                            alt={uploadedFileName}
                            style={{ objectFit: "cover" }}
                            className="flex h-full w-full"
                          />
                        </div>
                      </div>
                    </>
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      id="description"
                      placeholder="Enter the description of your NFT (Optional)"
                      className="flex h-fit w-[384px] min-w-[300px] items-center justify-start gap-3 md:w-[420px] lg:w-[500px] xl:w-[600px]"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit">Mint</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
