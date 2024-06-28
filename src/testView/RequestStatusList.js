import RequestStatus from './RequestStatus'

function RequestStatusList({urls}) {
  return (
    <>
      <h4>Requests</h4>
      <ul className="request-status-list">
        {
          urls && urls.length > 0 ? urls.map(
            url => <li  key={Math.random()}>
              <RequestStatus url={url}></RequestStatus>
            </li>
          ) : "No test files included."
        }
      </ul>
    </>
  )
}

export default RequestStatusList;