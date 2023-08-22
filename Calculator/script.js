let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "C") {
      console.log(e.target);

      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
