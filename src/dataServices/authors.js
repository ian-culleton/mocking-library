export function getAllAuthors() {
  return fetch('/authors')
  .then(resp => { 
    if(resp.status === 501) throw new Error('server returned status code 501')
    return resp;
  })
  .then(resp => resp.json());
}

