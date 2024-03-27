import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/page" element={<Page />} />
            </Routes>

            <ul>
                <li>
                    <Link to="/">Главная </Link>
                </li>
                <li>
                    <Link to="/page">Другая страница </Link>
                </li>
            </ul>
        </div>
    );
}

function Home() {
    return <h1>Главная страница</h1>;
}
function Page() {
    return <h1>Новая страница</h1>;
}
export default App;
