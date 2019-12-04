function New(fn) {
    const newObj = {}
    if(fn.prototype !== null) {
      newObj.__propto__ = newObj.prototype
    }
    const rtObj = fn.apply(newObj,Array.prototype.slice.call(arguments,1))
    if((typeof rtObj === 'object' || typeof rtObj === 'function) && rtObj !== null) {
      return rtObj
    }
    return newObj
}
