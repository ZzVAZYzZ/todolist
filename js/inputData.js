let addButton = document.getElementById('myAddButton');
const array = [];

addButton.addEventListener ('click', (e)=>{
   let myAdd = document.getElementById('myAdd').value;
   let fromDay = document.getElementById('day1').value;
   let fromMonth = document.getElementById('month1').value;
   let fromYear = document.getElementById('year1').value;
   let toDay = document.getElementById('day2').value;
   let toMonth = document.getElementById('month2').value;
   let toYear = document.getElementById('year2').value;

   
   const toDoList = {
        id: Math.floor(Math.random() * 10 + 1),
        name: myAdd,
        fromDay: fromDay,
        fromMonth: fromMonth,
        fromYear: fromYear,
        toDay: toDay,
        toMonth: toMonth,
        toYear: toYear,
        content: "",
   }
    array.push(toDoList);
    console.log(array);
     let wrapperDiv = document.createElement("div");
     wrapperDiv.setAttribute("class", "wrapper-div");
     let div1 = document.createElement("div");
     div1.setAttribute("class", "div-1");
     wrapperDiv.appendChild(div1);
     let from = document.createElement("div");
     from.setAttribute("class", "from");
     from.textContent = fromDay + "/" + fromMonth + "/" + fromYear;
     div1.appendChild(from);
     let div12 = document.createElement("div");
     div12.setAttribute("class", "div-1-2");
     div12.innerHTML = `<svg width="150px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/>
     </svg>`;
     div1.appendChild(div12);
     let to = document.createElement("div");
     to.setAttribute("class", "to");
     to.textContent = toDay + "/" + toMonth + "/" + toYear;
     div1.appendChild(to);
     let div2 = document.createElement("div");
     div2.setAttribute("class", "div-2");
     wrapperDiv.appendChild(div2);
     let div21 = document.createElement("div");
     div21.setAttribute("class", "div-2-1");
     div21.textContent = myAdd;
     div2.appendChild(div21);
     let div3 = document.createElement("div");
     div3.setAttribute("class", "div-3");
     wrapperDiv.appendChild(div3);
     let div31 = document.createElement("button");
     div31.setAttribute("class", "div-3-1");
     div31.textContent = "view";
     div31.setAttribute("id", `div31ID123`);
     div3.appendChild(div31);
     let div32 = document.createElement("button");
     div32.setAttribute("class", "div-3-2");
     div32.textContent = "delete";
     div3.appendChild(div32);
     document.getElementById("wrapperTodo").appendChild(wrapperDiv);
})



console.log(array);


