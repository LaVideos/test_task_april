import {addArticle, pinArticle, removeArticle,unpinArticle} from './slice'
import articlesSlice from './slice'
import {setupStore,setup,RootState,AppDispatch} from './store'

export type {setup,RootState,AppDispatch}
export {addArticle,pinArticle,articlesSlice,removeArticle,setupStore,unpinArticle}
