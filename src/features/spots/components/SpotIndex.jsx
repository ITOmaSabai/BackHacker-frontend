import { Marker } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useSpotsContext } from '../../../contexts/SpotsContext';

export const SpotIndex = ({handleMarkerClick}) => {
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
          <Marker
            key={spot.id}
            position={{
              lat: spot.lat,
              lng: spot.lng
            }}
            onClick={() => handleMarkerClick(spot.id)}
          />)
      ) : (
        ""
      )}
    </>
  )
}