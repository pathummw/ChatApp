let objectList = [];
let today = new Date();


function submit(){

    
        let singleObject = {};
        let name = document.querySelector(".name").value;
        let message = document.querySelector(".message").value;

    if(validation(name,message)){

        document.querySelector(".name").value = '';  /* clear the input field values */
        document.querySelector(".message").value = '';
        singleObject['name'] = name;
        singleObject['message'] = message;
        singleObject['time'] = today;
        
        objectList.push(singleObject);
    
    
        let para = document.createElement("p");
        para.style.display = 'inline-block';
        para.style.backgroundColor = 'rgba(31, 145, 238, 0.726)';
        para.style.borderRadius = '1em';
        para.style.marginBottom = '0.5em';
        para.style.padding = '1em';
    
        
        let node;
        let nodeMsg;
        for(let i=0; i<objectList.length; i++){
            /* node = document.createTextNode(objectList[i].name+':'+ ' ' + objectList[i].message +'Time:' + '<br>'+objectList[i].time); */
            node = document.createTextNode(objectList[i].name+':'+ ' ' +objectList[i].time.toLocaleTimeString());
            linebreak = document.createElement("br");
            nodeMsg = document.createTextNode(objectList[i].message); 

            
        }
        console.log(node);
        para.appendChild(node);
        para.appendChild(linebreak);
        para.appendChild(nodeMsg);
    
        /* nodeMsg.style.backgroundColor = 'yellow'; */
    
        let element = document.getElementById("rightCanvas");
        element.appendChild(para);
    } 
    else{

    }


    uppdateTime();
}

function validation(name,message){
    
    
        
    if(name == ''){
        console.log(name);
        document.querySelector(".name").style.backgroundColor = '#e74c3c';
        return false;
    }

    else if(message == ''){
        console.log(message);
        document.querySelector(".message").style.backgroundColor = '#e74c3c';
        return false;
    }

    else
        return true;
}


function onFocus(id){
    document.querySelector('.'+id).style.backgroundColor = '#ecf0f1';
    console.log(id);
}

function uppdateTime(){
    //update the time ,just now , 5minutes ago.....
    let x = document.getElementsByTagName("p");
    /* console.log(x.innerHTML); */

    /* var t = setTimeout(startTime, 500); */
}
/* https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript */