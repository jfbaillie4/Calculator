//need to use jsdom to replicate dom elements

const run = require('./calc-scripts');


describe('calc', function() {
    it('works with a simple sum', function() {
        expect(run(["4","+","5"], "Enter")).toEqual([9]);
    });
    it('works with a simple subtraction', function() {
        expect(run(["5","-",'675'], "Enter")).toEqual([-670])
    })
    it('knows order of operations', function() {
        expect(run(["5","-","67","*","4","/","3","+","32"], "Enter")).toEqual([-52.33333])
    })
    it('can deal with floating points', function() {
        expect(run(["5.3","-","3.2"], "Enter")).toEqual([2.1])
    })
    it('can deal with very large floating points', function() {
        expect(run(["5000000000000000000000000003.3", "-", "3.2"], "Enter")).toEqual([5000000000000000000000000000.1])
    })
    it('can deal with very large negative floating points', function() {
        expect(run(["-5000000000000000000000000003.3", "-", "3.2"], "Enter")).toEqual([-5000000000000000000000000006.5])
    })
    it('can deal with brackets', function() {
        expect(run(["(","5","+","6",")","*","(","2","-","3",")"], "Enter")).toEqual([-11])
    })
    it('can deal with layered brackets', function() {
        expect(run(["17","*","(","3","+","6","*","(","3","-","4",")","+","6",")"], "Enter")).toEqual([51])
    })
    it('can run on first digit', function() {
        expect(run([], "4")).toEqual(["4"])
    })
    it('can add a second digit', function() {
        expect(run(["3"],"4")).toEqual(["34"])
    })
    it('supports deletion', function () {
        expect(run(["4534","+","4534"], "Backspace")).toEqual(["4534","+","453"])
    })
    it('supports adding operators next to negatives', function() {
        expect(run(["10","/","-"], "2")).toEqual(["10", "/", "-2"])
    })
    it('accurately calculates operators next to negatives', function() {
        expect(run(["10","/","-2"], "Enter")).toEqual([-5])
    })
    it('cancels with c', function () {
        expect(run(["4353"], "c")).toEqual([])
    })
});