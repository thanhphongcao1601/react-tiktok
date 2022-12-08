import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from './routes';
import { DefaultLayout } from './components/Layout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            //default
            let Layout = DefaultLayout;
            let Page = <Layout>{route.component}</Layout>;
            //change new layout if exist
            if (route.layout){
              Layout = route.layout;
              Page = <Layout>{route.component}</Layout>;
            }
            return <Route key={index} path={route.path} element={Page} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
