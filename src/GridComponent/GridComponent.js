import { useEffect, useRef } from 'react';
import useLocalStorage from '../customHooks/UseLocalStorage'
import './GridComponent.css';
import { Grid } from "dhx-grid";

function GridComponent(props) {
  const {columns, data} = props;
  const dhxGridEl = useRef(null);
  const [sortValue, setSortValue] = useLocalStorage('dhx_sort_value');

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
