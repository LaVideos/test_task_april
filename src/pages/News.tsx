import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../components/Article/Article";
import { ArticleInterface } from "../types/types";
import classNames from 'classnames/bind';
import styles from './NewsPage.scss'


const cn = classNames.bind(styles)

export const NewsPage = () => {
    const [articles, setArticles] = useState<ArticleInterface[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${page}`, {
                headers: {
                    Authorization: "Bearer 0cfa490c78f14082a0a16a71ac9ad3bf",
                },
            })
            .then((response) => {
                const newArticles = response.data.articles;
                setArticles((prevArticles) => [...prevArticles, ...newArticles]);
            })
            .catch((error) => console.log(error));
    }, [page]);

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <div className={cn('news-page')}>
            <div className={cn('article-list')}>
                {articles.map((article: ArticleInterface, index) => (
                    <Article key={index} article={article} />
                ))}
            </div>
            <div className={cn('load-more-button')}>
                <button onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
};
