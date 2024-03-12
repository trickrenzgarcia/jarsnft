import fakeCollection from "@/lib/json/fake-collection.json";
import { GetUserResponse, MetadataSchema, NFTCollection } from "@/types";
import { env } from "./env.mjs";
import { ApiResponse, User } from "@/types/ctx.types";

export const BASE_URL: string =
  process.env.NODE_ENV === "development"
    ? env.NEXT_PUBLIC_BACKEND_URL
    : env.NEXT_PUBLIC_BACKEND_URL;


export const authToken = process.env.JWT_AUTH_TOKEN as string;

export async function fetchApi(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    cache: "no-store",
  });
  const data = await response.json();
  return data as GetUserResponse;
}

export async function fetchFromAPI(url: URL, cacheTime?: number) {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = await response.json();

  return data;
}

export async function getCollections() {
  const response = await fetch(`${BASE_URL}/collections`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = (await response.json()) as NFTCollection[];
  return data || null;
}

export async function getMetadata(contract: string) {
  const response = await fetch(`${BASE_URL}/metadata/${contract}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await response.json()) as MetadataSchema;
  return data || null;
}


export async function createUser({ address }: { address: string }) {
  const response = await fetch(`${BASE_URL}/user/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    },
    body: JSON.stringify({ address: address }),
  });

  const data: ApiResponse<User> = (await response.json()) as ApiResponse<User> ;
  return data
}

export async function updateUser({ address, name, email, is_listed }: 
  { address: string | FormDataEntryValue | null, name: string | FormDataEntryValue | null, email: string | FormDataEntryValue | null, is_listed: boolean }) {
  const response = await fetch(`${BASE_URL}/user/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    },
    body: JSON.stringify({ address, name, email, is_listed }),
  });

  const data: ApiResponse<User> = (await response.json()) as ApiResponse<User> ;

  return data
}

export async function getUser(address: string) {
  const response = await fetch(`${BASE_URL}/user/${address}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    }
  });

  const data: ApiResponse<User> = (await response.json()) as ApiResponse<User> ;

  return data.data
}

export async function userExists(address: string) {
  const response = await fetch(`${BASE_URL}/user/${address}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${authToken}`,
    }
  });

  const data: ApiResponse<User> = (await response.json()) as ApiResponse<User>;

  if(!data.data) return false;

  return data
}
