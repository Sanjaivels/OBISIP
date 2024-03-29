function Solve(val) {
    var v = document.getElementById('solution');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('solution').value;
    var num2 = eval(num1);
    document.getElementById('solution').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('solution');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('solution');
    ev.value = ev.value.slice(0,-1);
 }