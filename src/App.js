import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import View from './components/View';
import AddEdit from './components/AddEdit';
import { Provider } from 'react-redux';
import store from './components/features/store'

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route path="/addContact" element={<AddEdit/>} />
          <Route path="/update/:id" element={<AddEdit/>} />
          <Route path="/view/:id" element={<View/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
