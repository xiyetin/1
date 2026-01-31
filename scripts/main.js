const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/FD9741E57CD3D7E4AFDE8FB0EED747AA.jpg") {
    myImage.setAttribute("src", "images/ENDFIELD_SHARE_1769845239.png");
  } else {
    myImage.setAttribute("src", "images/FD9741E57CD3D7E4AFDE8FB0EED747AA.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `你好, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `你好, ${storedName}`;
}

myButton.onclick = function () {
  setUserName();
};