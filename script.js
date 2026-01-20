console.log("Portfolio ready");
document.querySelectorAll(".icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.classList.add("active");

    setTimeout(() => {
      icon.classList.remove("active");
    }, 400);
  });
});
