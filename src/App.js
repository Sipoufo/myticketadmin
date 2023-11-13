import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RouteManagement from './routes/routeManagement';

function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <RouteManagement />
    </BrowserRouter>
  );
}

export default App;
