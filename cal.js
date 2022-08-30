function displayNum(n){
    result.value += n
}
function allClear(){
    result.value=""
}
function evalFuntn(){
    // expr = result.value
    // out = eval(expr)
    // result.value = out
    result.value = eval(result.value)

}
function del(){
    curstr =  result.value
    result.value = curstr.slice(0,-1)
}