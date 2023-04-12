import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ArticleInterface} from "../types/types";
import {newsService} from "../services/newsService";

interface ArticlesState {
    articles: ArticleInterface[];
    search:ArticleInterface|undefined;
    pin:ArticleInterface|undefined;
    news:ArticleInterface[],
    status:string,
    error:null|string|undefined

}

const initialState: ArticlesState = {
    error: undefined,
    news: [],
    status: "",
    articles: [],
    search: undefined,
    pin:undefined
};

const getNews = createAsyncThunk('news/getNews', async (page: number) => {
    const response = await newsService.getNews(page);
    return response.data.articles;
});

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNews.pending, (state) => {
            state.status = 'loading';})

            .addCase(getNews.fulfilled, (state, action) => {
                state.status = 'succeeded';

                const newArticles = [...state.news, ...action.payload].filter((article: ArticleInterface, index: number, array: ArticleInterface[]) => {
                    return index === array.findIndex(a => a.title === article.title);
                });

                state.news = newArticles

            })

            .addCase(getNews.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;});
    },
});

export const { addArticle, removeArticle, pinArticle, unpinArticle,searchUserArticles } = articlesSlice.actions;
export {getNews}
export default articlesSlice.reducer;
