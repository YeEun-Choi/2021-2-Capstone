
import { useEffect, useState } from 'react';
import Container from '../../client/components/layout'
import * as UI from '@mui/material'
import { Game } from '../components/Game';

const Home = () => {

    const [date, setDate] = useState<Date>(new Date());
    const handleRestart = () => {
        setDate(new Date());
    };

    return (
        <Container>
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
                    <UI.Button variant={'outlined'} sx={{
                        mb: 2,
                        border: '1px solid #776e65',
                        color: '#776e65',
                        '&:hover': {
                            color: '#fff',
                            bgcolor: "#776e65",
                            border: '1px solid #776e65',
                        }
                    }} onClick={handleRestart}>재시작</UI.Button>

                </UI.Box>
                <UI.Box sx={{
                    textAlign: 'left',
                    '& li': {
                        fontSize: '20px'
                    }
                }}>
                    <UI.Typography component={'h2'} sx={{
                        fontSize: '24px',
                        fontWeight: '500'
                    }}>조작방법</UI.Typography>
                    <ul>
                        <li>키보드 방향키 (⬆️ ⬇️ ⬅️ ➡️) 를 사용합니다 </li>
                        <li>4*4 판이 전부 차면 실패입니다</li>
                        <li>모바일 대응되지 않습니다</li>
                    </ul>
                </UI.Box>
                <UI.Box sx={{
                    transform: 'translateX(-50px)',
                    width: '100%',
                    height: 600,
                }}>
                    <Game key={date.toISOString()} />
                </UI.Box>
            </UI.Box>
        </Container >
    );
}


export default Home;