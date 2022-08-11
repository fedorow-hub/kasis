import './App.css';
import Header from "./components/header/header";
import MainPage from "./components/mainPage/mainPage";
import Footer from "./components/footer/footer";
import {Routes, Route} from "react-router-dom";
import Catalog from "./components/catalog/catalog";
import NotFoundPage from "./components/notFound/notFound";
import Recept from "./components/recept/recept";
import CatalogFilter from "./components/catalog/catalogFilter";
import CatalogFilterByAny from "./components/catalog/catalogFilterByAny";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Routes className="page">
                <Route path='/' element = {<MainPage store = {props.store}/>}/>
                <Route path='catalog' element = {<Catalog store = {props.store}/>}/>
                <Route path='catalog/:filter' element = {<CatalogFilter store = {props.store}/>}/>
                <Route path='catalogFiltred' element = {<CatalogFilterByAny store = {props.store}/>}/>
                <Route path='recept/:id' element = {<Recept store = {props.store}/>}/>
                <Route path='catalog/recept/:id' element = {<Recept store = {props.store}/>}/>

                <Route path='*' element = {<NotFoundPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
