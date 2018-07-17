function checkLocation(){
    // read email by querySelector API
    let location1 = document.querySelector("#id_location").value;
    document.getElementById('location1').innerHTML=location1;
    var location =encodeURIComponent(location1);
    
    // validate location
    if (!location || location === ""){
        alert("Blank Value supplied");
        return;
    }

    // query URL
    let queryURL ="http://localhost:3000/"+location;
    
    // make AJAX request using fetch API
    fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {
            displayResult(result);
        })
        .catch(function (error) {
            displayError(error.message);
        });
    function displayResult(result)
   { 
       document.getElementById('pe').src='https://www.metaweather.com/static/img/weather/'+result.consolidated_weather[0].weather_state_abbr+'.svg'
	  document.getElementById('date').innerHTML=result.consolidated_weather[0].applicable_date;
       document.getElementById('min').innerHTML=result.consolidated_weather[0].min_temp;;
       document.getElementById('max').innerHTML=result.consolidated_weather[0].max_temp;
       document.getElementById('curr').innerHTML=result.consolidated_weather[0].the_temp;
       document.getElementById('wind').innerHTML=result.consolidated_weather[0].wind_speed;
       document.getElementById('date1').innerHTML=result.consolidated_weather[1].applicable_date;
       document.getElementById('min1').innerHTML=result.consolidated_weather[1].min_temp;;
       document.getElementById('max1').innerHTML=result.consolidated_weather[1].max_temp;
       document.getElementById('curr1').innerHTML=result.consolidated_weather[1].the_temp;
       document.getElementById('wind1').innerHTML=result.consolidated_weather[2].wind_speed;
       document.getElementById('date2').innerHTML=result.consolidated_weather[2].applicable_date;
       document.getElementById('min2').innerHTML=result.consolidated_weather[2].min_temp;;
       document.getElementById('max2').innerHTML=result.consolidated_weather[2].max_temp;
       document.getElementById('curr2').innerHTML=result.consolidated_weather[2].the_temp;
       document.getElementById('wind2').innerHTML=result.consolidated_weather[2].wind_speed;
   };
   function displayResult(result)
   {
      
	  document.getElementById('error2').innerHTML="Oop's sorry It's seems to be an "+result.message;
   };
}


    
    


