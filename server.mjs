import express from 'express';
import cors from 'cors';
import path from 'path';
const __dirname = path.resolve();

import authRouter from './routes/auth.mjs'
import commentRouter from './routes/comment.mjs'
import feedRouter from './routes/feed.mjs'
import postRouter from './routes/post.mjs'


app.use(express.static(path.join(__dirname, './web/build')))


const app = express();
app.use(express.json()); // body parser
app.use(cors())

// /api/v1/login
app.use("/api/v1", authRouter)

app.use((req, res, next) => { // JWT
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.status(401).send({ message: "invalid token" })
    }
})

app.use("/api/v1", postRouter) // Secure api




const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})