export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__;

  // 如果第一次存储，不存在seller, 新建一个seller仓库， 根据id, 存一个小仓库
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {  // 如果有seller仓库了
    seller = JSON.parse(seller);
    // 如果在仓库中发现没存过这个id对应的对象， 新开一个id仓库，存起来
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  // id仓库里存的是  key: value
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
};

export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__;
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let res = seller[key];
  return res || def;
}
