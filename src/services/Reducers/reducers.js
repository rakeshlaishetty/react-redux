export const InitialState = {
  cardData: {},
};

const CardItem = (state = InitialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return {
        ...state,
        cardData: action.data,
      }
      break;
      default:
        return state;
  }
};

export default CardItem;
