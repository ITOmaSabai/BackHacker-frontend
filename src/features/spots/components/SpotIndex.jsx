import { Marker } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { getSpots } from '../api/getSpots';

export const SpotIndex = ({handleMarkerClick}) => {
  const [ spots, setSpots ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSpots = await getSpots();
        setSpots(fetchedSpots);
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