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
    prepayment: boolean;
    breakfast: boolean;
    hasPlace: boolean;
    favorite: boolean;
    imgLink: string;
    contacts: string;
    banking: boolean;
  }
  