function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr);
    let popul=countryArr.filter((a)=>{
        return a.population<200000;

    })
    console.log(popul);
    
    }
  
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();