export interface AppState {
  data: {
    responseData: Item;
  };
}

export interface Item {
  shirt: string;
  pant: string;
  min_extreme: string;
  max_extreme: string;
}