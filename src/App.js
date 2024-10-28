import "./style/list.css"

function App() {

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>your ToDo List</p>
      </header>
      <main className="App-main">
        <ul className="ListArea"></ul>
        <form className="ControlArea"  onSubmit={handleSubmit}>
          <input type="text"></input>
          <input type="Submit" value="Submit"></input>
        </form>
      </main>
    </div>
  );
}

export default App;
