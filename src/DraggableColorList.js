import { SortableContainer } from 'react-sortable-hoc';
import React from 'react';

import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((c, i) => (
        <DraggableColorBox
          index={i}
          key={c.name}
          color={c}
          handleClick={() => deleteColor(c.name)}
        />
      ))}
    </div>
  );
});

export default DraggableColorList;
