import express from 'express'
import cors from 'cors'
import scoresRoute from './routes/scores.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(
    cors({
        origin: 'http://localhost:8084',
        credentials: true,
    }),
)

scoresRoute.forEach(({ method, routes, handler }) => {
    app[method](routes, handler)
})

app.listen(8000, () => {
    console.log('server listening on 8000...')
})