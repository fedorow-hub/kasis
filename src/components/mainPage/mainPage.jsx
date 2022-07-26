import Hero from "./hero/hero";
import Filter from "./filter/filter";
import AllRecep from "./allRecepes/allRecepes";
import SeasonalOffers from "./seasonalOffers/seasonalOffers";
import Posts from "./posts/posts";

const MainPage = (props) => {
    return (
        <div>
            <Hero />
            <Filter addRecept={props.addRecept} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
            <AllRecep state={props.state.mainPage.firstLineRecep}/>
            <SeasonalOffers state={props.state.mainPage.seasonOffers}/>
            <Posts state={props.state.mainPage.posts}/>
        </div>
    )
}

export default MainPage;