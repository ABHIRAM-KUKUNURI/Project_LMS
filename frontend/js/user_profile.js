console.log("Done")

var user_email = window.localStorage.getItem('k')
console.log(user_email)

$.get("http://127.0.0.1:9999/userProfile/"+user_email, function(data, status){
    console.log(data)
    console.log(data[0].User_Name)
    let main_name = document.getElementById("main_name")
    let main_name2 = document.getElementById("left-uname")
    main_name.innerHTML =data[0].User_Name
    main_name2.innerHTML =data[0].User_Name
    let main_email = document.getElementById("main_email")
    main_email.innerHTML =data[0].Email

})