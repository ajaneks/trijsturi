function nolasa() {
    console.log("Nolasa")
    const malas = document.getElementsByClassName("mala");
    const m1 = parseFloat(mala1.value);
    const m2 = parseFloat(mala2.value);
    const m3 = parseFloat(mala3.value);
    if (m1 > 0 && m2 > 0 && m3 > 0) {
      console.log({m1,m2,m3});
      return {m1,m2,m3};
    } else {
      console.log(false);
      return false;
    }
  }


   function irTrijsturis(mala1,mala2,mala3){
  console.log("Vai ir trijsturis?");

  const m= nolasa();
  m1= m.m1; m2=m.m2; m3=m.m3;

 console.log(m1,m2,m3);

         if (m1<m2+m3 && m2<m1+m3 && m3<m2+m1)  {
            
             console.log(true);
             return true;
         }else{
             console.log(false);
             return false;
         }
     }


  function perimetrs(m1,m2,m3){
    const m = nolasa();
    m1=m.m1;m2=m.m2; m3=m.m3;  
    console.log(m1,m2,m3);
  const p=m1+m2+m3;
  console.log(p)
  return p;
}


    function calculate() {
        console.log("Rēķina");
      
        const m= nolasa();
        m1= m.m1; m2=m.m2; m3=m.m3;

    const pusp = (m1 + m2 + m3) * 0.5;
   console.log(pusp);
    
    const area = Math.sqrt(pusp * (pusp - m1) * (pusp - m2) * (pusp - m3));
    
      console.log (area);
      return area;
    }
    


      