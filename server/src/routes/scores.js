import { readDB, writeDB } from "../dbController.js"
import { v4 } from 'uuid'

const scoresRoute = [
    {
        method: 'get', // get
        routes: '/scores',
        handler: (req, res) => {
            const scores = readDB('scores');
            res.send(scores)
        }
    },
    {
        method: 'post', // create
        routes: '/scores',
        handler: ({ body }, res) => {
            const scores = readDB('scores');
            const newScore = {
                id: v4(),
                timestamp: new Date(),
                nickname: body.nickname,
                score: body.score
            }
            scores.unshift(newScore);
            writeDB('scores', scores)
            res.send(newScore)
        }
    }
]
export default scoresRoute;