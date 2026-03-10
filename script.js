const message = `In your patience, I find my calm,
A gentle touch, a soothing balm.
You love me whole, both strong and weak,
Even flaws I try to hide, you seek.

Clingy arms that never tire,
Holding me close, a warm desire.
You understand without a word,
In your embrace, my soul is heard.

Encouraging my heart, setting it free.
You love me the way I longed to be,
A bond so deep, it has no end.
So here’s my heart, today I say,
I’ll love you more each passing day.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}