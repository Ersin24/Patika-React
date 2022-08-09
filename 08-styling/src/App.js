import './App.css';
import A from './components/A'
import B from './components/B'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ "color": "red", "backgroundColor": "GrayText", "paddingTop": "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus corporis quo voluptate distinctio quis doloremque temporibus molestias aspernatur neque possimus? Nemo dignissimos quaerat saepe sequi quam voluptatibus, corporis dolorum delectus?
        </p>
        <p className='bg-danger'>
          atus corporis quo voluptate distinctio quis doloremque temporibus molestias aspernatur nequ
        </p>
        <span className="badge bg-success">Success</span>
        <div>
          <A />
          <B />
        </div>
      </header>

    </div>
  );
}

export default App;
