const fistUpEmoji = document.getElementsByClassName("fist-up")[0];

const negative = document.getElementsByClassName("hands-up")[0];

const neutral = document.getElementsByClassName("fingers-up")[0];

let numb = document.getElementsByClassName("init1")[0];

let numb2 = document.getElementsByClassName("init2")[0];

let save = document.querySelector(".s");
let clear = document.querySelector(".c");

const emoji = ["✊", "✋", "✌️"];

count = JSON.parse(localStorage.getItem("count")) || 0;
count2 = JSON.parse(localStorage.getItem("count2")) || 0;

numb.innerText = `${count}`;
numb2.innerHTML = `${count2}`;

fistUpEmoji.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (fistUpEmoji.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (fistUpEmoji.innerText < randomEmoji && randomEmoji !== "✌️") {
    count2++;

    numb2.innerText = `${count2}`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (fistUpEmoji.innerHTML < randomEmoji && randomEmoji !== "🤚") {
    count++;
    numb.innerText = `${count}`;

    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  }
});

negative.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (negative.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (negative.innerText < randomEmoji) {
    count2++;
    numb2.innerText = `${count2}`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (randomEmoji < negative.innerText) {
    count++;
    numb.innerText = `${count}`;

    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  }
});

neutral.addEventListener("click", () => {
  let randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
  if (neutral.innerText == randomEmoji) {
    const para = document.createElement("h1");
    para.innerText = `Equality! computer chose ${randomEmoji} too.`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (neutral.innerText > randomEmoji && randomEmoji == "✊") {
    count2++;
    numb2.innerText = `${count2}`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (randomEmoji < neutral.innerText && randomEmoji !== "✊") {
    count++;
    numb.innerText = `${count}`;
    console.log("lol");
    const para = document.createElement("h1");
    para.innerText = `You won! Computer chose ${randomEmoji}`;
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
  localStorage.clear();
  location.reload();
});
