import React from "react";
import * as UI from '@mui/material';
import { BoardProvider } from "./context/BoardContext";
import { boardMargin, tileCount as defaultTileCount } from "./models/Board";
import { Grid } from "../Grid";
import { TileMeta, tileTotalWidth, Tile } from "../Tile";

type Props = {
    tiles: TileMeta[];
    tileCountPerRow: number;
};

export const Board = ({ tiles, tileCountPerRow = defaultTileCount }: Props) => {
    const containerWidth = tileTotalWidth * tileCountPerRow;
    const boardWidth = containerWidth + boardMargin;

    const tileList = tiles.map(({ id, ...restProps }) => (
        <Tile key={`tile-${id}`} {...restProps} zIndex={id} />
    ));

    return (
        <>
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

        </>
    );
};
