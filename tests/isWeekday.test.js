/*describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Andrew', greet('Andrew'));
    });
});*/

describe('isWeekday', function(){


    it('should return false for sunday is not a weekday. .', function(){
        assert.equal(isWeekday('sunday '), true);
    });

    it('should return true because friday is actually a weekday.', function(){
        // this test will fail - can you fix it?
        assert.equal(isWeekday('friday'),true);
    });

});
