type Article = {
    urlToImage: string;
    author: string;
    description: string;
    title: string;
};

let articles: Article[] = [];

export function getNews(): Article[] {
    if (articles.length === 0) {
        const apiKey = '0cfa490c78f14082a0a16a71ac9ad3bf';
        const url = `https://newsapi.org/v2/everything?q=technology&pageSize=10&apiKey=${apiKey}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                articles = data.articles.map((article: any) => ({
                    urlToImage: article.urlToImage,
                    author: article.author,
                    description: article.description,
                    title: article.title,
                }));
            });
    }

    return articles;
}
