import * as UI from '@mui/material';
import React, { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { usePrevProps } from "../../hooks/usePrevProps";
import { useBoard } from "../Board";

type Props = {
    // tile value - 2, 4, 8, 16, 32, ..., 2048.∂
    value: number;
    position: [number, number];
    zIndex: number;
};

export const Tile = ({ value, position, zIndex }: Props) => {
    const [containerWidth, tileCount] = useBoard();
    const [scale, setScale] = useState(1);

    const previousValue = usePrevProps<number>(value);

    const withinBoardBoundaries =
        position[0] < tileCount && position[1] < tileCount;
    invariant(withinBoardBoundaries, "Tile out of bound");

    const isNew = previousValue === undefined;
    const hasChanged = previousValue !== value;
    const shallHighlight = isNew || hasChanged;

    useEffect(() => {
        if (shallHighlight) {
            setScale(1.1);
            setTimeout(() => setScale(1), 100);
        }
    }, [shallHighlight, scale]);

    const positionToPixels = (position: number) => {
        return (position / tileCount) * (containerWidth as number);
    };

    const style = {
        top: positionToPixels(position[1]),
        left: positionToPixels(position[0]),
        transform: `scale(${scale})`,
        zIndex,
    };

    return (
        <UI.Box sx={{
            position: 'absolute',
            width: 8 * 12.5,
            height: 8 * 12.5,
            margin: 8 * 1,
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: '48px',
            lineHeight: 2.1,
            transitionProperty: 'left, top, transform',
            transitionDuration: '250ms, 250ms, 100ms',
            transform: 'scale(1)',
            '& div': {
                borderRadius: 8 * 0.5,
            }
        }} style={style} >
            {(value === 2 || value === 4) && <UI.Box sx={{ backgroundColor: '#eee4da', color: '#776e65' }}>{value}</UI.Box>}
            {value === 8 && <UI.Box sx={{ bgcolor: '#ede0c8' }}>{value}</UI.Box>}
            {value === 16 && <UI.Box sx={{ bgcolor: '#f2b179' }}>{value}</UI.Box>}
            {value === 32 && <UI.Box sx={{ bgcolor: '#f59563', color: '#fff' }}>{value}</UI.Box>}
            {value === 64 && <UI.Box sx={{ bgcolor: '#f67c5f', color: '#fff' }}>{value}</UI.Box>}
            {value === 128 && <UI.Box sx={{ bgcolor: '#f65e3b', color: '#fff' }}>{value}</UI.Box>}
            {value === 256 && <UI.Box sx={{ bgcolor: '#edcf72' }}>{value}</UI.Box>}
            {value === 512 && <UI.Box sx={{ bgcolor: '#edc850' }}>{value}</UI.Box>}
            {value === 1024 && <UI.Box sx={{ bgcolor: '#edc53f' }}>{value}</UI.Box>}
            {value === 2048 && <UI.Box sx={{ bgcolor: '#edc22e' }}>{value}</UI.Box>}
        </UI.Box >
    );
};
