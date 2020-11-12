import React from "react";
import Grid from "./grid";
import Griddata from "./gridData";

function List() {
  const gridComponents = Griddata.map((grid) => (
    <Grid key={grid.id} grid={grid} />
  ));

  return (
    <div className="box4">
      <h3 className="yellowtitle" id="community">
        COMMUNITY
      </h3>
      {gridComponents}
    </div>
  );
}

export default List;
