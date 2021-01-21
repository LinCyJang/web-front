const formatTime = (fmt, date) => {
  // yyyy-MM-dd hh:mm:ss
  if (
    /^((19|20|21|22)[0-9]{2})((0[1-9])|(1[0-2]))((0[1-9])|((1|2)[0-9])|(3[0-1]))$/.test(
      date
    )
  ) {
    date = date.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3");
    return date;
  }

  let crtTime = new Date(date);
  let o = {
    "M+": crtTime.getMonth() + 1, //月份
    "d+": crtTime.getDate(), //日
    "h+": crtTime.getHours(), //小时
    "m+": crtTime.getMinutes(), //分
    "s+": crtTime.getSeconds(), //秒
    "q+": Math.floor((crtTime.getMonth() + 3) / 3), //季度
    S: crtTime.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (crtTime.getFullYear() + "").substr(4 - RegExp.$1.length)
    );

  for (let k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};

// 数组去重
const unique = arr => {
  const res = new Map();
  return arr.filter(a => !res.has(a) && res.set(a, 1));
};

// 生成导航dom数组
const selectAllTitle = () => {
  let title = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  let navList = Array.from(title);
  navList.forEach(item => {
    item.name = item.innerHTML;
  });
  navList.forEach(el => {
    let index = el.localName.indexOf("h");
    el.lev = "lev" + el.localName.substring(index + 1, el.localName.length);
  });
  return navList;
};

export default function(Vue) {
  Vue.prototype.$utils = { formatTime, unique, selectAllTitle };
}
