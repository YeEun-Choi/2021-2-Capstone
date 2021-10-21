
import { useEffect, useState } from 'react';
import Container from '../../client/components/layout'
import * as UI from '@mui/material'
import { Game } from '../components/Game';
import fetcher from "../fetcher"
import Score from '../components/score';

const Home = () => {

    const [date, setDate] = useState<Date>(new Date());
    const handleRestart = () => {
        setDate(new Date());
        setScore(-2);
    };

    const [score, setScore] = useState<number>(-2);

    const Button = ({ text, onClick }) => {
        return (

            <UI.Button variant={'outlined'} sx={{
                mb: 2,
                border: '1px solid #776e65',
                color: '#776e65',
                '&:hover': {
                    color: '#fff',
                    bgcolor: "#776e65",
                    border: '1px solid #776e65',
                }
            }} onClick={onClick}>{text}</UI.Button>
        )
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onCreate = async (nickName) => {
        const newScore = await fetcher('post', '/scores', { nickName, score })
        if (!newScore) return Error('onCreate wrong')
    }

    return (
        <Container>
            <UI.Grid container>
                <UI.Grid item xs={6}>

                    <UI.Box sx={{
                        '& button': {
                            fontSize: '20px',
                            color: '#776e65',
                        },
                        margin: '0 auto',
                        maxWidth: 500,
                        textAlign: 'center',
                    }}>
                        <UI.Box sx={{
                            pt: 5,
                        }}>
                            <UI.Typography component={'h1'} sx={{
                                fontSize: 30,
                                fontWeight: 600,
                                mb: 3,
                            }}>2048 게임</UI.Typography>
                            <UI.Button onClick={handleRestart} sx={{
                                zIndex: 500,
                                bgcolor: '#776e65 !important',
                                color: '#fff !important'
                            }}>재시작</UI.Button>
                        </UI.Box>
                        <UI.Box sx={{
                            textAlign: 'left',
                            '& li': {
                                fontSize: '20px',
                            }
                        }}>
                            <UI.Typography component={'h2'} sx={{
                                fontSize: '24px',
                                fontWeight: '500'
                            }}>조작방법</UI.Typography>
                            <ul>
                                <li>키보드 방향키 (⬆️ ⬇️ ⬅️ ➡️) 를 사용합니다 </li>
                                <li>더 이상 진행이 불가능 할 시 점수를 기록할 수 있습니다</li>
                                <li>모바일을 지원하지 않습니다</li>
                            </ul>
                        </UI.Box>
                        <UI.Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <UI.Typography component={'h2'} sx={{
                                fontSize: '24px',
                                fontWeight: '500',
                            }}>
                                점수 : {score}
                            </UI.Typography>

                            {/* <Button text={'점수 기록'} onClick={handleOpen} /> */}
                        </UI.Box>
                        <UI.Box sx={{
                            transform: 'translateX(-50px)',
                            width: '100%',
                            height: 600,
                        }}>
                            <Game key={date.toISOString()} score={score} setScore={setScore} />
                        </UI.Box>
                    </UI.Box>
                </UI.Grid>
                <UI.Grid item xs={6}>
                    <Score score={score} />
                </UI.Grid>
            </UI.Grid>
        </Container >
    );
}


export default Home;