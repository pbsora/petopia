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

export interface UserRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface AuthData {
  username: string;
  email: string;
}

export interface AuthContext {
  user: AuthData | { username: null; email: null };
  setUserData: (user: AuthData) => void;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: string | number;
  name: string;
  image: string;
  slug: string;
}
