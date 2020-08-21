import { ADD_ITEM_TO_CARD, REMOVE_ITEM_FROM_CARD, BUY } from "./actions";

const initialState = { items: [] };

export function card(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CARD: {
      return { ...state, items: [...state.items, action.payload] };
    }
    case REMOVE_ITEM_FROM_CARD:
      return state.items
        ? { items: state.items.filter(item => item.id !== action.payload) }
        : state;
    case BUY:
      return { items: [] };
    default:
      return state;
  }
}
