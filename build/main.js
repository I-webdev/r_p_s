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

numb.innerHTML = `<span>You</span><span class="text-9xl font-semibold">${count}</span>`;
numb2.innerHTML = `<span class="text-9xl font-semibold">${count2}</span><span>bot</span>`;

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

    numb2.innerHTML = `<span class="text-9xl font-semibold">${count2}</span><span>bot</span>`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (fistUpEmoji.innerHTML < randomEmoji && randomEmoji !== "🤚") {
    count++;
    numb.innerHTML = `<span>You</span><span class="text-9xl font-semibold">${count}</span>`;

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
    numb2.innerHTML = `<span class="text-9xl font-semibold">${count2}</span><span>bot</span>`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (randomEmoji < negative.innerText) {
    count++;
    numb.innerHTML = `<span>You</span><span class="text-9xl font-semibold">${count}</span>`;

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
    numb2.innerHTML = `<span class="text-9xl font-semibold">${count2}</span><span>bot</span>`;

    const para = document.createElement("h1");
    para.innerText = `You lost! computer chose ${randomEmoji}`;
    document.querySelector(".dis").appendChild(para);
    setTimeout(() => {
      document.querySelector(".dis").removeChild(para);
    }, 1000);
  } else if (randomEmoji < neutral.innerText && randomEmoji == "🤚") {
    count++;
    numb.innerHTML = `<span>You</span><span class="text-9xl font-semibold">${count}</span>`;

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
