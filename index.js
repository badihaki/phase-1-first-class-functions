function receivesAFunction(funct){
    funct();
}

function returnsANamedFunction(){
    return receivesAFunction;
}

function returnsAnAnonymousFunction(){
    return function(){console.log(`ok!`)};
}