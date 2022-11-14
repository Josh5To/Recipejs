import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './Main'
import { Container } from 'react-bootstrap';
import Header from './Header';

function App() {
  return (
      <Container>
        <Header/>
        <Main/>
      </Container>
  );
}

export default App;
