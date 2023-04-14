const btn = document.getElementById("hitung");
btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Harap isi berat badan & tinggi badan!");
    return;
  }

  let bmi = weight / (height / 100) ** 2;
  bmi = bmi.toFixed(2);

  document.querySelector("#hasil").innerHTML = bmi;
  let status = "";

  if (bmi < 18.5) {
    status = "Kurang";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    status = "Ideal";
  } else if (bmi >= 25 && bmi <= 29.9) {
    status = "Berlebih";
  } else if (bmi >= 30) {
    status = "Obesitas";
  } else {
    alert("Harap isi berat badan & tinggi badan dengan benar!");
    return;
  }

  document.querySelector(
    ".komentar").innerHTML = `Kategori Berat Anda <span>${status}</span>`;
});
