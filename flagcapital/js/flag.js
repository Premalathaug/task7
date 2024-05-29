function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr);
    countryArr.forEach((a) => {
        console.log(a.name,a.capital,a.flags);
        
    })
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();