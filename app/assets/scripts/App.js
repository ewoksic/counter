import "../styles/styles.css";
import "lazysizes";
import Modal from "./modules/Counter";

let modal = new Modal();

if (module.hot) {
  module.hot.accept();
}
