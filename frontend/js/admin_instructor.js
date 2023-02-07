get_req()


function get_req(){ return new Promise((res, rej) => {
    $.get("http://127.0.0.1:9999/getInstructors", function(data, status){
        res(console.log(data));
        for(let i=0; i<data.length; i++){
            document.querySelector('#all_instructors').innerHTML+=`<tr class="inner-box">
            <th scope="row">
            <div class="event-date">
            <span>${i+1}</span>
            <p></p>
            </div>
             </th>
            
            <td>
            <div class="event-wrap" >
            <h3><a href="#">${data[i].FullName}</a></h3>
            <div class="meta">
            <div class="organizers">
            <a href="${data[i].Linked}" target="_blank">LinkedIn</a>
            </div>
            <div class="categories">
            <a href="${data[i].Linked}" target="_blank">Resume Link</a>
            </div>
            <div class="time">
            <span id="${data[i].Email}">${data[i].Email}</span>
            </div>
            </div>
            </div>
            </td>
            <td>
            <div class="r-no">
            <span>${data[i].State}</span>
            </div>
            </td>
            <td>
            <div class="primary-btn">
            <a class="btn btn-primary"  name="ab" id="${data[i]._id}" href="#">Accept</a>
            <a class="btn btn-primary"  name="rb" id="${data[i]._id}" href="#">Reject</a>
            </div>
            </td>
            </tr>
            </div>`
        }
            console.log("onedone")
        //     abtn = document.getElementById("accept-button"+email)
        //     rbtn = document.getElementById("reject-button"+email)
        const ss = document.getElementById("all_instructors")
        console.log(ss)
        ss.addEventListener("click",(e) => {
            if(e.target.nodeName==='A' && (e.target.name === "ab" || e.target.name === "rb"))
            {
                const id = e.target.id
                console.log(id)
            if(e.target.name === "ab"){
                    const obj = {
                            _id:id,
                            task:"Approve"
                    }
                    let ins=JSON.stringify(obj);
                    $.ajax({
                        "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
                    "success":(e)=>{console.log("sucessfully accepted")},error:(e)=>{alert(e)}
                    }); 
                    location.reload()
            }else if(e.target.name === "rb"){
                    var obj = {
                            _id:id,
                            task:"Decline"
                    }
                    let ins=JSON.stringify(obj);
                    $.ajax({
                        "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
                    "success":(e)=>{console.log("sucessfully rejected")},error:(e)=>{alert(e)}
                    });  
                    location.reload()
            }
            }
        })
        // abtn.addEventListener('click',function(){
        //     var obj = {
        //             Email:email,
        //             task:"Approve"
        //     }
        //     let ins=JSON.stringify(obj);
        //     $.ajax({
        //         "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
        //       "success":(e)=>{console.log("sucessfully accepted")},error:(e)=>{alert(e)}
        //     });
        // })
        // rbtn.addEventListener('click',function(e){
        //     var obj = {
        //             Email:email,
        //             task:"Decline"
        //     }
        //     console.log(e)
        //     let ins=JSON.stringify(obj);
        //     $.ajax({
        //         "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
        //       "success":(e)=>{console.log("sucessfully rejected")},error:(e)=>{alert(e)}
        //     });
        // })         
})
})
}
// async function updates(){
//     const ress = await get_req()
//     console.log("onedone")
//     email = document.getElementById("emaill").innerHTML
//     abtn = document.getElementById("accept-button"+email)
//     rbtn = document.getElementById("reject-button"+email)

// abtn.addEventListener('click',function(){
//     var obj = {
//             Email:email,
//             task:"Approve"
//     }
//     let ins=JSON.stringify(obj);
//     $.ajax({
//         "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
//       "success":(e)=>{console.log("sucessfully accepted")},error:(e)=>{alert(e)}
//     });
//     location.reload();
// })
// rbtn.addEventListener('click',function(){
//     var obj = {
//             Email:email,
//             task:"Decline"
//     }
//     let ins=JSON.stringify(obj);
//     $.ajax({
//         "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/approveOrDecline',
//       "success":(e)=>{console.log("sucessfully rejected")},error:(e)=>{alert(e)}
//     });
//     location.reload();
// })
// }