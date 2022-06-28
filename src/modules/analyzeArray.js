const analyzeArray = (array) => {
    const add = (analyze, data) => analyze + data
    const sum = array.reduce(add)
    const object = {
      average: sum/array.length,
      min: Math.min(...array),
      max: Math.max(...array),
      length: array.length
    }
    return object;
  }
  
  export default analyzeArray;