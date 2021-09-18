import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";
import React from "react";

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
  return (
    <div style={{ height: "100%" }}>
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
