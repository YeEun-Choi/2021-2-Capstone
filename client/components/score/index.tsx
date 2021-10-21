import * as UI from '@mui/material'
import { useEffect, useRef, useState } from "react"
import fetcher from "../../fetcher"

const Score = ({ score }) => {

    const [scores, setScores] = useState([]);
    const getMessages = async () => {
        const newMsgs = await fetcher('get', '/scores')
        setScores(newMsgs);
    }
    useEffect(() => {
        getMessages()
    }, []);

    const onCreate = async (nickname) => {
        const newScore = await fetcher('post', '/scores', { nickname, score });
        setScores(scores => [newScore, ...scores])
    }

    const nicknameRef = useRef(null)

    const onSubmit = e => {
        e.preventDefault()
        e.stopPropagation()
        const nickname = nicknameRef.current.value
        nicknameRef.current.value = ''
        onCreate(nickname)
    }


    return (
        <UI.Box sx={{
            pt: 4,
            pl: 20,
            boxSizing: 'border-box'
        }}>
            <UI.Box sx={{
                zIndex: 100,
                '& textArea': {
                    zIndex: 200,
                    fontSize: 20,
                    width: 150,
                    height: 25,
                    bgcolor: 'transparent',
                    border: 'transparent',
                    resize: 'none',
                    outline: 'none',
                },
                '& button': {
                    fontSize: '20px',
                    bgcolor: '#776e65 !important',
                    color: '#fff !important'
                },
                '& form': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    pb: 5,
                }
            }}>
                <form method="post">
                    <UI.Typography component={'p'} sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}> 닉네임 : </UI.Typography>
                    &nbsp;
                    <UI.Box sx={{
                        borderBottom: '1px solid #5E4242',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <textarea ref={nicknameRef}></textarea>
                    </UI.Box>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    {/* <button type="submit" onClick={onSubmit}>등록</button> */}
                    <UI.Button onClick={onSubmit} sx={{
                        zIndex: 500,
                    }}>등록</UI.Button>
                </form>
            </UI.Box>
            <UI.Box sx={{
                overflow: 'scroll',
                height: 800
            }}>
                {
                    scores.map((score, idx) => {
                        return (
                            <UI.Box sx={{
                                height: 40,
                                pb: 4,
                            }}>
                                <UI.Box>
                                    <p>닉네임 : {score.nickname}</p>
                                    <p>점수 : {score.score}</p>
                                </UI.Box>
                            </UI.Box>
                        )
                    })
                }
            </UI.Box>
        </UI.Box>
    )
}

export default Score;