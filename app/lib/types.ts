export interface UserTypes {
  linkIcon?: JSX.Element;
  linkText: string;
  link: string;
  id: string | number;
}

export interface SingleProduct {
  productImage: string;
  title: string;
  price: string;
  slug: { current: string; _type: string };
}
