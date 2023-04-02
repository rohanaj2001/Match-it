export interface AppState {
  data: {
    responseData: Item;
  };
}

export interface Item {
  shirt: string;
  pant: string;
}