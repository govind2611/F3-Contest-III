if (localStorage.getItem("user")) {
  let name = JSON.parse(localStorage.getItem("user")).fullName;
  alert(`${name} you are already signed in`);
  window.location.href = "/profile/profile.html";
}

const errorMsg = document.getElementById("error");
const succesMsg = document.getElementById("succes");

const fullName = document.querySelector("#fName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cnfmPass = document.querySelector("#confirm-password");

const signupBtn = document.querySelector("#signup");
const profileBtn = document.querySelector(".profile");

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    email.value === "" ||
    fullName.value === "" ||
    password.value === "" ||
    cnfmPass.value === ""
  ) {
    errorMsg.textContent = "Error: All fields are manndatory";
    errorMsg.style.color = "red";
  } else {
    if (password.value != cnfmPass.value) {
      errorMsg.textContent = "Password did not match";
      errorMsg.style.color = "red";
      password.value = "";
      cnfmPass.value = "";
      return;
    }

    let user = {
      fullName: fullName.value,
      email: email.value,
      password: password.value,
      confirmPass: cnfmPass.value,
      accessToken: generateToken(),
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Your account has been created Successfully !!");
    window.location.href = "./profile.html";
  }
});

function generateToken() {
  let generatedToken = "";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 16; i++) {
    generatedToken += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return generatedToken;
}

profileBtn.addEventListener("click", () => {
  alert("You have to signup first");
  return;
});
