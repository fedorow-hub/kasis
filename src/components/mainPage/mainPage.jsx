import Hero from "./hero/hero";
import AllRecep from "./allRecepes/allRecepes";
import SeasonalOffers from "./seasonalOffers/seasonalOffers";
import Posts from "./posts/posts";
import FilterContainer from "./filter/filterContainer";

const MainPage = (props) => {
    return (
        <div>
            <Hero state={props.store.getState().mainPage.hero}/>
            <FilterContainer store = {props.store}/>
            <AllRecep state={props.store.getState().catalog}/>
            <SeasonalOffers state={props.store.getState().catalog}/>
            <Posts state={props.store.getState().mainPage.posts}/>
        </div>
    )
}

export default MainPage;

/*
dispatch ={props.dispatch} state = {props.state.filter}*/
