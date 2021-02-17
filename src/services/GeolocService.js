import ResponseModel  from "../../src/model/ResponseModel";


const geoloc = (loc) => new Promise(resolve => {
  console.log(loc)
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+loc.numeroendereco+loc.endereco+','+loc.cidade+','+loc.UF+'&key=AIzaSyDmS3W_0uMWgKE-fF7Dkhw-bIKDz3ZxpXk'
   fetch(url)
      .then(response => response.json())
      .then(response => {
        // AsyncStorage.setItem('user',JSON.stringify(response));
        const resp = ResponseModel()
       
        resp.status = 200
        resp.message = 'Sucesso'
        resp.data = JSON.stringify(response)
        resp.lat = response.results[0].geometry.location.lat
        resp.lng = response.results[0].geometry.location.lng
        //console.log(response.results[0].geometry.location)
        resolve(resp)

     
      })
      .catch(error => {
        console.log(error)
         const resp = ResponseModel()
         resp.status = 500
         resp.message = error.message
         resp.data = JSON.stringify(error)
     

        resolve(resp);
      });


  
})

const GeolocService = {
  geoloc
}

export default GeolocService
