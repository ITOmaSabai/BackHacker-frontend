import { Marker } from '@vis.gl/react-google-maps';
import { useEffect } from 'react';
import { useSpotsContext } from '../../../contexts/SpotsContext';
import { useParams } from "react-router-dom";
import { MyMarker } from '../../../components/Elements/Markers/MyMarker';

export const LikedSpotIndex = ({handleMarkerClick, isClickedMarkerId}) => {
  const { userId } = useParams();
  const { likedSpots, loadLikedSpots } = useSpotsContext();

  useEffect(() => {
      const fetchData = async () => {
        try {
          loadLikedSpots(userId);
        } catch (error) {
          console.error('Failed to fetch user data', error);
        }
      }
      fetchData();
  }, [])

  return (
    <>
      {likedSpots ? (
        likedSpots.map((spot) =>
          <>
            <Marker
              key={spot.id}
              position={{
                lat: spot.lat,
                lng: spot.lng
              }}
              // onClick={() => handleMarkerClick(spot.id)}
            />
            {spot.id === isClickedMarkerId &&
              <MyMarker
                key={spot.id}
                position={{
                  lat: spot.lat,
                  lng: spot.lng
                }}
              />
            }
          </>
      )) : (
        ""
      )}
    </>
  )
}