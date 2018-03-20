var allFromTown = function(Reg, Location){
  var res = Reg.split(',');
 console.log(Reg);
  var num = [];
  for (var i=0;i<res.length;i++){
    var fromStellies = res[i];
  //console.log(numbers);
    if(fromStellies.startsWith(Location)){
       console.log(fromStellies);
       num.push(fromStellies);

    }


}
   return num;
  //return num;
  //console.log(num);
};
