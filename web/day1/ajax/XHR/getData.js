function GetData(callback){
    //AJAZ LOGIC for fetching data
    var xmlHttpReq=new XMLHttpRequest(); //not in node as no broweser environment
    xmlHttpReq.open("GET","https://jsonplaceholder.typicode.com/posts"); //url where data is gonna come (https://jsonplaceholder.typicode.com/) JSON(KEY VALUE PAIR LIGHT WEIGHT KEY"")(JS Object notation)
    // The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in.An XHR client exists in one of the following states:
    //0	UNSENT	Client has been created. open() not called yet.
	//1 OPENED	open() has been called.
	//2 HEADERS_RECEIVED	send() has been called, and headers and status are available.
	//3 LOADING	Downloading; responseText holds partial data.
	//4 DONE	The operation is complete.

    xmlHttpReq.onreadystatechange=function(){ //event browser invokes it //ready state is property which browser keeps tracks of //registered only 
        if(xmlHttpReq.readyState===4 && xmlHttpReq.status===200){
            // console.log(xmlHttpReq.responseText);
            //DOM MANIPULATION (if written here then it becomes dependent)
            // return xmlHttpReq.responseText; //no use as it returned early with undefine (stack call)
            callback(xmlHttpReq.responseText);
        }else if(xmlHttpReq.readyState===4 && xmlHttpReq.status!==200){
            callback();
        }
    }
    xmlHttpReq.send();//actaully places the async call 

}

//all aysncronous logic is handled my promise