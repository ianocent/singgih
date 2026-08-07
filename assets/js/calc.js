function fmt(n) {
    return n.toLocaleString('id-ID');
}
function setModel(val) {
    if (val) {
        document.getElementById('cOtr').value = val;
        hitung();
    }
}
function hitung() {
    var otr = parseFloat(document.getElementById('cOtr').value) || 0;
    var dp = parseFloat(document.getElementById('cDp').value) || 0;
    var bunga = parseFloat(document.getElementById('cBunga').value) || 0;
    var tenor = parseInt(document.getElementById('cTenor').value, 10) || 12;
    var pokok = Math.max(otr - dp, 0);
    var totalBunga = pokok * (bunga / 100) * (tenor / 12);
    var cicilan = (pokok + totalBunga) / tenor;
    var out = document.getElementById('cOut');
    if (!out) return;
    out.innerHTML =
        'Harga OTR: <b>Rp ' + fmt(Math.round(otr)) + '</b><br>' +
        'DP: Rp ' + fmt(Math.round(dp)) + '<br>' +
        'Pokok kredit: Rp ' + fmt(Math.round(pokok)) + '<br>' +
        'Estimasi cicilan: <b>± Rp ' + fmt(Math.round(cicilan)) + '</b>/bulan &times; ' + tenor + ' bulan' +
        '<br><small>Simulasi kasar, bunga flat. Penawaran akurat minta ke sales via WA.</small>';
}
