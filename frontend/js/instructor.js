

function addInstructor(){
    var FullName=$('#FullName').val();
    var Email = $('#Email').val();
    var Message = $('#Message').val();
    var File = $('File').val()
    var Linked=$('#Linked').val()
    console.log(typeof FullName)
    var state = "Pending"
    var obj = {
        FullName:FullName,
        Email:Email,
        Message:Message,
        File:File,
        Linked:Linked,
        State:state
    }
    let ins=JSON.stringify(obj);
    $.ajax({
        "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/AddInstructor',
      "success":(e)=>{alert("sucessfully added")},error:(e)=>{alert(e)}
    });

}

function Show(){
    var Ins_Email=$('#Ins_Email').val()
    var obj={Email:Ins_Email}
    //alert(Ins_Email)
    // $.post('http://127.0.0.1:9999/getInstructorInfo/get',obj,(xhr,status,responseText)=>{
    //     alert(responseText.responseText)

    // })
    $.ajax({
        "method":"POST",contentType:"application/json",'data':JSON.stringify({Email:Ins_Email}),'url':'http://127.0.0.1:9999/getInstructorInfo/get',
      "success":function(e) {
        // alert(e)
        if (e=='Approved'){
            document.querySelector('#showState').innerHTML=`<h6 class="">Your Resume Shortlisted Wait for the Interview Call</h6>`

        }else if (e=='Pending'){
            document.querySelector('#showState').innerHTML=`<h6 class="mb-0">Your Profile is in Processing State</h6>`

        }else {
            document.querySelector('#showState').innerHTML=`<h6 class="mb-0">Your Resume isn't shortlisted Thanks for the Intrest better luck for the future</h6>`

        }
    },error:(e)=>{alert(e)}
    });
}