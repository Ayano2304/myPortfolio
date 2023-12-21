const scriptURL = "https://script.google.com/macros/s/AKfycbztfL0e5QvVdiodZEa01in8Gl44TiSJXWPBS6hJfLtYyDLVN1TUsGHF5DRg9dyNysI/exec";
const form = document.forms["submit-form-excel"];
const btn_submt = document.querySelector("#btn-kirim");
const tst_btn = document.querySelector("#btn-test");
const load_btn = document.querySelector("#btn-kirim-load");
const myForm = document.getElementById("my-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  load_btn.classList.toggle("d-none");
  btn_submt.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      Swal.fire({
        title: "Success!",
        text: "Terimakasih!! Data Berhasil Terkirim",
        icon: "success",
        confirmButtonText: "Tutup",
      });
      load_btn.classList.toggle("d-none");
      btn_submt.classList.toggle("d-none");
      form.reset();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Maaf Data Tidak Berhasil Terkirim",
      });
      load_btn.classList.toggle("d-none");
      btn_submt.classList.toggle("d-none");
      console.error("Error!", error.message);
    });
  form.reset();
});
