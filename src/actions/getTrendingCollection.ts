"use server"

const getTrendingCollection = async (category: string, page: string, limit: string) => {

  if(!category || !page || !limit) return;

  const response = await fetch(`/api/trending?category=${category}&page=${page}&limit=${limit}`, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  const data = await response.json();
  
  return data;
}

export default getTrendingCollection;