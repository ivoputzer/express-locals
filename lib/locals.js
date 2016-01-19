exports = function (locals){
  return function (req, res, next){
    for (var key in locals) {
      if (locals.hasOwnProperty(key)) {
        res.locals[key] = locals[key]
      }
    }
    next()
  }
}
module.exports = exports
