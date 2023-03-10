function set<T>(key: string, data: T) {
  const _data = JSON.stringify(data);
  localStorage.setItem(key, _data);
}

function get<T>(key: string): T | null {
  const stringValue = localStorage.getItem(key);
  return stringValue ? JSON.parse(stringValue) : null;
}

function remove(key: string) {
  localStorage.removeItem(key);
}
export const storage = { set, get, remove };
