// function greet (name, cb) {
//     console.log(cb(name));
     
//   }
  
//   greet('Ada Lovelace', function (name) { return 'Hello there, ' + name; });
//   // => "Hello there, Ada Lovelace"



// function bye(name, fullStop, cb){
//     console.log(cb(fullStop, name));
    
// }

// bye('Past','.',function (fullStop,name){ return 'Bye bye,'+ name+ fullStop})

function receivesAFunction(spy){
     console.log("");
spy()
}

function returnsANamedFunction(){
    return function name(){
        
    }

}

function returnsAnAnonymousFunction(){
    return function(){

    }
}
