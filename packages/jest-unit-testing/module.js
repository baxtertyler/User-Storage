function sum(a, b) {
    return a + b;
}

function div (a, b){
    return a / b;
}
  
function containsNumbers(text){
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text.charAt(i)))
            return true;
    }
    return false;
}

export default { sum, div, containsNumbers };