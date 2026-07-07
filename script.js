const button = document.getElementById("greetBtn");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "สวัสดี! หน้าเว็บของคุณพร้อมใช้งานแล้ว";
  });
}
