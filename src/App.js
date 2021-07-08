import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button'//Usar el componen de react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'//Estilo desde bootstrap-css
import {Button,Form, Container} from 'react-bootstrap' //importar estos componentes desde bootstrap


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>N o m b r e</Form.Label>
              <Form.Control type="name" placeholder="Ingrese su primero nombre" />
              <Form.Text className="text-muted">
                Importante ingrese su primer nombre, por favors
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>A p e l l i d o</Form.Label>
              <Form.Control type="name" placeholder="Ingrese su primer apellido "/>
              <Form.Text className="text-muted">
                Importante ingrese un apellido, por favor
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Correo Electronico</Form.Label>
              <Form.Control type="email" placeholder="Ejemplo@email.com"/>
              <Form.Text className="text-muted">
                Ingrese un correo electronico
              </Form.Text>
            </Form.Group>
          </Form>
        </Container>
        
        <Button>Boton de enviar</Button>
       
      </header>
    </div>
  );
}

export default App;
