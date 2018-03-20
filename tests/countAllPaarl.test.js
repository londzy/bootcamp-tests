describe('countAllPaarl', function(){


    it('functionthat returns false if a registration number is not for Paarl .', function(){
        assert.equal(countAllPaarl('CJ GP'), true);
    });

    it('functionthat returns true if a registration number is for Paarl .', function(){
        // this test will fail - can you fix it?
        assert.equal(countAllPaarl('CY 11234 GP CJ'),false);
    });

});
