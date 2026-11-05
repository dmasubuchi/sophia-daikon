// だいこんの部分ごとの味と、向いている料理
const PARTS = {
  top: { name: "上（葉に近い方）", taste: "甘くて水分が多い。", dishes: ["大根サラダ", "大根おろし", "なます"] },
  middle: { name: "まん中", taste: "やわらかく、味のバランスがよい。", dishes: ["ふろふき大根", "おでん", "ぶり大根"] },
  bottom: { name: "下（先の方）", taste: "辛みが強い。", dishes: ["薬味の大根おろし", "漬け物", "みそ汁の具"] },
};

const DISHES = ["ふろふき大根", "おでん", "ぶり大根", "大根サラダ", "切り干し大根の煮物", "大根のみそ汁", "べったら漬け", "大根もち"];

function showPart(key) {
  const part = PARTS[key];
  document.querySelectorAll(".daikon .part").forEach((el) => el.classList.toggle("on", el.dataset.part === key));
  const answer = document.getElementById("answer");
  answer.innerHTML = "";
  const title = document.createElement("h3");
  title.textContent = part.name;
  const taste = document.createElement("p");
  taste.textContent = part.taste;
  const dishes = document.createElement("div");
  dishes.className = "dishes";
  part.dishes.forEach((d) => {
    const tag = document.createElement("span");
    tag.textContent = d;
    dishes.appendChild(tag);
  });
  answer.append(title, taste, dishes);
}

document.querySelectorAll(".daikon .part").forEach((el) => {
  el.addEventListener("click", () => showPart(el.dataset.part));
});

document.getElementById("pick").addEventListener("click", () => {
  const dish = DISHES[Math.floor(Math.random() * DISHES.length)];
  document.getElementById("dish").textContent = dish;
});

document.getElementById("now").textContent = new Date().toLocaleString("ja-JP");
