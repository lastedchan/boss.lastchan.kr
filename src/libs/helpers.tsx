export function reorder<T>(arr: T[], from: number, to: number) {
  const arr2 = [...arr];
  arr2.splice(to, 0, arr2.splice(from, 1)[0]);
  return arr2;
}

export function changeArray<T>(arr: T[], key: number, value?: T): T[] {
  if (key < 0) key = arr.length;
  return value ? [...arr.slice(0, key), value, ...arr.slice(key + 1)] : [...arr.slice(0, key), ...arr.slice(key + 1)];
}

export function toLocaleString(value: number) {
  const arr = ["", "만", "억", "조"];
  let v = String(value);

  let res = "";

  let i = 0;
  while (v.length) {
    const _ = v.slice(-4);
    res = (Number(_) > 0 ? _ + arr[i] + (res.length ? " " : "") : "") + res;

    v = v.slice(0, -4);
    i++;
  }

  return res;
}

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
