/*describe('countAllPaarl', function(){


    it('functionthat returns false if a registration number is not for Paarl .', function(){
        assert.equal(countAllPaarl('CJ GP'), true);
    });

    it('functionthat returns true if a registration number is for Paarl .', function(){
        // this test will fail - can you fix it?
        assert.equal(countAllPaarl('CY 11234 GP CJ'),false);
    });

});*/



describe('countAllPaarl', function(){

    it('function that count all registration numbers from Paarl ', function(){
    //  var count = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
;
      //  assert.deepEqual(countAllPaarl(count),[CJ 678 543,CJ 67890]);
  //  });
  assert.equal(countAllPaarl('CJ 345 123', 'CJ 2345', 'CL 123-546', 'CK 345' , 'CJ 123') , 1 )
assert.equal(countAllPaarl('CJ 345 123, CK 345, CJ 123') , 2 )
});


it('function that count all registration numbers from Paarl ', function(){
//  var count = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
;
  //  assert.deepEqual(countAllPaarl(count),[CJ 678 543,CJ 67890]);
//  });
assert.equal(countAllPaarl('CJ 345 123', 'CJ 2345', 'CL 123-546', 'CK 345' , 'CJ 123') , 1 )
assert.equal(countAllPaarl(', CK 345') , 0 )
});

});
