const initialState = {
      expenses: [],
      filter: ""
    };

const expenseReducer = (state, action) => {

    switch(action.type) {

        case 'add_expense':
  return {
    ...state,
    expenses: state.expenses.concat([{
      title: action.payload.title,    
      amount: action.payload.amount,  
      category: action.payload.category, 

    }])
  };
        case 'set_filter':
            return {
                ...state,
                filter: action.payload
            }

        default:
            return state;
    }
}

export { expenseReducer, initialState };