export interface Price{
  [key: number]: number
}

export interface Hotel {
  id: number;
  city: string;
  name: string;
  stars: number;
  desc: string;
  rating: number;
  maxPlace: number;
  price: Price;
  prepayment: boolean;
  breakfast: boolean;
  hasPlace: boolean;
  favorite: boolean;
  imgLink: string;
  contacts: string;
  banking: boolean;
}
