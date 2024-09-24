// "use client";

// import useSWR from "swr";

// const fetcher = (address: string) =>
//   fetch(`/api/collection/${address}`).then((res) => res.json());

// export function useCollection(address: string) {
//   const { data, isLoading, error } = useSWR("address", () => fetcher(address), {
//     revalidateOnFocus: false,
//     revalidateOnReconnect: false,
//   });

//   return {
//     data: data,
//     isLoading,
//     isError: error,
//   };
// }
