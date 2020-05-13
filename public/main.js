getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };

  request.send();
};
getJS.onclick = () => {
  console.log("1");
  const request = new XMLHttpRequest();
  console.log("2");
  request.open("get", "/2.js");
  console.log("3");
  request.onreadystatechange = () => {
    console.log("4");
    if (request.readyState === 4) {
      console.log(request.readyState);
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        console.log(script);
        script.innerHTML = request.response;
        document.body.appendChild(script);
      } else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/3.html");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const bool = JSON.parse(request.response);
        myName.textContent = bool.name;
      }
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        console.log(request.response);
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
