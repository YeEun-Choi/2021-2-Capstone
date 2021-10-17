
import * as UI from '@mui/material'
import { useEffect, useRef, useState } from "react"
import fetcher from "../../fetcher"

const ScoreList = () => {

    const [scores, setScores] = useState([]);
    const getMessages = async () => {
        const newMsgs = await fetcher('get', '/scores')
        setScores(newMsgs);
    }
    useEffect(() => {
        getMessages()
    }, []);



    const onCreate = async (nickname, score) => {
        const newScore = await fetcher('post', '/scores', { nickname, score });
        setScores(scores => [newScore, ...scores])
    }

    const nicknameRef = useRef(null)

    const onSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        const nickname = nicknameRef.current.value
        nicknameRef.current.value = ''
        onCreate(nickname, 10)
    }


    return (
        <>
            <UI.Box>
                <form method="post">
                    <textarea ref={nicknameRef}></textarea>
                    <button type="submit" onClick={onSubmit}>등록</button>
                </form>
            </UI.Box>
            <UI.Box>
                {
                    scores.map((score, idx) => {
                        return (
                            <>
                                <p>닉네임 : {score.nickname}</p>
                                <p>점수 : {score.score}</p>
                            </>
                        )
                    })
                }
            </UI.Box>
        </>
    )
}

export default ScoreList;