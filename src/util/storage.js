import data from "../../seedData.json";

const STORAGE_KEY = "moodApp";

export function initStorage() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }
}

export function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function setData(newData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
}
