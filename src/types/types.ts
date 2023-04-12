export interface ArticleInterface {
    id: number|string;
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    isPinned: boolean;
}

export interface ArticleFormData {
    author: string;
    title: string;
    description: string;
    imageUrl: string;
}

