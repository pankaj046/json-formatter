import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Navbar, Nav} from 'react-bootstrap';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [value, setValue] = useState("");
  const onChange = React.useCallback((data, viewUpdate) => {
    if(!isJsonString(data)){
      toast.error('Json is not valid', {
        position: toast.POSITION.TOP_RIGHT
    });
    }else {
      console.log(JSON.stringify(data, undefined,  2))
      setValue(JSON.stringify(JSON.parse(data), undefined,  2))
    }
  }, []);

  function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">JSON Formatter</Navbar.Brand>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    <Container>
      <Row> 
        <CodeMirror style = {{height:"80vh"}}
          value={value}
          height="100%"
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true,
            readOnly: false,
          }}
          extensions={[javascript({ jsx: true })]}
          onChange={onChange}
        />
      </Row>
    </Container>
    <ToastContainer />
    <Footer/>
    </>
  );
}
export default App;