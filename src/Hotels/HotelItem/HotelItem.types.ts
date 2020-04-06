export interface Option {
  enabled: boolean;
  option: string;
}

export interface HotelItemShape {
  id: number;
  city: string;
  name: string;
  stars: number;
  desc: string;
  rating: number;
  maxPlace: number;
  price: {
    [key: number]: number;
  };
  advantages: string[];
  disadvantages: string[];
  hasPlace: boolean;
  favorite: boolean;
  imgLink: string;
  contacts: string;
}
