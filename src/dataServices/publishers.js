export function getAllPublishers() {
  return fetch(`${process.env.REACT_APP_SERVER_URL}/publishers`)
  .then(resp => { 
    if(resp.status === 501) throw new Error('server returned status code 501')
    return resp;
  })
  .then(resp => resp.json());
}

