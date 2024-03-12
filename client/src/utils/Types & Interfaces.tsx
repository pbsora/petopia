export interface Product {
  productsId: string;
  name: string;
  stock: number;
  price: string;
  image: string;
  description: string;
  slug: string;
  category: {
    id: string;
    name: string;
  };
  pet: {
    id: string;
    name: string;
  };
}

export interface ProductResponse {
  data: Product[];
  pagination: {
    PageCount: number;
    PageNumber: number;
  };
}
