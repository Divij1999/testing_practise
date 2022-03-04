const analyzeArray = (() => {
    const average = ([...arr]) => {
      return Math.floor(arr.reduce((prev, curr) => prev + curr, arr[0])/arr.length);
        
    };

    const min = ([...arr]) => {
        return arr.reduce((prev, curr) => {
            if (prev > curr) {
                prev = curr;
            }
            return prev;
        }, arr[0]);
    };

    const max = ([...arr]) => {
        return arr.reduce((prev, curr) => {
            if (prev < curr) {
                prev = curr;
            }
            return prev;
        }, arr[0]);
    };
    
    const obj = ([...arr]) => {
       let object = {};
       object.average = average(arr);
       object.min = min(arr);
       object.max = max(arr);
       object.length = arr.length;
       return object;
   };
   return {obj};

})();

export default analyzeArray.obj;