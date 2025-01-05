import './App.css';

function App(){

let count = 0; 

function handleAdd(){
  count+=1;
  console.log(count);
}
  return(
    <div className='App'>
      <div className = 'box'>
        <p>{count}</p>
        <button onClick = {handleAdd} className = 'add'>Add</button>
        <button className = 'sub'>Sub</button>
      </div>
    </div>
  );
}

export default App;