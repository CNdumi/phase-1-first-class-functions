function receivesAFunction(callback){
   return callback();
}

function returnsANamedFunction(){
    return innerFunction = () => 'Howdy!';
}

function returnsAnAnonymousFunction(){
    return ()=> 'Howdy!';
}