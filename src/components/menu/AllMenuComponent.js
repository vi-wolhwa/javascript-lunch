import MenuComponent from "./MenuComponent";
import dispatcher from "../../domain/Dispatcher";
import MenuInstance from "../../domain/store/MenuStore";
import { MENU_ACTION, MENU_TITLE } from "../../abstracts/constants";

class AllMenuComponent extends MenuComponent {
  menuTitle = MENU_TITLE.ALL;

  connectedCallback() {
    super.connectedCallback();
    MenuInstance.subscribe(this);
    MenuInstance.publish();
  }

  handleEvent() {
    this.addEventListener("click", () => {
      dispatcher(MENU_ACTION.MENU_ALL);
    });
  }

  rerender(menu) {
    if (menu === "all") {
      this.borderColor = "var(--primary-color)";
      this.textColor = "var(--primary-color)";
      super.rerender();
      return;
    }
    this.borderColor = "var(--grey-200)";
    this.textColor = "var(--grey-300)";
    super.rerender();
  }
}

customElements.define("all-restaurants-menu", AllMenuComponent);
export default AllMenuComponent;
