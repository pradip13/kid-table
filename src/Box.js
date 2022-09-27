import React from 'react';
import "./App.css";


const Box = () => { 
     
    function getSelectionText(){
        var selectedText = ""
        if (window.getSelection){ // all modern browsers and IE9+
            selectedText = window.getSelection().toString()
        }
        return selectedText
    }
    
    function handleClick(){
        document.getElementById("db").innerHTML="manish has <span id='av'>4</span> pens and rajiv gave <span id='bv'>5</span> pens. how many pens manish has now?";
    }

    function insertText(){
          const a=sessionStorage.getItem('a');
          const b = sessionStorage.getItem("b");
          const c=Number(a)+Number(b);
        document.getElementById("result").innerHTML=' c= a+b  <br>  c=' +c;

    }
    function handleText(){
        //document.addEventListener('mouseup', function(){
            
            var thetext = getSelectionText()
            if (thetext.length > 0){ // check there's some text selected
                console.log(thetext) ;
               // alert("hh"+thetext);// logs whatever textual content the user has selected on the page
               
                if(sessionStorage.clicked)
                {
                sessionStorage.clicked=Number(sessionStorage.clicked)+1;
                }else
                {
                    sessionStorage.clicked=1;
                }
                if(sessionStorage.clicked==1)
                {
            sessionStorage.setItem('a',thetext);
           // document.getElementById("db").append("c= a+");

                }else{
                    sessionStorage.setItem('b',thetext);
                   // document.getElementById("db").append(" b");

                }

            }
       // }, false);
       // document.getElementById("db").textContent="manish has 4 pens and rajiv gave 5 pens. how many pens manish has now?";
    }
  return (
    <div className='container'>
    <div className='row'>
   <div className='col-md-10'>
    <div className='display-box'  id="db" style={{border: "solid 1px black ", height:"100px"}}> </div> <br /><br />
    <div className='display-box'  id="result"> </div> <br /><br />

    <div className="click-box" onClick={handleClick} style={{border: "solid 1px black", height:"50px",width:"50px"}}></div> 
    </div>
   <div className='col-md-2'> </div>


    </div>
    <br></br>
    <button className='add-variable' onClick={()=>handleText()}>Add variable</button>
    
    <button className='add-variable' onClick={()=>insertText()}>Insert</button>
     
    <br /> <br/>


    <div className='right'>
    <div className="variable">
        <label>Variable  <input type="text" placeholder="a" /> </label> <br /> <br/>

    </div>
    <div className="range">
    <label >Range : </label>
        <input type="text" placeholder="1" /> To <input type="text" placeholder="9" /> <br /> <br />
    <button className='bg-primary' style={{backgroundColor: "#1266F1" }} >Submit</button>
    </div> 
</div>
        
   
      
    </div>
  )
}

export default Box;
