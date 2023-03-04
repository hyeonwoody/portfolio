import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';
import * as color from './styles/Colors';

function App() {
  return (

    <Container>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </Container>

  );
}
export default App;

const Container = styled.div`
  background-color: ${color.background};
  
  font-family: 'Kotra';
`;
