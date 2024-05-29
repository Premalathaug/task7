function reqListener() {
    const countryArr=JSON.parse(this.responseText);
    console.log(countryArr);
     for(i=0;i<countryArr.length;i++){
            if(countryArr[i].currencies==="USD")
            {
                console.log(countryArr[i].name,countryArr[i].currencies)
            }
        }
    
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", "https://restcountries.com/v3.1/all");
  req.send();