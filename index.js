let button = document.querySelector('.containerButton');
let screen = document.querySelector('#screen');
let resetScreen = false;
let mayCount = false;
let temp = '';
let operator = '';
button.addEventListener('click', function(e) {
    let buttonClick = e.target;
    let valueButton = buttonClick.innerText;
    if (valueButton == 'C') {
        screen.value = '';
    } else if (valueButton == '<') {
        screen.value = screen.value.slice(0, -1);
    } else if (valueButton == '=') {
        screen.value = hitung(screen.value);
    } else if (buttonClick.classList.contains('operator')) {
        screen.value = screen.value + valueButton;
    } else {

        screen.value = screen.value + valueButton;

    }
});

function hitung(str) {
    if (str.includes('*')) {
        awal = parseFloat(getAwal(str, '*'))
        akhir = parseFloat(getAkhir(str, '*'))
        hasih = awal * akhir
        return hitung(str.replace(awal.toString() + "*" + akhir.toString(), hasil.toString()))
    }
    if (str.includes('/')) {
        a = parseFloat(getAwal(str, '/'))
        k = parseFloat(getAkhir(str, '/'))
        h = a / k
        return hitung(str.replace(a.toString() + "/" + k.toString(), h.toString()))
    }
    if (str.includes('+')) {
        a = parseFloat(getAwal(str, '+'))
        k = parseFloat(getAkhir(str, '+'))
        h = a + k
        return hitung(str.replace(a.toString() + "+" + k.toString(), h.toString()))
    }
    if (str.includes('-')) {
        a = parseFloat(getAwal(str, '-'))
        k = parseFloat(getAkhir(str, '-'))
        h = a - k
        return hitung(str.replace(a.toString() + "-" + k.toString(), h.toString()))
    }
    return str
}

function getAwal(str, delemiter) {
    var awal = str.split(delemiter)[0].split('');
    let aawal = 0;
    for (var i = awal.length - 1; i >= 0; i--) {

        if (awal[i] == "*" || awal[i] == "/" || awal[i] == "+" || awal[i] == "-") {
            aawal = str.split(delemiter)[0].substring(i + 1, awal.length);
        }
    }
    if (aawal == 0) {
        return str.split(delemiter)[0]
    }
    return aawal;
}

function getAkhir(str, delemiter) {
    var awal = str.split(delemiter)[1].split('');
    let aawal = 0;
    for (var i = 0; i < awal.lenth; i++) {
        if (awal[i] == "*" || awal[i] == "/" || awal[i] == "+" || awal[i] == "-") {
            aawal = str.split(delemiter)[1].substring(i, awal.length);
        }
    }
    if (aawal == 0) {
        return str.split(delemiter)[1]
    }
    return aawal;
}