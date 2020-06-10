export function test(id) {
    const promise1 = new Promise(function(resolve, reject) {
        let url = `${id}2222222`
          resolve(url);
      });
      
      promise1.then(function(value) {
        console.log(value);
        return value
      });
    return url
}