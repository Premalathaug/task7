function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr);
    let population=countryArr.reduce((accum,a)=>{
        return accum+a.population;
    })
    console.log(population);
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();