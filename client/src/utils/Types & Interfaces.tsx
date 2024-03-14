export interface Product {
  productsId: string;
  name: string;
  stock: number;
  price: string;
  image: string;
  description: string;
  slug: string;
  category: {
    categoryId: string;
    name: string;
  };
  pet: {
    petId: string;
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
