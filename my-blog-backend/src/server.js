import express from 'express';
let articlesInfo = [
    {
        name: 'mastering-css-grid',
        upvotes: 0,
        comments: [],
    },
    {
        name: 'javascript-frameworks',
        upvotes: 2,
        comments: [],
    },
    {
        name: 'git-version-control',
        upvotes: 4,
        comments: [],
    },
]

const app = express();
app.use(express.json());

/* app.post('/hello', (req, res) => {
    res.send(`Hello ${req.body.name}!`);
});
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello ${name}!!`)
});
 */
app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    } else {
        res.send('That article doesn\'t exist');
    }
});
app.post('/api/articles/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const article = articlesInfo.find(a => a.name === name);
    if (article) {
        article.comments.push({ postedBy, text });
        res.send(article.comments);
    } else {
        res.send('That article doesn\'t exist!!');
    }
})
app.listen(8000, () => {
    console.log("server listening on port 8000")
});
