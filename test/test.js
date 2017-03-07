var assert = require('assert'),
    expect = require('chai').expect,
    cid = require("../c1.js");

describe('Unit Tests All Scenarios', function() {
    it('generating pattern # of length 5', function() {
        expect(cid.generate(5, '#')).to.equal('#####');
    });
    
    it('generating pattern @ of length 10', function() {
        expect(cid.generate(10, '@')).to.equal('@@@@@@@@@@');
    });

    it('generate 10 digit random number',function(){
    	 expect(cid.generatePattern(10,'0')).with.lengthOf(10);
    })

    it('generate 3 digit random number',function(){
    	 expect(cid.generatePattern(3,'0')).with.lengthOf(3);
    })
});
