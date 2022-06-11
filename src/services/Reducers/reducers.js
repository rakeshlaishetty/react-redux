import { Add_To_Cart } from "../Constants";
export const InitialState = {
  cardData: [],
};

export default function CardItem(state = InitialState, action) {
  switch (action.type) {
    case Add_To_Cart:
      console.log("ADD reducers",action)
      return {
        ...state,
        cardData: action.data
      }
      default:
        return state;
  }
};

