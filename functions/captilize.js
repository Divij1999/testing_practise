const captilize = (str) => {
    if(str!=='') {
        str = str.charAt(0).toUpperCase() + str.substring(1);
    } 
     
    return str;
       
};

export default captilize;