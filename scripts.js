let objectList = [];



function submit(){

        let today = new Date();
        let singleObject = {};
        let name = document.querySelector(".name").value;  //assign textbox values
        let message = document.querySelector(".message").value;

    if(validation(name,message)){

        document.querySelector(".name").value = '';  /* clear the input field values */
        document.querySelector(".message").value = '';
        singleObject['name'] = name;
        singleObject['message'] = message;
        singleObject['time'] = today;
        
        objectList.push(singleObject);
    
    
        let para = document.createElement("p");   //make the p element dynamically
        para.style.display = 'inline-block';  //style the p element
        para.style.backgroundColor = 'rgba(31, 145, 238, 0.726)';
        para.style.borderRadius = '1em';
        para.style.marginBottom = '0.5em';
        para.style.padding = '1em';
        
        
        let node;
        let nodeMsg;
        let nodeTime;

        for(let i=0; i<objectList.length; i++){
            node = document.createTextNode(objectList[i].name);
            nodeTime = document.createTextNode(objectList[i].time.toLocaleTimeString());
            linebreak = document.createElement("br");
            nodeMsg = document.createTextNode(objectList[i].message); 
            para.id = 'id'+[i];  //Assign a id to p
        }
        
        para.appendChild(node);
        para.appendChild(nodeTime);
        para.appendChild(linebreak);
        para.appendChild(nodeMsg);
        
 
        let element = document.getElementById("rightCanvas");
        element.appendChild(para);

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
        else{
            document.getElementById("id"+[i]).innerHTML = "<mark>" +name+ "</mark>"+ "<em>" +" : just now"+"</em>"+ "<br>"+ message;
        }

        

    }
    
    let t = setTimeout(uppdateTime, 60000);  //recall the uppdateTime() function every 60seconds to reset p elements time //just now etc.. 60000ms = 60seconds
}
/* https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript */