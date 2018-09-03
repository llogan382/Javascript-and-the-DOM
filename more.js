



  
  function exec(func, arg) { //this function requires a function and a variabel
    func(arg)
  };


  exec((something) => { // an anonymous funciton
      console.log(something);
  }, "Greetings, everyone!");