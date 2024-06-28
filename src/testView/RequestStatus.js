import { useState, useEffect } from "react"
import "./RequestStatus.css";
function RequestStatus({url}) {

  const [status, setStatus] = useState('pending');
  const [responseDisplay, setResponseDisplay] = useState("");

  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then((resp) => {
      if(resp.passed) setStatus('success')
      else setStatus('failed')
      if(resp.stdout) setResponseDisplay(resp.stdout);
      else if (resp.stderr) setResponseDisplay(resp.stderr);
    })
    .catch(
      (resp) => setStatus('failed')
    )
  }, [])

  return (
    <details className={'request-status ' + status }>
      <summary> {url} - {status}  </summary>
      <div className="request-status-output">
        {
          responseDisplay
          .split('\n')
          .map(line => <p key={line + Math.random()}>{line}</p>)
        }
      </div>
    </details>
  )
}

export default RequestStatus