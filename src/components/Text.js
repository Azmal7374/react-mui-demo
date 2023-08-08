function callbackFunction(name) {
    console.log("Hello " + name);
  }
  
  
  function outerFunction(callback) {
    let name ="Azmal Gazi";
    callback(name);
  }
  
  
  outerFunction(callbackFunction);
  