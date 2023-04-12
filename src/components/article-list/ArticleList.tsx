import React from 'react';
import Article from "../article/Article";
import {useAppSelector} from "../../hooks";

import classNames from 'classnames/bind';
import styles from './ArticleList.scss'


const cn = classNames.bind(styles)

const ArticleList: React.FC = () => {

    const {articles,pin} = useAppSelector(state => state.articles);

    return (
        <div className={cn('container-list')}>
            {articles.length > 0 ? (
                <>
                    {<div className={cn('article-list-home')}>
                        {articles
                            .filter((a) => a.id !== pin?.id)
                            .map((article) => (
                                    <Article key={article.id} article={article}/>
                            ))}
                    </div>}
                </>
            ) : (
                <div className={cn('no-articles-found')}>No articles found.</div>
            )}
        </div>
    )
};

export default ArticleList;
