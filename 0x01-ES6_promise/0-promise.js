function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    resolve('Response from API');
    reject(new Error('Failed to fetch data from API'));
  });
}

export default getResponseFromAPI;
