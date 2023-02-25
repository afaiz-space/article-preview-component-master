var share = document.querySelectorAll(".share");
share.forEach(function (share) {
  share.addEventListener("click", function () {
    var x = document.querySelector(".social-container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
});
