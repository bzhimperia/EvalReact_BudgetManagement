import {useReducer} from "react";

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
                    title: action.payload.titre,
                    amount: action.payload.montant,
                    category: action.payload.categorie,
                    }])
            }
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