import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import { ConsentGate, ConfirmicProvider } from '@confirmic/react'


function App() {

  useEffect(() => {
    setTimeout(() => {
      document.cookie = new Date().toString()
    }, 5000)
  })
  return (
      <ConfirmicProvider projectId="prj:f5a2b96a-2e75-4a62-a93f-74e55c43c3b0">
        <>
          <ConsentGate
              micropolicy="https://github.com/confirmic/react-confirmic"
              placeholder="/my-placeholder.html"
              placeholderParams={{
                color: 'blue',
                position: 'left',
              }}
          >
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </ConsentGate>

          <div className='otherContent'/>
          </>
      </ConfirmicProvider>

  );
}

export default App;
