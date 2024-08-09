const fistUpEmoji = document.querySelector(".fist-up");

const handsUpEmoji = document.querySelector(".hands-up");

const fingersUpEmoji = document.querySelector(".fingers-up");

let numb = document.querySelector(".first-initial-number");

let numb2 = document.querySelector(".second-initial-number");

let save = document.querySelector(".save-btn");
let clear = document.querySelector(".clear-btn");

const emoji = ["✊", "✋", "✌️"];

let count = JSON.parse(localStorage.getItem("count")) || 0;
let count2 = JSON.parse(localStorage.getItem("count2")) || 0;

numb.innerText = count;
numb2.innerText = count2;

fistUpEmoji.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (fistUpEmoji.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    para.style.cssText = "margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (fistUpEmoji.innerText < randomEmoji && randomEmoji !== "✌️") {
    count2++;

    numb2.innerText = count2;

    const para = document.createElement("h1");
    
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    para.style.cssText = "color:red; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else  {
    count++;
    numb.innerText = count;

    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
    para.style.cssText = "color:green; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  }
});

handsUpEmoji.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (handsUpEmoji.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    para.style.cssText = "margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (handsUpEmoji.innerText < randomEmoji) {
    count2++;
    numb2.innerText = count2;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    para.style.cssText = "color:red; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else {
    count++;
    numb.innerText = count;

    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
    para.style.cssText = "color:green; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  }
});

fingersUpEmoji.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (fingersUpEmoji.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    para.style.cssText = "margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (fingersUpEmoji.innerText > randomEmoji && randomEmoji == "✊") {
    count2++;
    numb2.innerText = count2;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    para.style.cssText = "color:red; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else {
    count++;
    numb.innerText = count;
    console.log("lol");
    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
    para.style.cssText = "color:green; margin-top:3rem";
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  }
});


save.addEventListener("click", () => {
  localStorage.setItem("count", JSON.stringify(count));
  localStorage.setItem("count2", JSON.stringify(count2));
  save.innerText = "Saved!";
  setTimeout(() => {
    save.innerText = "Save my score";
  }, 1000);
});

clear.addEventListener("click", () => {
  count = 0
  count2 = 0
  localStorage.setItem("count", JSON.stringify(0));
  localStorage.setItem("count2", JSON.stringify(0));
  numb.innerText = count;
  numb2.innerText = count2;
});
