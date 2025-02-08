const febHolidays = [
    "Dekh, i know aaj wo log huaz khas gye",
    "bina bataye tujhe bura laga",
    "All because of Kaavya kyuki wo",
    "tere saath comfortable nhi thi",
    "usse apni khud ki galti nhi lagg rhi kuch, ",
    "ismein bhi teri hi galti bata di ki tune block kiya",
    "apne actions nhi dikhe usse aur baakio ne bhi",
    "usse hi prioritize kiya",
    "they don't value you baby, aur unki harkatein dekh",
    "ke tu bhi khud ko under-value matt karr","You deserve everything in this world,",
    "Humesha khush rehni chahiye tu",
    "Don't let those who are unable to see your worth",
    "make you think you are unworthy",
    "Don't ever doubt yourself",
    "Your heart is too pure for this unnecessary sorrow",
    "Always remember, priceless hai tu. I love you ❤"

  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  