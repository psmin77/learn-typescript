interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
// function fetchProducts(): Promise<Product[]> {}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세 정보
type ShoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: ShoppingItem) {}


// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }

// 3. 특정 상품의 정보를 업데이트
type UpdateProduct = Partial<Product>
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  userName: string;
  email: string;
  profilePhotoUrl: string;
}
// #1
// type UserProfileUpdate = {
//   userName?: UserProfile['userName'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2
// type UserProfileUpdate = {
//   [p in 'userName' | 'email' | 'profilePhtoUrl']?: UserProfile[p]
// }

// #3
type UserProfileKeys = keyof UserProfile;
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]; 
}

// #4
type Subset<T> = {
  [p in keyof T]?: T[p]; 
}