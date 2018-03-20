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


    it('find out if the parameter passed in is a day of the week (ie. Not a weekend day). .', function(){
        assert.equal(isWeekday('sunday '), true);
    });

    it('find out if the parameter passed in is a day of the week (ie. Not a weekend day)..', function(){
        // this test will fail - can you fix it?
        assert.equal(isWeekday('friday'),true);
    });

});
