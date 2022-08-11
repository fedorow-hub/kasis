/*import React from 'react';*/
/*import 'simplebar-react/dist/simplebar.min.css';*/
import {
    actionCreatorAddIngredientsForFilter,
    actionCreatorRemoveFilter,
    actionCreatorRemoveUserSearch,
    actionCreatorUpdateUserSearchText
} from "../../../redux/filter-reducer";
import Filter from "./filter";
import {actionCreatorCleanFiltredCatalog, actionCreatorFiltrationCatalog} from "../../../redux/catalog-reducer";

const FilterContainer = (props) => {
    let state = props.store.getState().filter;

    function addToFilter(ingredient) {
        props.store.dispatch(actionCreatorAddIngredientsForFilter(ingredient));
    }

    function removeFilters() {
        props.store.dispatch(actionCreatorRemoveFilter());
        props.store.dispatch(actionCreatorCleanFiltredCatalog());
    }

    let userSearchChange = (text) => {
        props.store.dispatch(actionCreatorUpdateUserSearchText(text));
    }

    function filterCatalog() {
        props.store.dispatch(actionCreatorFiltrationCatalog(state.ingredientsForFilter, state.userSearch));
        props.store.dispatch(actionCreatorRemoveUserSearch());
    }



    return (
        <Filter userSearchChange = {userSearchChange}
                removeFilters = {removeFilters}
                addToFilter = {addToFilter}
                filterCatalog = {filterCatalog}
                state = {state}
        />
    )
}
export default FilterContainer;