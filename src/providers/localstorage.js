class LocalStorage {
  constructor(key) {
    this.key = key;
  }

  set() {
    localStorage.setItem(this.key, JSON.stringify(this.data));
  }

  get() {
    return JSON.parse(localStorage.getItem(this.key));
  }
  clear() {
    localStorage.clear();
  }
}

export default LocalStorage = new LocalStorage();
