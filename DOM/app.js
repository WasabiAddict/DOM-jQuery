document.addEventListener("DOMContentLoaded", function () {
    document.body.onload = function () {
      const btn1 = document.createElement("button");
      const btnText = document.createTextNode("Click!");
      btn1.appendChild(btnText);
      document.body.appendChild(btn1);
  
      let container = document.getElementById("container");
      container.appendChild(btn1);
  
      btn1.onclick = btnActions;
      function btnActions() {
        alert("new dota 2 patch coming!");
      }
  
      let randomBgc = document.getElementById("div1");
      randomBgc.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = randomColor();
      });
  
      let returnBgc = document.getElementById("div1");
      returnBgc.addEventListener("mouseout", function (e) {
        e.target.style.backgroundColor = "black";
      });
  
      function randomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      const newDiv = document.getElementById("div1");
      const para = document.createElement("p");
      const paraText = document.createTextNode(
        "Dota 2 is a great and awful game"
      );
      para.appendChild(paraText);
      newDiv.appendChild(para);
      document.body.appendChild(newDiv);
  
      para.addEventListener("click", paraColor);
      function paraColor(e) {
        //e.target.style.color = "red";
        e.target.style.color = randomColor();
      }
  
      const btn2 = document.createElement("button");
      const btnText2 = document.createTextNode("Hit!");
      const newDiv3 = document.createElement("div");
      btn2.appendChild(btnText2);
      document.body.appendChild(newDiv3);
      document.body.appendChild(btn2);
      container.appendChild(btn2);
      container.appendChild(newDiv3);
      container.appendChild(newDiv);
  
      btn2.addEventListener("click", function () {
        const span = document.createElement("span");
        const spanText = document.createTextNode("Dota!");
        span.appendChild(spanText);
        newDiv3.appendChild(span);
      });
    
    
      const punchBtn = document.getElementById("btn3");
  
      punchBtn.addEventListener("click", function() {
        const friends = ["omniknight", "tidehunter", "dawnbreaker", "spectre", "bane", "night stalker", "dark seer", "pangolier", "elder titan", "phantom assassin", "axe"];
        for(let i = 0; i < friends.length; i++) {
         let name = friends[i];
         const newLi = document.createElement("Li");
         newLi.innerText = name;
         const listItems = document.getElementById('list');
         listItems.appendChild(newLi);
        }
  
      });  
  };
  });