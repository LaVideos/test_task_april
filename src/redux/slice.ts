import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticleInterface} from "../types/types";

interface ArticlesState {
    articles: ArticleInterface[];
    search:ArticleInterface|undefined;
    pin:ArticleInterface|undefined

}

const initialState: ArticlesState = {
    articles: [],
    search: undefined,
    pin:undefined
};


const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        addArticle(state, action: PayloadAction<ArticleInterface>) {
            state.articles.push(action.payload);
        },
        removeArticle(state, action: PayloadAction<string|number>) {
            state.articles = state.articles.filter((article: ArticleInterface) => article.id !== action.payload);
            if (state.pin&&state.pin.id === action.payload) {
                state.pin = undefined;
            }
        },
        pinArticle(state, action: PayloadAction<ArticleInterface>) {
            state.pin = action.payload;
        },
        unpinArticle(state) {
            state.pin = undefined;
        },
        searchUserArticles(state,action:PayloadAction<string>){
            state.search = state.articles.find((article)=>article.title===action.payload||article.description===action.payload);
        }
    }
});

export const { addArticle, removeArticle, pinArticle, unpinArticle,searchUserArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
