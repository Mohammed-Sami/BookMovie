import { createStore } from "redux";

var item = sessionStorage.getItem('user');

export default createStore(item);