export interface Price {
  1: number;
  2?: number;
  3?: number;
  4?: number;
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
