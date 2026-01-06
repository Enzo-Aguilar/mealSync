document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); //Prevents the page from reloading

    const email  = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(email === "student@school.com" && password === "1234"){
        window.location.href = "dashboard.html";
    }else{
        alert("Invalid login")
    }
});