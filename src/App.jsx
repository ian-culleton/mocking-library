import { useState } from 'react';
import APIToggleSwitch from './APIToggleSwitch';
import './App.css';
import LibraryView from './libraryView/LibraryView';
import TestView from './testView/TestView';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { serverContext } from './contexts/serverContext';

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestView></TestView>,
  },
  {
    path: "/",
    element: <LibraryView></LibraryView>,
  },
]);

function App() {
  const [serverState, setServerState] = useState('pending')
  function handleServerToggle(status) {
    setServerState(status)
  }

  return (
    <serverContext.Provider value={serverState}>
      <div className="App">
        <APIToggleSwitch onToggle={handleServerToggle}/>
        <nav>
          <a className="nav-tab" href="/test">TEST</a>
          <a className="nav-tab" href="/">LIBRARY</a>
        </nav>
        <RouterProvider router={router} />
      </div>
    </serverContext.Provider>
  );
}

export default App;
