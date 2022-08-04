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
                <Route exact path='/' component={() => <MainPage state={props.state}
                                                                 dispatch ={props.dispatch}/>}/>
                <Route path='/catalog' component={() => <Catalog state={props.state}
                                                                 dispatch ={props.dispatch}/>}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
