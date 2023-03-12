import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Nav.Link href="/">
            <Navbar.Brand>Alchemist Capitol</Navbar.Brand>
          </Nav.Link>
        </Container>
      </Navbar>
      <header className="App-header">
        <a href="/">Alchemist Capitol</a>
      </header>
      <main>List properties</main>
    </div>
  );
}

export default App;
