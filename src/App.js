import { Container } from 'react-bootstrap';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './page/CounterPage';
import ApiPage from './page/ApiPage';
import HomePage from './page/HomePage';

function App() {
  return (
    <Layout>
      <Container style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/api" element={<ApiPage />} />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;
