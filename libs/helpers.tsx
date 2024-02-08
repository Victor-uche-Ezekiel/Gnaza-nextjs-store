export const closeSortModel = (setIsSortOpen: (value: boolean) => void) => {
  document.body.addEventListener("click", function (e) {
    const target = e.target as HTMLElement;
    let elId = target?.getAttribute("id");
    elId !== "sortvalue" ? setIsSortOpen(false) : null;
  });
};

export const getNavHeight = () => {
  const nav = document.getElementById("navId");
  const navHeading = document.getElementById("navHeading");
  let navHeight = nav?.clientHeight;

  const handleResize = () => {
    navHeight = nav?.clientHeight;
    navHeading?.setAttribute("style", `top:${navHeight}px`);
  };

  navHeading?.setAttribute("style", `top:${navHeight}px`);
  window.addEventListener("resize", handleResize);
};

export const E = "earring";
export const N = "necklace";
export const B = "bracelet";
export const A = "anklechain";
export const R = "ring";

export const setSearchParams = (
  paramName: string,
  page: any,
  router: any,
  createQueryString: any
) => {
  let newPage;
  let newPageValue;

  if (paramName === "next") {
    if (page === null) {
      page = "1";
      newPage = Number(page);
      newPageValue = newPage + 1;
    } else {
      newPage = Number(page);
      newPageValue = newPage + 1;
    }
    router.push(`/store?${createQueryString("page", newPageValue)}`, {
      scroll: false,
    });
  } else {
    if (page === null) {
      page = "1";
      newPage = Number(page);
      newPageValue = newPage - 1;
      if (newPageValue <= 1) newPageValue = 1;
    } else {
      newPage = Number(page);
      newPageValue = newPage - 1;
      if (newPageValue <= 1) newPageValue = 1;
    }
    router.push(`/store?${createQueryString("page", newPageValue)}`, {
      scroll: false,
    });
  }
};
