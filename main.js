const ball = document.querySelector(".ball");
const football_field = document.querySelector(".football_field");
const score_a = document.querySelector("#score_a");
const score_b = document.querySelector("#score_b");
const goals = document.querySelectorAll(".goal");

let score = { a: 0, b: 0 };

football_field.ondragover = (e) => {
  e.preventDefault();
};

football_field.ondrop = (event) => {
  event.preventDefault();
  console.log(event);
  

  const fieldRect = football_field.getBoundingClientRect();
  const x = event.clientX - fieldRect.left;
  const y = event.clientY - fieldRect.top;

  ball.style.top = y + "px";
  ball.style.left = x + "px";

  goals.forEach((goal, idx) => {
    const goalRect = goal.getBoundingClientRect();

    if (
      x + ball.offsetWidth > goalRect.left &&
      x < goalRect.right &&
      y + ball.offsetHeight > goalRect.top &&
      y < goalRect.bottom
    ) {
      if (idx === 0) {
        score.a++;
        score_a.innerHTML = score.a;
        alert("Ronaldo scored a goooooaal!");
      } else {
        score.b++;
        score_b.innerHTML = score.b;
        alert("Messi scored a goooooaal!");
      }

      ball.style.top = "50%";
      ball.style.left = "50%";
    }
  });
};
