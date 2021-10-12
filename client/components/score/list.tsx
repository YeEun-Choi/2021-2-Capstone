import { useEffect, useState } from "react"
import ScoreInput from "./input"
import fetcher from "../../fetcher"
import * as UI from '@mui/material'

const ScoreItem = ({
    id,
    nickName,
    timestamp,
    score
}) => {
    let date = () => {
        return new Date(timestamp).toLocaleString('ko-KR', {
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }
    let current = date()
    return (
        <>
            <UI.Paper elevation={1} sx={{
                width: 500,
                mb: 2,
                p: 2
            }}>
                <UI.Typography component={'p'}>{nickName}</UI.Typography>
                <sub>{date()}</sub>
                <UI.Typography component={'p'}>{score}</UI.Typography>
            </UI.Paper>
        </>
    )
}

const ScoreList = () => {

    const [scores, setScores] = useState([])
    const getScores = async () => {
        const score = await fetcher('get', '/scores');
        setScores(score)
    }

    useEffect(() => {
        getScores()
    }, [])

    const onCreate = async (nickName, score) => {
        const newScore = await fetcher('post', '/scores', { nickName, score })
        if (!newScore) return Error('onCreate wrong')
        setScores(scores => [newScore, ...scores])
    }

    return (
        <UI.Box sx={{

        }}>
            <ScoreInput mutate={onCreate} />
            {
                scores.map((data, index) => {
                    return (
                        <ScoreItem key={data.id}
                            {...data}
                        />
                    )
                })
            }
        </UI.Box>
    )
}

export default ScoreList;