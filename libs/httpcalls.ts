// fetch all products
import { url, public_url } from "./helpers";

// All Products Fetch Function
export const fetchAllProducts = async (
  e: string | null,
  r: string | null,
  n: string | null,
  b: string | null,
  a: string | null,
  p: string | null,
  sort: string | null,

  setAllProducts: any,
  setIsLoading: any
) => {
  try {
    setIsLoading(true);
    const res = await fetch(
      `${public_url}/api/products?e=${e}&r=${r}&n=${n}&b=${b}&a=${a}&page=${
        p || 1
      }&sort=${sort}`,
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const data = await res.json();
    setIsLoading(false);
    setAllProducts(data);
  } catch (error) {
    console.log("error", error);
  }
};

// Featured Products Fetch Function
export const fetchFeaturedProducts = async () => {
  try {
    const res = await fetch(`${url}/api/featuredProducts`, {
      cache: "no-store",
      next: {
        revalidate: 0,
      },
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchSingleProducts = async (id: string) => {
  try {
    const res = await fetch(`${url}/api/products/${id}`);

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log("error", error);
  }
};
