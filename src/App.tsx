import {Route, Routes} from 'react-router-dom';

import './App.scss';
import {NewsPage} from "./pages/News";
import HomePage from "./pages/Home";
import Header from "./components/Header/Header";

import classNames from 'classnames/bind';
import styles from './App.scss';

const cn = classNames.bind(styles);

function App() {
    return (
        <div className={cn('app')}>
            <Header />
            <Routes>
                <Route path="/news" element={<NewsPage/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </div>
    );
}

export default App;
