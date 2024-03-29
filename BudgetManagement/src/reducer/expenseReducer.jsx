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
                tasks: state.tasks.concat([{
                    id: Date.now(),
                    title: action.payload.titre,
                    amount: action.payload.montant,
                    category: action.payload.categorie,
                    
                    done: false
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

const useExpenseReducer = () => useReducer(expenseReducer, initialState)

export default useExpenseReducer