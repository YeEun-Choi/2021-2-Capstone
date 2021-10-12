import React from "react";
import * as UI from '@mui/material';
import { useBoard } from "../Board";

export const Grid = () => {
  const [, tileCount] = useBoard();

  const renderGrid = () => {
    const length = tileCount * tileCount;
    const cells = [] as JSX.Element[];

    for (let index = 0; index < length; index += 1) {
      cells.push(<div key={`${index}`} className={`grid-cell`} />);
    }

    return cells;
  };

  return (
    <UI.Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      bgcolor: 'red',
      // border: '1px solid #bbada0',
      borderRadius: 10,
    }}>
      {renderGrid()}
    </UI.Box>
  );
};
