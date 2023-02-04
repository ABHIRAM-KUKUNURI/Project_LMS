function addInstructor(){
    var FullName=$('#FullName').val();
    var Email = $('#Email').val();
    var Message = $('#Message').val();
    var File = $('File').val()
    var obj = {
        FullName:FullName,
        Email:Email,
        Message:Message,
        File:File
    }
    let ins=JSON.stringify(obj);
    $.ajax({
        "method":"POST",contentType:"application/json",'data':ins,'url':'http://127.0.0.1:9999/AddInstructor',
      "success":(e)=>{alert("sucessfully added")},error:(e)=>{alert(e)}
    });

}