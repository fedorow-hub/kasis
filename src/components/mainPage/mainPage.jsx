import Hero from "./hero/hero";
import Filter from "./filter/filter";
import AllRecep from "./allRecepes/allRecepes";
import SeasonalOffers from "./seasonalOffers/seasonalOffers";
import Posts from "./posts/posts";

const MainPage = (props) => {
    return (
        <div>
            <Hero state={props.state.mainPage.hero}/>
            <Filter dispatch ={props.dispatch} dropMenuIngredients = {props.state.dropMenuIngredients} ingredientsForFilter = {props.state.ingredientsForFilter}/>
            <AllRecep state={props.state.mainPage.firstLineRecep}/>
            <SeasonalOffers state={props.state.mainPage.seasonOffers}/>
            <Posts state={props.state.mainPage.posts}/>
        </div>
    )
}

export default MainPage;