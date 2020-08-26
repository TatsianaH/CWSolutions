// https://www.codewars.com/kata/57089707fe2d01529f00024a/train/javascript

function checkAlive(health){
    if (health <= 0) {
        return false;
    } else {
        return true;
    }
}

// 2 case

function checkAlive(health) {
    return health > 0;
}