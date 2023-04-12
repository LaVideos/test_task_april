type Article = {
    id: number;
    image: string;
    author: string;
    description: string;
    title: string;
    pinned: boolean;
    user: string;
};

let articles: Article[] = [
    { id: 1, image: 'https://www.sciencenews.org/wp-content/uploads/2022/11/Hubble-Pillars-of-Creation.jpg', author: 'John Doe', description: 'Lorem ipsum dolor sit amet', title: 'Article 1', pinned: false, user: 'user1' },
    { id: 2, image: 'https://i.etsystatic.com/isla/5287c8/54188139/isla_fullxfull.54188139_qkcgeqx2.jpg?version=0', author: 'Jane Doe', description: 'Consectetur adipiscing elit', title: 'Article 2', pinned: false, user: 'user2' },
    { id: 3, image: 'https://64.media.tumblr.com/118168dcfcdd6a6ac02a103c0a46b777/tumblr_o2pog52QHO1v8esjzo1_640.jpg', author: 'John Smith', description: 'Sed do eiusmod tempor incididunt', title: 'Article 3', pinned: false, user: 'user1' },
];

export function getArticles(): Article[] {
    return articles;
}

export function addArticle(article: { image: string; author: string; description: string; title: string }): void {
    const id = articles.length + 1;
    const user = 'user1';
    const pinned = false;
    articles.push({ ...article, id, user, pinned });
}

export function deleteArticle(id: number): void {
    articles = articles.filter((article) => article.id !== id);
}

export function pinArticle(id: number): void {
    articles.forEach((article) => {
        if (article.id === id) {
            article.pinned = true;
        } else {
            article.pinned = false;
        }
    });
}
