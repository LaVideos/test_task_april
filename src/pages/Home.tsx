import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ArticleList from "../components/ArticleList/ArticleList";
import ArticleForm from "../components/ArticleForm/ArticleForm";
import {useAppSelector} from "../hooks";
import Article from "../components/Article/Article";

import classNames from 'classnames/bind';
import styles from './HomePage.scss'
import SearchBar from "../components/SearchBar/SearchBar";


const cn = classNames.bind(styles)

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    let {pin} = useAppSelector(state => state.articles);
    useEffect(() => {

    }, [dispatch]);

    return (
        <div className={cn('container')}>
            <SearchBar/>
            <ArticleForm/>
            <div className={cn('pinned-container')}>
                {pin && (
                    <>
                        <h5 className={cn('pinned-article-title')}>Pinned Article:</h5>
                        <div className={cn('pinned-article-container')}><Article article={pin} isPinned={true}/></div>
                    </>
                )}
            </div>
            <div className={cn('data-container')}>
                <h1 className={cn('article-list-title')}>Article List</h1>
                <ArticleList/>
            </div>
        </div>
    );
};

export default HomePage;
