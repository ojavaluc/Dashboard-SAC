document.addEventListener("DOMContentLoaded", function () {
  const melhorias = document.querySelectorAll(".melhoria");

  melhorias.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.backgroundColor = "#fce4ec";
      item.style.border = "1px solid #e91e63";
      item.style.padding = "10px";
      item.style.borderRadius = "6px";
      item.style.transition = "all 0.3s ease";
    });

    item.addEventListener("mouseleave", () => {
      item.style.backgroundColor = "transparent";
      item.style.border = "none";
      item.style.padding = "0";
    });
  });
});