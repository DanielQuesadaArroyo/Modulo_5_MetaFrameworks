export type Review = {
  id: string;
  date: string;
  author: string;
  comment: string;
};

export type House = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  address: string;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  reviews: Review[];
};
