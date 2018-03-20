
describe('countRegNumber', function(){

    it(' It should return number registration numbers in the string that is for that town.', function(){
      var count = "CL 124,CY 567,CL 345, CJ 456,CL 341";
        assert.equal(countRegNumber(count), 3);
    });

});
