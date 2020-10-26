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
            para.style.backgroundColor = '#ffffff';   //rgba(31, 145, 238, 0.726)
            para.style.boxShadow = '0 4px 8px 0 rgba(0,0,0,0.2)'; 
            para.style.borderRadius = '1em';
            para.style.marginBottom = '0.5em';
            para.style.padding = '1em';
            para.style.margin = '0.5em';
            para.style.position = "relative";


            let p = document.createElement("p");  //created new p element
            p.style.backgroundColor = "#7bed9f";
            p.style.padding = '0.25em 0.5em';
            p.style.borderRadius = '1em';
            
            editIcon = document.createElement("i");
            editIcon.className = "editIcon fa fa-pencil-square";    //  
            editIcon.addEventListener("click", function(){editMessage(event,this)},true);
           
            let nodeMsg;
            let i = objectList.length-1;




            let hName = document.createElement("h4");  //created new p element for display name
            hName.style.color = "#2d3436";
            hName.style.padding = '0.25em 0';
            hName.style.borderRadius = '1em';
            hName.style.fontWeight = "bold";


            nodeMsg = document.createTextNode(objectList[i].message);
            para.id = [i];  //Assign a id to div 
                

            para.appendChild(p);
            para.appendChild(hName);
            para.appendChild(nodeMsg);
            para.appendChild(editIcon);
            
    
            let element = document.getElementById("rightCanvas");
            element.appendChild(para);


            document.getElementsByTagName("h4")[i].innerHTML = objectList[i].name;

    }

        

    }else{
        edit = false;
        submitEditedMessage();

    }

    

        
    uppdateTime();
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

        let logTime = objectList[i].time;
        let curentTime = new Date();
        let diff = Math.floor((curentTime - logTime)/1000);  //get time difference in seconds

        if(diff >= 300){
            document.getElementsByTagName("p")[i].innerHTML = "More than 5 minutes ago";
            /* document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>" + "<em>" +"  : More than 5 minutes ago"+"</em>"+ "<br>"+ message; */
        }
        else if(diff >= 180){
            /* document.getElementById(i).childNodes[1].nodeValue = "More than 3 minutes ago"; */
            document.getElementsByTagName("p")[i].innerHTML = "More than 3 minutes ago";
        }
        else if(diff >= 120){
            document.getElementsByTagName("p")[i].innerHTML = "More than 2 minutes ago";
        }
        else if(diff >= 60){
            document.getElementsByTagName("p")[i].innerHTML = "More than 1 minutes ago";
        }
        else if(diff >=0){
            document.getElementsByTagName("p")[i].innerHTML = "Just now";
        }
        else{
            /* document.getElementById(i).childNodes[1].nodeValue = "Long time ago"; */
        }

        

    }
    
    let t = setTimeout(uppdateTime, 60000);  //recall the uppdateTime() function every 60seconds to reset p elements time //just now etc.. 60000ms = 60seconds
}


function editMessage(event){

    edit = true;
    para = event.target.parentNode;   //get the div that clicked 

    let foundObject = objectList.find(obj => parseInt(obj.id) == parseInt(para.id));
    /* console.log(foundObject); */

    if(foundObject){
        console.log("found obj");
        document.querySelector(".name").value = foundObject.name;
        document.querySelector(".message").value = foundObject.message;
    }else{
        console.log("Not found obj");
    }

}


function submitEditedMessage(){

    /* document.getElementById(para.id).childNodes[1].nodeValue = document.querySelector(".name").value; */
    document.getElementsByTagName("h4")[para.id].innerHTML = document.querySelector(".name").value;
    /* document.getElementById(para.id).childNodes[1].nodeValue = today.toLocaleTimeString(); */
    document.getElementById(para.id).childNodes[2].nodeValue = document.querySelector(".message").value;


    //update objectList with newly edited values
    objectList[para.id].name = document.querySelector(".name").value;
    objectList[para.id].message = document.querySelector(".message").value;
    objectList[para.id].time = today;

    document.querySelector(".name").value = "";
    document.querySelector(".message").value = "";
}
