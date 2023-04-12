import { useState } from "react";
import { searchUserArticles } from "../../redux/slice";
import {useAppDispatch, useAppSelector} from "../../hooks";
import Article from "../Article/Article";
import classNames from 'classnames/bind';
import styles from './SearchBar.scss'


const cn = classNames.bind(styles)

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [isSearching, setIsSearching] = useState(false);
    const {search} = useAppSelector(state => state.articles);

    const handleSearch = (query: string) => {
        setIsSearching(true);
        dispatch(searchUserArticles(query))
        setIsSearching(false)
    };

    return (
        <div className={cn('container')}>
            <form className={cn('search-bar')} onSubmit={(e) => e.preventDefault()}>
                <span className={cn('input-search-container')}><input type="text" placeholder="Search articles..." onChange={(e) => handleSearch(e.target.value)}/></span>
                <div className={cn('button-search-container')}>
                    <button type="submit" disabled={isSearching}>
                        {isSearching ? "Searching..." : "Search"}
                    </button>
                </div>
            </form>

            <div className={cn('finded-article-container')}>
                <Article article={search}/>
            </div>

        </div>

    );
};

export default SearchBar;
