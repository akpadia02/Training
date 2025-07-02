function GetData(){
    //return a Promise
    //inside promise is executor and aync task
    return new Promise(function(resolve,reject){
        var xmlHttpReq=new XMLHttpRequest(); 
        xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts"); 

        xmlHttpReq.onreadystatechange=function(){ 
            if(xmlHttpReq.readyState===4 && xmlHttpReq.status===200){
                resolve(xmlHttpReq.responseText);
            }else if(xmlHttpReq.readyState===4 && xmlHttpReq.status!==200){
                reject("Error: "+xmlHttpReq.status);
            }
        }
        xmlHttpReq.send();
    }); 
}

function f(){
    return new Promise(function(){
        setTimeout(function(){
            resolve("Success");
        },2000);
    });
}

//why resolve and reject and we never created a promise (axios will do it)
