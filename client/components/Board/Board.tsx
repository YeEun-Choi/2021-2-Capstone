import React from "react";
import * as UI from '@mui/material';
import { BoardProvider } from "./context/BoardContext";
import { boardMargin, tileCount as defaultTileCount } from "./models/Board";
import { Grid } from "../Grid";
import { TileMeta, tileTotalWidth, Tile } from "../Tile";

type Props = {
    tiles: TileMeta[];
    tileCountPerRow: number;
    score: number;
    setScore: React.Dispatch<React.SetStateAction<number>>;
};

export const Board = ({ score, setScore, tiles, tileCountPerRow = defaultTileCount }: Props) => {
    const containerWidth = tileTotalWidth * tileCountPerRow;
    const boardWidth = containerWidth + boardMargin;

    const tileList = tiles.map(({ id, ...restProps }) => (
        <Tile key={`tile-${id}`} {...restProps} zIndex={id} score={score} setScore={setScore} />
    ));


    return (
        <UI.Box sx={{
            position: 'relative'
        }}>
            <BoardProvider
                containerWidth={containerWidth}
                tileCount={tileCountPerRow}
            >
                <UI.Box sx={{
                    position: 'absolute',
                    zIndex: 2,
                    m: 2,
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                }}>
                    {tileList}
                </UI.Box>
                <Grid />
            </BoardProvider>
        </UI.Box>
    );
};
