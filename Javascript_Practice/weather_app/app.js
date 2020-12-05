window.addEventListener('load', ()=> {
       let now = new Date();
         let long;
       let lat;
       let locationDisplay = document.querySelector('.location-name');
       let temperatureDisplay = document.querySelector('.temp-value');
       let tempDescriptionDisplay = document.querySelector('.temperature-description');



// Check location and weather, display current info
       if(navigator.geolocation){
           navigator.geolocation.getCurrentPosition(position => {
              long = position.coords.longitude
              lat = position.coords.latitude

              const proxy = 'https://cors-anywhere.herokuapp.com/';
              const darksky_api = `${proxy}https://api.darksky.net/forecast/4dfc97b2c9419c9854a352c80923cf89/${lat},${long}?units=si`;
              const geocoding_api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyBXMEzm7Bz3_uD7PDc6zHR-1JZE7BHmxCc`;
             
              fetch(geocoding_api)
                .then(geo_response => {
                    return geo_response.json();
                })
                .then(geo_data => {
                    console.log(geo_data);
                    const location = geo_data.results[8].formatted_address;
                    locationDisplay.textContent = location;
                })

              fetch(darksky_api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temperature, summary, icon} = data.currently;
                    const timezone = data.timezone;
                    document.getElementsByTagName("h1")[0].style.fontSize = '72px';
                    temperatureDisplay.textContent = Math.round(temperature);
                    tempDescriptionDisplay.textContent = summary;
                    setIcons(icon);
                })
           });
    
       } else {
           h1.textContent = "Please enable locations for this site."
       }

    //    Check time and set background.
       if(now.getHours() >= 20) {
            document.getElementsByClassName("container")[0].style.background = 'linear-gradient(150deg, rgba(254,254,254,1) 0%, rgba(255,135,51,1) 64%);';
       } else if (now.getHours() <= 8) {
            document.getElementsByClassName("container")[0].style.background = 'linear-gradient(150deg, rgba(254,254,254,1) 0%, rgba(122,224,255,1) 64%)';
    }

    function setIcons(icon) {
        const iconFunct = icon.replace(/-/g,"_").toUpperCase();
        const skycons = new Skycons({"color": "#254441"});
        skycons.add("icon1", Skycons[iconFunct]);
        skycons.play();
        return skycons.set("icon1", Skycons[iconFunct]);
    }
    
});

function changeBackground() {
    color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByClassName("container")[0].style.background = color;
}

backgroundbtn.addEventListener("click",changeBackground);