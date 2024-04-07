export const ReverseGeocode = async ( latLng ) => {
  try {
    const geocoder = new window.google.maps.Geocoder();
    const response = await geocoder.geocode({ location: { lat: latLng.lat, lng: latLng.lng } });
    const resultAddress = response.results[0];
    return resultAddress
  } catch (error) {
    console.error('Reverse Geocode was not successful for the following reason: ' + error);
    return Promise.reject(error);
  }
}