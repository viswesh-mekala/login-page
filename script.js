function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="manasa"&& password=="@2023")
{
    alert("login succesfully");
    return false;

}
else
{
    alert("login failed");
}

}
