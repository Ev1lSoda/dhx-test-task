import { useEffect, useRef } from 'react';
import useLocalStorage from '../customHooks/UseLocalStorage'
import './GridComponent.css';
import { Grid } from "dhx-grid";

function GridComponent(props) {
  const {columns, data} = props;
  const dhxGridEl = useRef(null);
  const [sortValue, setSortValue] = useLocalStorage('dhx_sort_value');

  useEffect(() => {
    let timer = null;
    const grid = new Grid(dhxGridEl.current, {
      data,
      columns
    });

    grid.events.on('afterSort', (col, dir) => {
      setSortValue({by: col.id, dir})
    })

    if(grid && grid.data && sortValue){
      timer = setTimeout(() => {
        grid.data.sort({
          ...sortValue
        });
      }, 0)
    }

    return () => {
      grid && grid.destructor();
      timer && clearTimeout(timer);
    }
  }, [columns, data]);

  return (
      <div className="main__grid" ref={dhxGridEl}></div>
  );
}

export default GridComponent;
