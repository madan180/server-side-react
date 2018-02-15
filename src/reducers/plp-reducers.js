let initialState = {
  products: []
};
const PLPReducer = (state = initialState, action) => {

  switch (action.type){
      case "GET_DATA":
          return Object.assign({},state, action.data);
      default:
          return state;
  }
};

export  default PLPReducer;