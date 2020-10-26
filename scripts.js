let objectList = [];
let editIcon;
let newMessage;
let edit = false;
let today;

document.getElementById("btn").addEventListener("click", submit);

 
function submit(){

    if(!edit){
        
        today = new Date();
        let singleObject = {};
        let name = document.querySelector(".name").value;  //assign textbox values
        let message = document.querySelector(".message").value;

        if(validation(name,message)){
            
            document.querySelector(".name").value = '';  /* clear the input field values */
            document.querySelector(".message").value = '';
            singleObject['id'] = objectList.length; 
            singleObject['name'] = name;
            singleObject['message'] = message;
            singleObject['time'] = today;
            objectList.push(singleObject);
        
            let para = document.createElement("div");   //make the div element dynamically
            para.style.display = 'inline-block';  //style the p element
            para.style.backgroundColor = 'rgba(31, 145, 238, 0.726)';
            para.style.borderRadius = '1em';
            para.style.marginBottom = '0.5em';
            para.style.padding = '1em';
            para.style.position = "relative";
            
            editIcon = document.createElement("i");
            editIcon.className = "editIcon fa fa-pencil-square";
            editIcon.addEventListener("click", function(){editMessage(event,this)},true);
           

            let nodeName;
            let nodeMsg;
            let nodeTime;
            let i = objectList.length-1;

            nodeName = document.createTextNode(objectList[i].name);
            nodeTime = document.createTextNode(objectList[i].time.toLocaleTimeString());
            linebreak = document.createElement("br");
            nodeMsg = document.createTextNode(objectList[i].message);
            para.id = [i];  //Assign a id to div 
                
                

            
            para.appendChild(nodeName);
            para.appendChild(nodeTime);
            para.appendChild(linebreak);
            para.appendChild(nodeMsg);
            para.appendChild(editIcon);
    
            let element = document.getElementById("rightCanvas");
            element.appendChild(para);

    }

        

    }else{
        alert("Edit");
        edit = false;
        submitEditedMessage();

    }

    

        
    /* uppdateTime(); */
}

function validation(name,message){
    
    
        
    if(name == ''){
        document.querySelector(".name").style.backgroundColor = '#e74c3c';
        return false;
    }

    else if(message == ''){
        document.querySelector(".message").style.backgroundColor = '#e74c3c';
        return false;
    }

    else
        return true;
}


function onFocus(id){
    document.querySelector('.'+id).style.backgroundColor = '#ecf0f1';
}

function uppdateTime(){
    
    for(let i=0; i<objectList.length; i++){

        let logTimeMin = objectList[i].time.getMinutes();
        let name = objectList[i].name;
        let message = objectList[i].message;
        let curentTimeMinutes = new Date().getMinutes();

        let diff = curentTimeMinutes - logTimeMin;

        if(diff >= 5){
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>" + "<em>" +"  : More than 5 minutes ago"+"</em>"+ "<br>"+ message;
        }
        else if(diff >= 3){
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>" + "<em>" +"  : More than 3 minutes ago"+"</em>" + "<br>"+ message;
        }
        else if(diff >= 2){
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>" +"<em>" +" : More than 2 minutes ago"+"</em>"+ "<br>"+ message;
        }
        else if(diff >= 1){
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>"+ "<em>" +" : More than 1 minutes ago"+"</em>"+ "<br>"+ message;
        }
        else if(diff >=0){
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>"+ "<em>" +" : just now"+"</em>"+ "<br>"+ message;
        }
        else{
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>"+ "<em>" +" : long time ago"+"</em>"+ "<br>"+ message;
        }

        

    }
    
    let t = setTimeout(uppdateTime, 60000);  //recall the uppdateTime() function every 60seconds to reset p elements time //just now etc.. 60000ms = 60seconds
}


function editMessage(event){
    alert("edit msg");

    edit = true;

    /* edit = true; */  // set the edit true to know if it is edit message or newly created message
    /* alert("inside edit"); */
    para = event.target.parentNode;   //get the div that clicked 

    /* console.log(para.id); */ ////////////////////

   /* para.id === objectList[element].id; */
    /* console.log(para.pId); */

/* if(objectList.id.value === para.id){
    console.log(objectList.id.value);
} */
    let foundObject = objectList.find(obj => parseInt(obj.id) == parseInt(para.id));
    console.log(foundObject);

    if(foundObject){
        console.log("found obj");
        document.querySelector(".name").value = foundObject.name;
        document.querySelector(".message").value = foundObject.message;
        /* document.querySelector(".time").value = foundObject.time; */
    }else{
        console.log("not found obj");
    }


    if(updateObjectList()){
        /* document.getElementById("btn").addEventListener("click", submit); */
        /* alert("Set submit event again"); */
    }


}

function updateObjectList(){
    /* alert("UpdateObject funt"); */

    //after adding edit the msg, add submit eventlistner again to submit button 
    

    /* document.querySelector(".name").value = '';  */ /* clear the input field values */
    /* document.querySelector(".message").value = ''; */

    //update the objectList with new values
}

function submitEditedMessage(){
    /* document.getElementById(para.id).innerHTML = `${document.querySelector(".name").value} ${document.querySelector(".message").value} ${today}`; */
    /* document.getElementById(para.id).innerHTML.name = document.querySelector(".name").value; */
    /* console.log(document.getElementById(para.id).nodeMsg); */

    /* let textNode = document.getElementById(para.id).firstChild; */
    /* let childNodes = document.getElementById(para.id).childNodes; */
    /* console.log(childNodes); */
    /* console.log(document.querySelector(".name").value); */
    //update the edited objects in array
    alert("submitEditedMessage");


    document.getElementById(para.id).childNodes[0].nodeValue = document.querySelector(".name").value;
    document.getElementById(para.id).childNodes[1].nodeValue = today.toLocaleTimeString();
    document.getElementById(para.id).childNodes[3].nodeValue = document.querySelector(".message").value;




//update objectList with newly edited values
    objectList[para.id].name = document.querySelector(".name").value;
    objectList[para.id].message = document.querySelector(".message").value;
    objectList[para.id].time = today;

    document.querySelector(".name").value = "";
    document.querySelector(".message").value = "";

    /* edit = false; */
}


/* objectList[0].name */



/* document.getElementById(1).childNodes[1].nodeValue
"21:52:54"
document.getElementById(1).childNodes[0].nodeValue
"Himansa"
document.getElementById(1).childNodes[2].nodeValue
null
document.getElementById(1).childNodes[3].nodeValue

"22" 

//i icon
document.getElementById(2).lastChild    


*/