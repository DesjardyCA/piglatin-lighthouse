function pigIt(){
  var args = process.argv;
  var out = "";

  if(args.length <= 2){
    console.log("error, please type some strings to be reversed!");

    return null;
  }

  for(var i = 2; i < args.length; i++){
    var temp2 = args[i].charAt(0);
    var temp = args[i].slice(1);

    out += temp + temp2 + "ay ";

  }

  console.log(out);

}

pigIt();