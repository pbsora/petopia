export interface Product {
  productsId: string;
  name: string;
  stock: number;
  price: string | number;
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

export interface NewProduct {
  name: string;
  stock: number;
  price: string | number;
  image: string;
  description: string;
  categoryId: number;
  petId: number;
}

export interface ProductResponse {
  data: Product[];
  pagination: {
    PageCount: number;
    PageNumber: number;
    TotalItemCount: number;
  };
}
