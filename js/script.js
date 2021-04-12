window.onload = () => {
  const word = document.getElementById("word");
  
  const getBtn = document.getElementById("getBtn");
  const postBtn = document.getElementById("postBtn");
  getBtn.addEventListener("click", getData);
  postBtn.addEventListener("click", sendData);
  
  function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/users");
  }
  
  function sendData() {
  
  }
}