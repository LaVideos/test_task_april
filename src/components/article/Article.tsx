import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { ArticleInterface} from "../../types/types";
import {pinArticle, removeArticle, unpinArticle} from "../../redux";
import {useLocation} from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './Article.scss'


const cn = classNames.bind(styles)

interface ArticleProp{
    article:ArticleInterface|undefined;
    isPinned?:boolean
}

const Article = ({article,isPinned=false}:ArticleProp) => {
    const dispatch = useDispatch();
    const {pathname} = useLocation();

    const [toggle, setToggle] = useState<boolean>(isPinned);

    const onPinClick = () => {
        if (article){
            dispatch(pinArticle(article));
            setToggle(prevState => !prevState);
        }

        if (toggle)dispatch(unpinArticle())
    };


    return (

        <>
            {article&&
                <div className={cn('article','size')}>
                    <img src={article.urlToImage} alt={article.title} />
                    <div className={cn('article-info')}>
                        <h2>{article.title}</h2>
                        <p>{article.author}</p>
                        <p>{article.description}</p>
                        {pathname!=='/news'&&
                            <>
                                <button onClick={onPinClick}>{toggle ? "unPin" : "Pin"}</button>
                                <button onClick={() => dispatch(removeArticle(article?.id))}>{"Delete"}</button>
                            </>}

                    </div>
                </div>
            }
        </>

    );
};

export default Article;
