import * as UI from '@mui/material';

const Container = ({ children }) => {

    return (
        <UI.Box sx={{
            bgcolor: 'rgb(250, 248, 239)',
            color: '#5E4242',
            height: '100vh',
            width: '100vw',
            position: 'relative',
            // pt: 5
        }}>
            {children}
            <UI.Box sx={{
                transform: 'scaleX(-1)',
                position: 'absolute',
                right: 0,
                bottom: 0,
                '& img': {
                    width: '60%',
                }
            }}>
                <img src="/img/bgTree.png" alt="" />
            </UI.Box>
        </UI.Box >
    )
}

export default Container;