let tasks = [];
let alltask = "";

function myfun() {
  let tas = document.querySelector(".task").value;
  let dat = document.querySelector(".date").value;
  tasks.push({ item: tas, date: dat });

  showalltask();
}

function showalltask() {
  alltask = "";

  for (let i = 0; i < tasks.length; i++) {
    let { item, date } = tasks[i];   //destructuring;
    alltask += `
        
    <p>${item} ${date}
    
    <button
     class="jsbutton"
      onclick="tasks.splice(${i},1) ;
       
      showalltask()">
      Delete
    </button> 
    
    </p>
     
    `;
  }

  document.querySelector(".showtask").innerHTML = alltask;
}
