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
                <Route path="/movieschedules/:movieId" element={<MovieSchedules />} />
                <Route path="/section/:sectionId" element={<Section/>} />
                <Route path="/success/" element={<Success />} />
            </Routes>
        </BrowserRouter>
    )
}
