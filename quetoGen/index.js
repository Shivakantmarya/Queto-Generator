let randomQueto = document.querySelector(".queto");

let author = document.querySelector(".author");

let button = document.querySelector("button");

let speak = document.querySelector(".bolo");

button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://dummyjson.com/quotes")
    .then((res) => res.json())
    .then((result) => {
      const data = result.quotes;
      console.log(data);
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQ = data[randomIndex];
      randomQueto.innerHTML = `${randomQ.quote}`;
      author.innerHTML = `${randomQ.author}`;
    });
});

speak.addEventListener("click", (e) => {
  e.preventDefault();
  let speech = new SpeechSynthesisUtterance();
  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 0.7;
  speak.voice = window.speechSynthesis.getVoices()[102];
  speech.text = randomQueto.innerHTML;

  window.speechSynthesis.speak(speech);
  // window.speechSynthesis.getVoices(speech)[4];
});
