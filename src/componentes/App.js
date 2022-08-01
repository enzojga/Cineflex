import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Menu from './Menu';
import MainPage from './MainPage';
import MovieSchedules from "./MovieSchedules";
import Section from "./Section";
import Success from "./Success";
import '../theme/reset.css'

export default function App(){


    return(
        <BrowserRouter >
            <Menu/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/sessoes/:idFilme" element={<MovieSchedules />} />
                <Route path="/assentos/:idSessao" element={<Section/>} />
                <Route path="/sucesso" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}
