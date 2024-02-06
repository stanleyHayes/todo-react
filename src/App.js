import './App.css';
import {lazy} from "react";
import {Route, Routes} from "react-router";

const HomePage = lazy(() => import("./pages/index/home-page"));

function App() {
    return (
        <Routes>
            <Route index={true} path="/" element={ <HomePage/>} />
        </Routes>
    );
}

export default App;
