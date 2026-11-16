const openBtn = document.getElementById("openSurprise");
const giftReveal = document.getElementById("giftReveal");
const continueBtn = document.getElementById("continueBtn");
const wishBtn = document.getElementById("wishBtn");
const wishResult = document.getElementById("wishResult");
const backTop = document.getElementById("backTop");

openBtn.addEventListener("click", () => {
  giftReveal.classList.remove("hidden");
  openBtn.textContent = "Opened with love 💙";
  openBtn.disabled = true;
  giftReveal.scrollIntoView({behavior:"smooth", block:"center"});
  confettiHearts();
});
continueBtn.addEventListener("click", () => {
  document.getElementById("message").scrollIntoView({behavior:"smooth"});
});
wishBtn.addEventListener("click", () => {
  wishResult.classList.remove("hidden");
  wishBtn.textContent = "Wish made! ✨";
  confettiHearts();
});
backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

function confettiHearts(){
  const emojis=["💙","💗","✨","⭐","💕"];
  for(let i=0;i<18;i++){
    const item=document.createElement("span");
    item.textContent=emojis[Math.floor(Math.random()*emojis.length)];
    item.style.cssText=`position:fixed;left:${Math.random()*100}vw;top:-30px;font-size:${16+Math.random()*18}px;z-index:99;pointer-events:none;animation:fall ${3+Math.random()*3}s linear forwards`;
    document.body.appendChild(item);
    setTimeout(()=>item.remove(),6500);
  }
}
const style=document.createElement("style");
style.textContent="@keyframes fall{to{transform:translateY(110vh) rotate(400deg);opacity:0}}";
document.head.appendChild(style);
