function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr);
    const asia=countryArr.filter(a=>{
        if(a.region==="Asia"){
            return a.name;

        }
    })
console.log(asia);
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();