function nolasa() {
    console.log("Nolasa")
    const malas = document.getElementsByClassName("mala");
    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);
    if ((m1 > 0 && m2 > 0 && m3 > 0) && (m1 < m2 + m3 && m2 < m1 + m3 && m3 < m2 + m1)) {
        console.log({ m1, m2, m3 });
        return { m1, m2, m3 };
    } else {
        console.log(false);
        return false;
    }
}



function perimetrs(m1, m2, m3) {
    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;
    console.log(m1, m2, m3);
    const p = m1 + m2 + m3;
    console.log("Perimetrs =",p)
    return p;
}

function vienadmalu() {

}

function calculate() {
    console.log("Rēķina");

    const m = nolasa();
    m1 = m.m1; m2 = m.m2; m3 = m.m3;

    const pusp = (m1 + m2 + m3) * 0.5;
    console.log(pusp);
    const area = Math.sqrt(pusp * (pusp - m1) * (pusp - m2) * (pusp - m3));

    if (m1 == undefined || m2 == undefined || m3 == undefined) {
        return "Nav šāda trijstūra";
    } else if (m1 == m2 && m2 == m3 && m3 == m1) {
        return "Vienādmalu trijstūris. Trijstūra laukums ir " + area + " kvadrātcentimetri un tā perimetrs ir " + perimetrs(m1, m2, m3) +" cm.";
    } else if (m1 == m2 || m2 == m3 || m1 == m3) {
        return "Vienāsānu trijstūris. Trijstūra laukums ir " + area + " kvadrātcentimetri un tā perimetrs ir " + perimetrs(m1, m2, m3) +" cm.";
    } else if (m1 != m2 || m2 != m3 || m1 != m3) {
        return "Dažādmalu trijstūris. Trijstūra laukums ir " + area + " kvadrātcentimetri un tā perimetrs ir " + perimetrs(m1, m2, m3) +" cm.";
    }


}

function izvade() {

    const teksts = calculate()
    const drukat = document.getElementById("izvade");
    drukat.innerHTML = teksts;
   


}
