function New(fn) {
    //new 规定返回新对象
    const newObj = {}
    if(fn.prototype !== null) {
      // 新对象隐式原型链到构造函数的prototype属性
      newObj.__proto__ = fn.prototype
    }
    //将this指向到当前创建的新对象
    const rtObj = fn.apply(newObj,Array.prototype.slice.call(arguments,1))
    //如果执行函数返回不是对象类型，那就返回当前对象的引用
    if((typeof rtObj === 'object' || typeof rtObj === 'function') && rtObj !== null) {
      return rtObj
    }
    return newObj
}
