import { readDB, writeDB } from "../dbController.js";
import { v4 } from 'uuid';

const getScores = () => readDB('scores');
const setScores = (data) => writeDB('scores', data)

const scoresRoute = [
    {
        method: 'get', //get
        route: '/scores',
        handler: (req, res) => {
            const score = getScores();

            res.send(score);
        }
    },
    {
        method: 'post', //create
        route: '/scores',
        handler: ({ body }, res) => {
            try {
                const typeScore = body.score;
                if (typeScore !== "number") throw Error('score type error')

                const scores = getScores();
                const newScores = {
                    id: v4(),
                    score: Number(body.score),
                    nickName: body.nickName,
                    timestamp: Date.now()
                }

                scores.unshift(newScores);
                setScores(scores)
                res.send(newScores)

            } catch (err) {
                res.status(500).send({ error: err });
                // 500 : Internal Server Error
                // 404 : Not Found
            }
        }
    }
]

export default scoresRoute;