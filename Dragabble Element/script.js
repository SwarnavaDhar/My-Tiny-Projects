var chosenElement;
const move = function () {
  const elements = document.querySelectorAll(".element");
  elements.forEach(element => {
    element.addEventListener("mousedown", () => {
      element.style.position = "absolute";
      chosenElement = element;

      document.onmousemove = (e) => {
        var x = e.pageX;
        var y = e.pageY;

        chosenElement.style.left = x - 100 + "px";
        chosenElement.style.top = y - 100 + "px"; 
      };
    });
    document.addEventListener("mouseup", () => {
      document.onmousemove = null;
    });
  });
};