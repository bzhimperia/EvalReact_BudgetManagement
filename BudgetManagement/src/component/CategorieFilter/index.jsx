import {useTodoContext} from "../../context/ExepenseContext.jsx";

const CategorieFilter = () => {

    //Je récupère l'état et la fonction de dispatch à partir de mon context
    const {state, dispatch} = useTodoContext()
    //Je récupère le filtre sélectionnée et la liste des catégories
    const {filter, categories} = state
    const handleFilterChange = (e) => {
        //la valeur récupérée est l'id de la catégorie sélectionnée.
        const {value} = e.target
        dispatch({
            type: "set_filter",
            payload: value
        })
    }

    return (
        <div>
            <label htmlFor={'filtre'}>Filtres : </label>
            <select value={filter} id={'filtre'} onChange={handleFilterChange}>
                <option value={""}>Toutes</option>
                {
                    categories.map(cat => {
                        return <option key={cat.id} value={cat.id}>{cat.label}</option>
                    })
                }
            </select>
        </div>
    );
};

export default CategorieFilter;