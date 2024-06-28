import { useEffect, useState } from "react";
import "./APIToggleSwitch.css"
import Spinner from './testView/Spinner'

function APIToggleSwitch({onToggle}) {

  const [serverState, setServerState] = useState('pending')

  function updateServerStatus() {
    setServerState('pending') 
    return fetch('/serverStatus')
    .then(raw => raw.json())
    .then(data => {
      setServerState(data.server_status) 
    })
  }
  useEffect(() => {
    updateServerStatus()
  }, [])

  function handleToggle() {
    fetch('/toggleShutdown')
    .then(raw => raw.json())
    .then((resp) => {
      updateServerStatus()
      .then(() => { onToggle(serverState) })
    })
  }
  return (
    <div className="switch-container">
      <h2>Turn off the server: </h2>
      {
        serverState === 'pending' ?
        <Spinner /> :
        <label className="switch">
          <input 
            checked={serverState === "up" ? true : false} 
            onChange={() => handleToggle()} 
            type="checkbox" 
          />
          <span className="slider round"></span>
        </label>
      }
    </div>
  )
}

export default APIToggleSwitch;