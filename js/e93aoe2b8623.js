const registered_students = [

    "20BCA094",
    "20BCA095",
    "20BCA053"


];
function roll_validate(){
let x=document.getElementById("roll_no").value.trim();
if(x==null || x==""){
    swal("WARNING!", "Please Enter Roll No!", "warning");
    document.getElementById("roll_no").focus();
    return;
}
if(x.length!=8 && x.length!=10){
    swal("ERROR!", "Please enter valid Roll NO!", "info",{ button: "Try Again!" });
    document.getElementById("roll_no").focus();
    return;
}
if(x.length==10){
    if(x[2]!='-' && x[6]!='-'){
        swal("ERROR!", "Please enter Roll NO with '-' !", "info",{ button: "Try Again!" });
        document.getElementById("roll_no").focus();
        return;
    }else{
        const a = [];
        let j=0;
        for(let i=0;i<x.length;i++){
            if(x[i]=='-'){
                continue;
            }else{
                a[j] = x[i];
                j++;
            }
        }
        let st="";
        for(let i=0;i<a.length;i++){
            st += a[i];
        }
        x=st;
    }
}
if(isNaN(x[0]) || isNaN(x[1])){
    swal("ERROR!", "Please enter valid Roll NO!", "info",{ button: "Try Again!" });
    document.getElementById("roll_no").focus();
    return;
}
if(((x[2] >= 'a' && x[2] <= 'z') || (x[2] >= 'A' && x[2] <= 'Z' )) && ((x[3] >= 'a' && x[3] <= 'z') || (x[3] >= 'A' && x[3] <= 'Z')) && ((x[4] >= 'a' && x[4] <= 'z') || (x[4] >= 'A' && x[4] <= 'Z'))){
}else{
    swal("ERROR!", "Please enter valid Roll NO!", "info",{ button: "Try Again!" });
    document.getElementById("roll_no").focus();
    return;
}
if(isNaN(x[5]) || isNaN(x[6]) || isNaN(x[7])){
    swal("ERROR!", "Please enter valid Roll NO!", "info",{ button: "Try Again!" });
    document.getElementById("roll_no").focus();
    return;
}

let str= "";

for(let i=0;i<x.length;i++){
    str += String.fromCharCode(x.charCodeAt(i)>96 && x.charCodeAt(i)<123 ? x.charCodeAt(i)-32 : x.charCodeAt(i));
}

x=str;

const result=registered_students.indexOf(x);
if(result!=-1){
    swal({
        title: "Welcome Coder !",
        text: "You are already registerd in our System !",
        icon: "success",
        button: "Aww yesss!",
      });

}else{
    swal("Oops!", "You are not registered on our System !", "error");

}


}

