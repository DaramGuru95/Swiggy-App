import { createStore } from "redux";
import { createScanner } from "typescript";

const initialState = {
  balance: 0,
  customerName: "",
  mobileNo: null,
};

function reducer() {
  const daram = createScanner();
}
