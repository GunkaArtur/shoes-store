export const ADD_ITEM_TO_CARD = "ADD_ITEM_TO_CARD";
export const REMOVE_ITEM_FROM_CARD = "REMOVE_ITEM_FROM_CARD";
export const BUY = "BUY";

export function addItem(item) {
  return {
    type: ADD_ITEM_TO_CARD,
    payload: item
  };
}
export const removeItem = id => {
  return {
    type: REMOVE_ITEM_FROM_CARD,
    payload: id
  };
};
export const buyItems = () => {
  return {
    type: BUY
  };
};
