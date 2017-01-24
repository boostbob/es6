// 复制N个对象的属性到目标对象
export function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}
