import './App.css';
import Container from './component/Container';
//Oluşturduğumuz contexti çağırdık
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'




function App() {
  return (
    <div >
      {/* Contexti sarmaladık ve veri göndereceğimiz componenti altına çektik */}
      <ThemeProvider>
        <UserProvider>
          <Container />
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
