import { BASE_URL, USE_LOCAL_DATA } from '../common/common';
import jsonData from '../data/data.json';

const fetchData = () => {
  if(USE_LOCAL_DATA) {
    return jsonData.data;
  }

  const fetchedData = fetch(`${BASE_URL}/transactions`)
    .then(response => response.json())
    .then(response => response.data)
    .catch( error => console.log(error));

  return fetchedData;
}

export default fetchData;