describe('fromWhere', function(){
    //var count = 'morning, afternoon, nightshift';

    it('it should return Bellville for CY input', function(){
      assert.equal(fromWhere("CY"),"Bellville");
    });

    it('it should return Paarl for CJ input.', function(){
        // this test will fail - can you fix it?
      assert.equal(fromWhere("CJ"),"Paarl");
    });

    it('it should return Capetown for CA input.', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere("CA"),"Cape Town");
    });

    it('should return unapplicacable if input is not a registration number.', function(){
        // this test will fail - can you fix it?
        assert.equal(fromWhere("NUZ"),"Some other place!");
    });


});
