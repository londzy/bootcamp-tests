var fromWhere = function(regNum){
  switch(regNum){
    case "CY":
      return "Bellville";
     break;
    case "CJ":
      return "Paarl";
     break;
    case "CA":
      return "Cape Town";
     break;
    default :
       return "Some other place!";

         }
};

assert.equal(fromWhere("CY"),"Bellville");
assert.equal(fromWhere("CJ"),"Paarl");
assert.equal(fromWhere("CA"),"Cape Town");
assert.equal(fromWhere("NUZ"),"Some other place!");
