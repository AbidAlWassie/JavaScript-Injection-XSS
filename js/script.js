window.onload = () => {
  
  const word = document.getElementById("word");
  
  const sendHttpRequest = (method, url) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.onload = () => {
      const data = JSON.parse(xhr.response);
      // console.log(data);
      
      const getBtn = document.getElementById("getBtn");
      const postBtn = document.getElementById("postBtn");
      
      getBtn.addEventListener("click", printData);
      postBtn.addEventListener("click", sendData);
      
      function printData() {
          var output = document.querySelector(".output");
          
          output.innerHTML = 
          "<p>Country: " + data.country + "</p>" +
          "<p>Timezone: " + data.timezone + "</p>" +
          "<p>Country: " + data.country + "</p>" +
          "<p>IP Address: " + data.query + "</p>" +
          "<p>ISP: " + data.isp + "</p>";
      }
    };
    
    xhr.send();
  
    // console.log()
  };
  
  
  function getData() {
    sendHttpRequest("GET", "http://ip-api.com/json");
  }
  
  return getData();
  
  function sendData() {
    
  }
  
  
}