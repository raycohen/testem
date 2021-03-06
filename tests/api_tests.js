var Api = require('../lib/api')
var sinon = require('sinon')
var Config = require('../lib/config')
var expect = require('chai').expect

describe('Api', function(){

  beforeEach(function(){
    sinon.stub(Config.prototype, 'read')
  })

  afterEach(function(){
    Config.prototype.read.restore()
  })

  it('forwards config', function(){
    var api = new Api()
    api.startDev({parallel: 5, on_exit: "test"})
    expect(api.config.read.callCount).to.equal(1)
    expect(api.config.get('on_exit')).to.equal('test')
    expect(api.config.get('parallel')).to.equal(5)
  })

})
