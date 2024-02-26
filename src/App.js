import { Container } from 'react-bootstrap';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './page/CounterPage';
import AxoisPage from './page/AxoisPage';
import HomePage from './page/HomePage';
import { Interceptor } from './config/interceptor';

function App() {
  return (
    <Interceptor>
      <Layout>
        <Container style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/axois" element={<AxoisPage />} />
          </Routes>
        </Container>
      </Layout>
    </Interceptor>
  );
}

export default App;
