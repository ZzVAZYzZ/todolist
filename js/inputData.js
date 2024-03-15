//Ket noi den firestore cua firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";

const firebaseConfig = {
     apiKey: "AIzaSyCKcaZEsG2snA3yzVH39Q1Xp2ujMu7HYHg",
     authDomain: "todolist-e8010.firebaseapp.com",
     projectId: "todolist-e8010",
     storageBucket: "todolist-e8010.appspot.com",
     messagingSenderId: "177958072689",
     appId: "1:177958072689:web:75a87c1ab3fab11272c6d0"
   };

   const app = initializeApp(firebaseConfig);

//them cac function de thuc hien add, post, update, delete
import {
     getFirestore,
     setDoc,
     addDoc,
     doc,
     collection,
     getDoc,
     getDocs,
     updateDoc,
     deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


let database = getFirestore(app);
//add data
function add(todolist){
     setDoc(doc(database, "todolist", String(todolist.id)), {
          id: todolist.id,
          name: todolist.name,
          fromDay:  todolist.fromDay,
          fromMonth: todolist.fromMonth,
          fromYear:  todolist.fromYear,
          toDay: todolist.toDay,
          toMonth: todolist.toMonth,
          toYear: todolist.toYear,
          content: todolist.content
        });
        alert("user added");
}

//get all data
const myData = [];

async function getAllData() {
     const querySnapshot = await getDocs(collection(database, "todolist"));
     querySnapshot.forEach((doc) => {
          myData.push(doc.data());
        });
        console.log(myData);
}

getAllData()




 
 let addButton = document.getElementById('myAddButton');
 
 function renderData(){
     myData.forEach((e)=>{
          let wrapperDiv = document.createElement("div");
          wrapperDiv.setAttribute("class", "wrapper-div");
          let div1 = document.createElement("div");
          div1.setAttribute("class", "div-1");
          wrapperDiv.appendChild(div1);
          let from = document.createElement("div");
          from.setAttribute("class", "from");
          from.textContent = e.fromDay + "/" +  e.fromMonth + "/" +  e.fromYear;
          div1.appendChild(from);
          let div12 = document.createElement("div");
          div12.setAttribute("class", "div-1-2");
          div12.innerHTML = `<svg width="150px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z" fill="#000000"/>
          </svg>`;
          div1.appendChild(div12);
          let to = document.createElement("div");
          to.setAttribute("class", "to");
          to.textContent =  e.toDay + "/" +  e.toMonth + "/" +  e.toYear;
          div1.appendChild(to);
          let div2 = document.createElement("div");
          div2.setAttribute("class", "div-2");
          wrapperDiv.appendChild(div2);
          let div21 = document.createElement("div");
          div21.setAttribute("class", "div-2-1");
          div21.textContent =  e.name;
          div2.appendChild(div21);
          let div3 = document.createElement("div");
          div3.setAttribute("class", "div-3");
          wrapperDiv.appendChild(div3);
          let div31 = document.createElement("button");
          div31.setAttribute("class", "div-3-1");
          div31.textContent = "view";
          div31.setAttribute("id", `div31ID${e.id}`);
          // Gán sự kiện onclick cho button "view" sau khi đã tạo phần tử này trong DOM
          div31.setAttribute("onclick", `(function viewClick(div31ID${e.id}){
               document.getElementById("popupModel").style.display = "block";
          })()`);
          div3.appendChild(div31);
          let div32 = document.createElement("button");
          div32.setAttribute("class", "div-3-2");
          div32.textContent = "delete";
          div3.appendChild(div32);
          document.getElementById("wrapperTodo").appendChild(wrapperDiv);
     })    
}

 addButton.addEventListener('click', (e) => {
     let myAdd = document.getElementById('myAdd').value;
     let fromDay = document.getElementById('day1').value;
     let fromMonth = document.getElementById('month1').value;
     let fromYear = document.getElementById('year1').value;
     let toDay = document.getElementById('day2').value;
     let toMonth = document.getElementById('month2').value;
     let toYear = document.getElementById('year2').value;
     let content = "";
 
     const toDoList = {
         id:  Math.floor(Math.random() * 10),
         name: myAdd,
         fromDay: fromDay,
         fromMonth: fromMonth,
         fromYear: fromYear,
         toDay: toDay,
         toMonth: toMonth,
         toYear: toYear,
         content: content,
     };
 
     console.log(toDoList);
     add(toDoList);
     console.log(myData);
     renderData();
     
 });

 