import { Container } from 'react-bootstrap';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CounterContainer from './containers/CounterContainer';
import ApiContainer from './containers/ApiContainer';
import Home from './components/Home';

function App() {
  return (
    <Layout>
      <Container style={{ minHeight: '75vh', marginTop: '20px' }}>
        <Routes>
          <Route path="/counter" element={<CounterContainer />} />
          <Route path="/api" element={<ApiContainer />} />
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
