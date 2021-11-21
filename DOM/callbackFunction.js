function person(name, age, bou) {
    console.log('Name: ', name);
    console.log('Age: ', age);
    bou();
    console.log('\n');
}
function arfina() {
    console.log('Bou: Arfina');
}
function sundori() {
    console.log('Bou: Sundori');
}
function surovi(){
    console.log('Bou: Surovi');
}
person('Morshed', 24, arfina);
person('Jobbar', 55, sundori);
person('Mojnu', 23, surovi);