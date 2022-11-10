import {  RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import router from './Router/Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-lg mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </div>
  );
}

export default App;
