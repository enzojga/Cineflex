import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import MainPage from './MainPage';
import MovieSchedules from "./MovieSchedules";
import Section from "./Section";
import '../theme/reset.css'

export default function App(){
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/movieschedules/:movieId" element={<MovieSchedules />} />
                <Route path="/section/:sectionId" element={<Section />} />
            </Routes>
        </BrowserRouter>
    )
}
