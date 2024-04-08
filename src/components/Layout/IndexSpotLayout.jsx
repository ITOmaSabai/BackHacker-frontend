export const IndexSpotLayout = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "row", height: "100%"}} >
      <Box sx={{height: "100%", width :"75%"}} >
        <MapView latLng={latLng} setLatLng={setLatLng}/>
      </Box>
      <Box sx={{height: "100%", width :"25%"}}>
      </Box>
    </Box>
  )
}