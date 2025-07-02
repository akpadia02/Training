//setTimeOut is asyncronous function webapi
//js is single threaded run time so how setTimeout is working? (web apis extra feature) (setTimeout is method given by browser not js it is web api)
//nodejs makes use of asyncronous loop.
//excuetion of setTimeout is taken care by browser
//setTimeout comes out of call stack immediatedly and browser(webapi) handles it and when timer finishes there is queue called task queue so its put here (callBackQueue)
//condition is call stack should be empty and then queue will be deque 
//webapi dont works for nodejs
//there is small listener which checks if stack is empty

//all this is event loop (js exceution model) (mdn web docs read)
console.log("Started");
setTimeout(function(){ 
    console.log("Printed after 2 sec");
},2000);
console.log("Ended");

//Started
//Ended
//Printed after 2 sec


//if timer is 0 output is same
