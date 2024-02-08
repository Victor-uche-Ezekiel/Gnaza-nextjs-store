// fetch all products
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
      `http://localhost:3000/api/products?e=${e}&r=${r}&n=${n}&b=${b}&a=${a}&page=${
        p || 1
      }&sort=${sort}`,
      {
        method: "GET",
        // cache:''
        // cache: "no-cache",
        // cache: "force-cache",
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
