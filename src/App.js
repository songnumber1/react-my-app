import { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import Layout from './layout/Layout';
import { Route, Routes } from 'react-router-dom';
import CounterPage from './page/CounterPage';
import AxoisPage from './page/AxoisPage';
import HomePage from './page/HomePage';
import { Interceptor } from './config/interceptor';

import { useSelector } from 'react-redux';
import Loading from './components/Loading';

function App() {
  const isLoading = useSelector(state => state.loading.isLoading);

  return (
    <>
      <Interceptor>
        <Suspense fallback={<Loading loading={isLoading} />}>
          <Layout>
            <Container style={{ marginTop: '20px' }}>
              <Routes>
                <Route path="/" exact={true} element={<HomePage />} />
                <Route path="/counter" element={<CounterPage />} />
                <Route path="/axois" element={<AxoisPage />} />
              </Routes>
            </Container>
          </Layout>
        </Suspense>
      </Interceptor>
      <Loading loading={isLoading} />
    </>
  );
}

export default App;
