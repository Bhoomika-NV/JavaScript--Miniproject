function validate()
{
        var un = document.getElementById("uname").value 
        var unpattern = /^[A-Za-z]+$/
        var ph =document.getElementById("uno").value
        var phpat = /^[6-9]{1}[0-9]{9}$/
        var pass = document.getElementById("up").value
       


        if(un=="")
        {
        document.getElementById("msg").innerHTML="Enter the valid username"
                return false
        } 

        if(un.match(unpattern))
        true
       else
      {
        document.getElementById("msg").innerHTML="Please follow the correct pattern "
        return false
        }
        if(un.length<3)
        {
            document.getElementById("msg").innerHTML="username must have more than 3 characters"
            return false
        }
        if(un.length>9)
        {
            document.getElementById("msg").innerHTML="username length should be lessthan 9 characaters"
            return false
        }
        if(ph=="")
        {
            document.getElementById("msg1").innerHTML="incorrect phone number"
            return false
        }
        if(ph.match(phpat))
        true
    else{
        document.getElementById("msg1").innerHTML="incorrect ph pattern"
        return false
    }
    if(pass=="")
    {
        document.getElementById("msg3").innerHTML="enter the password"
        return false
    }
//     if(pass.match(passpat))
//     true
// else{
//     document.getElementById("msg3").innerHTML="password should have special chars also"
//     return false
// }
if(pass.length>6)
{
    document.getElementById("msg3").innerHTML="password cannot have more 6 char"
    return false
}
if(pass.length<3)
{
    document.getElementById("msg3").innerHTML="Password should have greaterthan 3 characters"
    return false
}

}