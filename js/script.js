window.onload = () => {
  const getBtn = document.getElementById("getBtn");
  const postBtn = document.getElementById("postBtn");
  
  // getBtn.addEventListener("click", printToIndex);
  postBtn.addEventListener("click", sendData);
  
  const word = document.getElementById("word");
  
  const sendHttpRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      // console.log(data);
      
      // if (data.country === "Bangladesh") {
        console.log("Hello, ", data.country);
        
        var output = document.querySelector(".output");
        output.innerHTML = "<p>Hello, " + data.country + "</p>";
      // }
      // function loadData() {
      //
      // }
    };
    
    xhr.send();
  
    // console.log()
  };
  
  
  function getData() {
    sendHttpRequest("GET", "http://ip-api.com/json/");
  }
  
  return getData();
  
  function sendData() {
    
  }
  
  
}