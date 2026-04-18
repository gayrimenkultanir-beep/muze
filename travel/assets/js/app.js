console.log("Gezi Rehberi aktif");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("button");
  if(btn){
    btn.addEventListener("click", () => {
      alert("Yorum eklendi (demo)");
    });
  }
});
