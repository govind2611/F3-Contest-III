const logoutBtn = document.querySelector("#logout");
const profileBtn = document.querySelector(".profile1");
const singupNavBtn = document.querySelector(".signupNav1");
function loggedIn() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user === "" || user.accessToken === "") {
    window.location.href = "./index.html";
  } else {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const passElement = document.getElementById("password");
    const accessTokenElement = document.getElementById("token");

    nameElement.textContent = user.fullName;
    emailElement.textContent = user.email;
    passElement.textContent =  user.password;
    accessTokenElement.textContent =  user.accessToken;
  }
}
loggedIn();

logoutBtn.addEventListener("click", () => {
  window.location.href = "./index.html";
  localStorage.removeItem("user");
});
profileBtn.addEventListener("click", () => {
  alert("You are already Logged in to your account");
  
});

singupNavBtn.addEventListener("click", () => {
  alert("Please log out to signup with new account");
  return;
});
