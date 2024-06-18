 var request =  new XMLHttpRequest()
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
 request.onload = function(){
     var res = JSON.parse(request.response)
     console.log(res [0]);

     //Array Methoods:
     
     // 1.Solving problems using array functions on rest countries data.

     // a.Get all the countries from Asia continent/region using Filter method.

      var asiaCountries = res.filter((country) =>country.region=="Asia")
     console.log(asiaCountries);

     // b.Get all the countries with a population of less than 2lakhs using Filter method.

     var countries = res.filter((country)=>country.population<200000);
     console.log(countries);

     // c.Print the following details name,capital,flag using forEach method.

     res.forEach((element) => {
     console.log(`Name: ${element.name.common}, Capital: ${element.capital}, Flag: ${element.flag}`);
});
    
    //  d.Print the total population of countries using reduce method.

    let totalPopulation = res.reduce((total,country) =>total + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    // e.Print the country that uses US dollars as currency.

     let currency = res.filter((element)=>element.currencies && element.currencies.USD)
     currency.forEach(element => {
        console.log(element.name.common);
        
     });

    
    


}