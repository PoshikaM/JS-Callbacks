const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};


// Progression 1: create a function to get all the cookies

function getCookies(){
  setTimeout(function(){
    cookies.forEach(function(element, index){
      console.log("callback",element)
    })
  },1000)
}

  // Progression 2: using setTimeout() 

//Progression 3: Create a function to creat cookies

function createCookies(callBackFunction){
  setTimeout(function(){
    cookies.push(newCookie);
    callBackFunction();
  }, 2000)
}

// Progression 4: calling function
createCookies(getCookies);