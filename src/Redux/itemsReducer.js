import * as data from "../store.json";

const initialState = {
  items: [data.items]
};

export function items(state, action) {
  switch (action) {
    default:
      return initialState;
  }
}
