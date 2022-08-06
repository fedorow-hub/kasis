import './App.css';
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import Footer from "./components/footer/footer";
import {Route} from "react-router-dom";
import Catalog from "./components/catalog/catalog";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className="page">
                <Route exact path='/' component={() => <MainPage store = {props.store}/>}/>
                <Route path='/catalog' component={() => <Catalog store = {props.store}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
