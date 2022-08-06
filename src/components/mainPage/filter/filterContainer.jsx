/*import React from 'react';*/
/*import 'simplebar-react/dist/simplebar.min.css';*/
import {actionCreatorAddIngredientsForFilter, actionCreatorRemoveFilter, actionCreatorUpdateUserSearchText} from "../../../redux/filter-reducer";
import Filter from "./filter";

const FilterContainer = (props) => {
    let state = props.store.getState().filter;

    function addToFilter(ingredient) {
        props.store.dispatch(actionCreatorAddIngredientsForFilter(ingredient));
    }

    function removeFilters() {
        props.store.dispatch(actionCreatorRemoveFilter())
    }

    let userSearchChange = (text) => {
        props.store.dispatch(actionCreatorUpdateUserSearchText(text));
    }

    return (
        <Filter userSearchChange = {userSearchChange}
                removeFilters = {removeFilters}
                addToFilter = {addToFilter}
                state = {state}
        />
    )
}
export default FilterContainer;