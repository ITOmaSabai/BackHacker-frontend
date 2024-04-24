import { useEffect } from 'react';
import { useSpotsContext } from '../../../contexts/SpotsContext';
import { MyMarker } from '../../../components/Elements/Markers/MyMarker';
import { SpotMarker } from '../../../components/Elements/Markers/SpotMarker';

export const SpotIndex = ({ handleMarkerClick, clickedMarkerId }) => {
  const { spots, loadSpots } = useSpotsContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        loadSpots();
      } catch (error) {
        console.error('Failed to fetch user data', error);
      }
    }
    fetchData();
  }, [])

  return (
    <>
      {spots ? (
        spots.map((spot) =>
          <>
            <SpotMarker
              key={spot.id}
              position={{
                lat: spot.lat,
                lng: spot.lng
              }}
              onClick={() => handleMarkerClick(spot.id)}
              avatar={spot.user.avatar}
            />
            {spot.id === clickedMarkerId &&
              <MyMarker
                position={{
                  lat: spot.lat,
                  lng: spot.lng
                }}
                onClick={() => handleMarkerClick(spot.id)}
              />
            }
          </>
        )
      ) : (
        ""
      )}
    </>
  )
}