class Modal {
  constructor() {
    this.value = document.getElementById("value");
    this.btns = document.querySelectorAll(".btn");
    this.count = 0;
    this.events();
  }
  events() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.element = e.currentTarget.classList;
        this.valueChanger();
        this.colorChanger();
      });
    });
  }
  colorChanger() {
    this.count > 0
      ? (this.value.style.color = "red")
      : this.count < 0
      ? (this.value.style.color = "green")
      : (this.value.style.color = "blue");
  }
  valueChanger() {
    this.element.contains("decrease")
      ? this.count--
      : this.element.contains("increase")
      ? this.count++
      : (this.count = 0);

    return (this.value.textContent = this.count);
  }
}

export default Modal;
