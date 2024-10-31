let getUsersdata= JSON.parse(localStorage.getItem("usersdata")) || [];

function Signin(){

    let mobile = document.getElementById("mobile").value ;

    let password = document.getElementById("pass").value ;

    let count = 0;

    if(mobile.length !== 10)
    {
        alert("Mobile no. should have 10 digits")
    }
    else if(mobile.length == 0 )
    {
        alert("Enter mobile no.")
    }
    else{

    
   

    for(let i=0;i<getUsersdata.length; i++ )
    {
        if(mobile == getUsersdata[i].mobile)
        {
            if(password == getUsersdata[i].password)
            {
                alert("Sign in Successful")

                window.location.href = "index.html"
            }
            else
            {
                alert("Invalid Password")
            }
            
        }
        else 
        {
            count++;
        }

        
    }
    if(count == getUsersdata.length)
    {
        alert("User is not registered! Signup to Continue")
        window.location.href = "signup.html"
    }
}
}
