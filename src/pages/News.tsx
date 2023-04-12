import {useEffect, useState} from "react";
import Article from "../components/article/Article";
import {ArticleInterface} from "../types/types";
import classNames from 'classnames/bind';
import styles from './NewsPage.scss'
import {useAppDispatch, useAppSelector} from "../hooks";
import {getNews} from "../redux/slice";


const cn = classNames.bind(styles)

export const NewsPage = () => {
    const dispatch = useAppDispatch();
    const {news} = useAppSelector(state => state.articles);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        dispatch(getNews(page))
    },[page])

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <div className={cn('news-page')}>
            <div className={cn('article-list')}>
                {news.map((article: ArticleInterface, index) => (
                    <Article key={index} article={article} />
                ))}
            </div>
            <div className={cn('load-more-button')}>
                <button onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
};
