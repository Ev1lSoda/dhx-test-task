import GridComponent from './GridComponent/GridComponent';

import './App.css';
import "dhx-grid/codebase/grid.min.css";

import data from './jsons/data.json'
import columns from './jsons/columns.json'

function App() {
  return (
    <div className="app">
      <header>
        <h1>DHX-TEST-TASK</h1>
      </header>
      <main>
        <GridComponent data={data} columns={columns} />
      </main>
    </div>
  );
}

export default App;
