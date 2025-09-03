function savedata(event) {
    event.preventDefault();
    let email = document.getElementById("floatingInput").value.trim();
    let password = document.getElementById("floatingPassword").value.trim();

    if (email === "" || password === "") {
        alert("Please enter email and password");
        return;
    }

    let users = [
        {
            email: "ali@gmail.com",
            password: "123456"
        }
    ];
    localStorage.setItem("users", JSON.stringify(users));

    if (localStorage.getItem("users")) {
        users = JSON.parse(localStorage.getItem("users"));
    }

    let found = users.find(user => user.email === email && user.password === password )

    if (found) {
      alert("successful login");
      window.location.href = "../home.html";
    } else {
      alert("denied login Please enter the right email and password");
    }
}