export interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
  discount?: number;
  cuotas?: string;
  envio?: {
    label: string;
    full: boolean;
  };
}

export interface ProductItemProps {
  item: Product;
  display: 'Grid' | 'Column';
}
