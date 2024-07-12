export interface MenuType {
  id: number;
  imageUrl: string;
  ingredients: string[];
  name: string;
  soldOut: boolean;
  unitPrice: number;
}

export interface CartType {
  pizzaId: number | string;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderType {
  id: number | string;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  customer: string;
  phone: string;
  address: string;
  cart: CartType[];
}

export interface OrderItemType {
  quantity: number;
  name: string;
  totalPrice: number;
}
