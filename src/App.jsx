import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import styled from 'styled-components';
import * as color from './styles/Colors';
function App() {
  return (

    <PageContainer>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </PageContainer>

  );
}

export default App;

const PageContainer = styled.div`
  background-color: ${color.background};
  
`;
