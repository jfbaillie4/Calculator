//need to use jsdom to replicate dom elements

const operate = require('./calc-scripts');


describe('calc', function() {
    it('works with a simple sum', function() {
        expect(operate(["4","+","5"])).toEqual([9]);
    });
    it('works with a simple subtraction', function() {
        expect(operate(["5","-",'675'])).toEqual([-670])
    })
    it('knows order of operations', function() {
        expect(operate(["5","-","67","*","4","/","3","+","32"])).toEqual([-52.33333])
    })
    it('can deal with floating points', function() {
        expect(operate(["5.3","-","3.2"])).toEqual([2.1])
    })
    it('can deal with very large floating points', function() {
        expect(operate(["5000000000000000000000000003.3", "-", "3.2"])).toEqual([5000000000000000000000000000.1])
    })
    it('can deal with very large negative floating points', function() {
        expect(operate(["-5000000000000000000000000003.3", "-", "3.2"])).toEqual([-5000000000000000000000000006.5])
    })
});