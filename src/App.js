import React, {useEffect, useState} from 'react';
import './scss/app.scss'
import { Header, } from './components';
import {Home, Cart} from "./pages";
import {Route, Routes} from "react-router-dom";
import axios from "axios";


function App () {
    const [pizzas, setPizzas] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/db.json')
            .then(({data}) => {
                setPizzas(data[pizzas])
            })
       },[])

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home items={pizzas}/>} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
