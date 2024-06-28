import './TestView.css';
import RequestStatusList from './RequestStatusList';
import { useContext, useEffect, useState } from 'react';
import { serverContext } from '../contexts/serverContext';

function TestView() {

  const serverState = useContext(serverContext);

  const calls = [
    'dataServices/books.test.js',
    'dataServices/authors.test.js',
    'dataServices/publishers.test.js'
  ].map((file) => "specRunner/" + file.replace('/', '%2F'));
  
  
  const [endpoints, setEndpoints] = useState(calls);

  useEffect(() => {
    setEndpoints([...endpoints])
  }, [serverState])

  return (
    <div className="App">
      <RequestStatusList urls={endpoints} />
    </div>
  );
}

export default TestView;
