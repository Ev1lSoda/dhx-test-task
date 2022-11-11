import './App.css';
import GridComponent from './GridComponent/GridComponent';
import data from './data.json'
import columns from './columns.json'

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
