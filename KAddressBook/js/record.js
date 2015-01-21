var Arr=[];
var cnt= 0,btn;


function record()
{

    var name=document.getElementsByTagName("input")[1].value;
    var email=document.getElementsByTagName("input")[2].value;
    var contact=document.getElementsByTagName("input")[3].value;
    var address=document.getElementsByTagName("input")[4].value;

    var obj={name1:"name", email1:"email" , contact1:"contact"};
    alert(obj);

    Arr[cnt]=obj;

var table = document.getElementById("tdt");

var row = table.insertRow(cnt+1);

var cell0 = row.insertCell(0);
var cell1 = row.insertCell(1);
var cell2 = row.insertCell(2);
var cell3 = row.insertCell(3);
var cell4 = row.insertCell(4);
var cell5 = row.insertCell(5);




cell0.innerHTML = name;
cell1.innerHTML = email;
cell2.innerHTML = contact;
cell3.innerHTML = address;
cell4.innerHTML ='<button id="asas" name="btn" onclick="edit()">Edit</button>';
cell5.innerHTML ='<button id="del" name="btn" onclick="del()">Delete</button>';

    cnt++;

    alert(cnt);
}

function edit()
{
    alert("");

    /*document.getElementById("name").value =
    document.getElementById("name").value = "hello"
    document.getElementById("name").value = "hello"
    document.getElementById("name").value = "hello"*/
}
function del()
{

alert(Arr[0]);
}

