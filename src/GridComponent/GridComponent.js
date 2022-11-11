import { useEffect, useRef } from 'react';
import './GridComponent.css';
import { Grid } from "dhx-grid";

function GridComponent(props) {
  const {columns, data} = props;
  const dhxGridEl = useRef(null);

  useEffect(() => { 
    const grid = new Grid(dhxGridEl.current, {
      data,
      columns
    });

    return () => {
      grid && grid.destructor();
    }
  }, [columns, data, dhxGridEl]);

  return (
      <div className="main__grid" ref={dhxGridEl}></div>
  );
}

export default GridComponent;
