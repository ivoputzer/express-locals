var locals = require('..')
  , expect = require('expect.js')

describe('locals', function (){
  it('returns a callable', function (){
    expect(locals).to.be.a('function')
  })
  it('returns a milleware function', function (){
    expect(locals()).to.be.a('function')
  })
  it('merges given object into res.locals', function (){
    var req, res = {locals: {}}
    locals({foo: 'bar'})(req, res, () => {})
    expect(res.locals.foo).to.be('bar')
  })
})
