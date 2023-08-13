import { Provider } from 'react-redux';
import './App.css';
import Base from './Base';
import Store from './Features/Store';

function App() {
  return (
    <div>
      <Provider store={Store}>
        <Base />
      </Provider>
    </div>
  );
}

export default App;
