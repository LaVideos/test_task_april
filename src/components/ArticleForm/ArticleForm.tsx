import React  from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {ArticleFormData} from "../../types/types";
import {addArticle} from "../../redux";
import classNames from 'classnames/bind';
import styles from './ArticleForm.scss'


const cn = classNames.bind(styles)


const ArticleForm = ( ) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<ArticleFormData>();

    const onSubmit = (data: ArticleFormData) => {
        const newArticle = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            author: data.author,
            urlToImage: data.imageUrl,
            isPinned:false

        };
        dispatch(addArticle(newArticle));
    };

    return (
        <form className={cn('form-container')} onSubmit={handleSubmit(onSubmit)}>
            <span className={cn('input-container')}>
                <input placeholder={'Title'} type="text" id="title" {...register('title', {required: true})} /></span>

            <span className={cn('input-container')}>
                <input placeholder={'Description'} type="text" id="description" {...register('description', {required: true})} /></span>

            <span className={cn('input-container')}>
                <input placeholder={'Author'} type="text" id="author" {...register('author', {required: true})} /></span>

            <span className={cn('input-container')}>
                <input placeholder={'Image URL'} type="text" id="imageUrl" {...register('imageUrl', {required: true})} /></span>

            <div className={cn('btn-container')}>
                <button type="submit">Add article</button>
            </div>
        </form>
    );
};

export default ArticleForm;
