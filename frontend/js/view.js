

get_req()

function retrieveSelectedCourse() {
  return localStorage.getItem("selectedCourseIndex");
}

function get_req() {
  var ind = localStorage.getItem("selectedCourseIndex")

  $.get("http://127.0.0.1:9999/get_Courses/" + ind, function (data, status) {

    console.log(data);
    for (let i = 0; i < data.length; i++) {
      document.querySelector('#viewcourse').innerHTML += ` <div class="course-container">
      <div class="course-background" style="background-image: url(/frontend/img/course-1.jg)">
        <div class="course-info">
          <img class="course-image" src="/frontend/img/cat-1.jpg" alt="JavaScript course">
          <div class="course-details">
            <h2 class="course-title" id="course-title">${data[i].Course_Name}</h2>
            <p class="course-description">${data[i].Course_Description}</p>
            <h2>MODULES</h2>
          <h2> <ul class="course-modules"> ${data[i].Course_Modules.map(module => `<li>${module}</li>`).join('')}</h2>
              
            </ul>
                    
          </div>
        </div>
      </div>
    </div>  `
      
      
      
      


    }
  })
}




 


//  Retrieve the selected course index
var selectedCourseIndex = retrieveSelectedCourse();

// Update the course information on the page
// var selectedCourseIndex = retrieveSelectedCourse();

// Update the course information on the page
// document.querySelector("#course-title").innerHTML = courses[selectedCourseIndex].title;
// document.querySelector("#course-description").innerHTML = courses[selectedCourseIndex].description;

// var modulesList = "";
// for (var i = 0; i < courses[selectedCourseIndex].modules.length; i++) {
// modulesList += "<li>" + courses[selectedCourseIndex].modules[i] + "</li>";
// }
// document.querySelector("#course-modules").innerHTML = modulesList;

// document.querySelector("#enroll-button").innerHTML = "Enroll";
// document.querySelector("#enroll-button").setAttribute("href", courses[selectedCourseIndex].enrollURL);

if(localStorage.getItem("k") == 1){
  localStorage.setItem("enrolled", "false");
  console.log("false")
}


function funn() {
  //document.getElementById("enroll-button").addEventListener("click", function() {
  if (localStorage.getItem("k") == 1) {
    console.log("1000")
    localStorage.setItem("enrolled", "false");
    window.location.href = "/frontend/register.html";
  }
  else {
    console.log("hello")
    
    const Course_Name = document.getElementById('course-title').textContent;
console.log('Course_Name')
    console.log(document.getElementById("enroll-button").innerHTML)
    let buttons = document.getElementById("enroll-button")
    console.log(buttons)
    data = {
      Email: localStorage.getItem('k'),
      Course_Name: Course_Name
    }
    data = JSON.stringify(data)
    console.log(data)
    // console.log(data-index')
    buttons.addEventListener('click',function(){
       
        buttons.innerHTML = "You are enrolled";
        buttons.style.backgroundColor = "grey";
        buttons.disabled = true;
      localStorage.setItem("enrolled", "true");
      
});

      
      $.ajax({
        "method": "POST", contentType: "application/json", "data": data, "url": "http://localhost:9999/enroll",
        "success": (e) => {
          // alert("Successfully loggedin")
        
        }, error: (e) => { alert("Wrong") }
      })
     } 
  
    const Email = localStorage.getItem("k");
          //console.log(Course_Name)

  }
  buttons = document.getElementById("enroll-button")
  console.log(buttons)
  if (localStorage.getItem("enrolled") === "true") {
    console.log("sdsd")
    buttons.innerHTML = "You are enrolled";
    buttons.style.backgroundColor = "grey";
    buttons.disabled = true;
  }
  






// window.onload=function(){
//     if(window.localStorage.getItem("k")!=null && window.localStorage.getItem("k")!=1){
//         document.getElementById("intro1").className="nav-item intro";
//         document.getElementById("intro2").className="nav-item";
//         // document.getElementById("intro3").className="nav-item";
//         // var ans=JSON.parse(window.localStorage.getItem("k"));
//         document.getElementById("user").innerHTML="Hello "+localStorage.getItem("k")+"!";
//     }
// }

function fun2() {
  //console.log(window.localStorage.getItem("k"))
  bhi = JSON.stringify({ Email: window.localStorage.getItem("k") })
  console.log(bhi)
  $.ajax({
    "method": "POST", contentType: "application/json", "data": bhi, "url": "http://localhost:9999/LogOutUser/logout",
    "success": (e) => {
      //alert("Successfully registered")
      window.localStorage.setItem("k", 1)
      window.localStorage.setItem("enrolled","false")
      location.href = "index.html"
    }, error: (e) => { alert(e) }
  });
  window.localStorage.setItem("k", 1);
  document.getElementById("Intro1").className = "nav-item";
  document.getElementById("intro2").className = "nav-item intro-tag";

}





// Import the necessary packages and modules
// const mongoose = require('mongoose');
// const User = require('./models/user');
// const url = 'mongodb+srv://TeamRocket:9997@project.sfwpshx.mongodb.net/LMS'

// mongoose.connect(url,  {
// useNewUrlParser: true,
// useUnifiedTopology: true
// }
// )
// Connect to the MongoDB database



