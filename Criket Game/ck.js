let score=localStorage.getItem('obj');
let obj ;
if(score!==undefined)
{
obj=JSON.parse(score)
}
else{
obj= {
  win: 0,
  loss: 0,
  tie: 0,
};
}


let hchoice;
function computechoice() {
  let computerchoice = Math.random() * 3;
  let actualcomputerchoice = "";
  if (computerchoice > 0 && computerchoice < 1) {
    actualcomputerchoice = "Bat";
  }
  if (computerchoice > 1 && computerchoice < 2) {
    actualcomputerchoice = "Ball";
  }
  if (computerchoice > 2) {
    actualcomputerchoice = "Stump";
  }
  return actualcomputerchoice;
}

function humanchoice() {
  if (
    (hchoice == "Bat" && computechoice() == "Bat") ||
    (hchoice == "Ball" && computechoice() == "Ball") ||
    (hchoice == "Stump" && computechoice() == "Stump")
  ) {
    obj.tie++;
    document.querySelector('.para').innerHTML=(`${hchoice} won computechoice choice ${computechoice()}
    win : ${obj.win} loss : ${obj.loss}  tie : ${obj.tie}` )
    
  } else if (hchoice == "Bat" && computechoice() == "Ball") {
    obj.win++;
    output()
    
  } else if (hchoice == "Ball" && computechoice() == "Stump") {
    obj.loss++;
    output()
   
  } else if (hchoice == "Stump" && computechoice() == "Bat") {
    obj.loss++;
    output()
   
  } else if (hchoice == "Ball" && computechoice() == "Bat") {
    obj.win++;
    output()
   
  } else if (hchoice == "Stump" && computechoice() == "Ball") {
    obj.loss++;
    output()
    
  } else if (hchoice == "Bat" && computechoice() == "Stump") {
    obj.loss++;
    output()
   
  }

 



  localStorage.setItem('obj',JSON.stringify(obj));
}

function output()
 {
  document.querySelector('.para').innerHTML=(`${hchoice} won computechoice choice ${computechoice()}
 win : ${obj.win} loss : ${obj.loss}  tie : ${obj.tie}` )
 
 }

 function reset()
 {
  localStorage.clear()
  obj.loss=0;
  obj.tie=0;
  obj.win=0;

  output()
 }





