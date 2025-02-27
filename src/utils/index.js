export const isExtension = () => !!window.chrome?.devtools;
export const copyValue = (value) => {
  if (typeof value !== 'string') {
    return Promise.reject(new Error('无法复制非字符串类型数据'));
  }
  const textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  return new Promise((resolve, reject) => {
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        resolve();
      } else {
        reject();
      }
    } catch (e) {
      reject(e);
    }
    document.body.removeChild(textarea);
  })
}
export const throttle = (func, delay) => {
  let timerId;
  return () => {
    if (!timerId) {
      func.apply(this, arguments);
      timerId = setTimeout(() => {
        timerId = null;
      }, delay);
    }
  }
}
export const getCusFormatTime=(timestamp) => {
  const time=new Date(timestamp);
  const fullYear=time.getFullYear();
  const month=String(time.getMonth()+1).padStart(2,"0");
  const day=String(time.getDate()).padStart(2,"0");
  const hour=String(time.getHours()).padStart(2,"0");
  const minute=String(time.getMinutes()).padStart(2,"0");
  const second=String(time.getSeconds()).padStart(2,"0");
  const mSecond=String(time.getMilliseconds()).padStart(3,"0");
  return `${fullYear}/${month}/${day} ${hour}:${minute}:${second}:${mSecond}`;
}
