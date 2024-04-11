import { Marker } from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import { useSpotsContext } from '../../../contexts/SpotsContext';

export const LikedSpotIndex = ({handleMarkerClick}) => {
  const { spots, loadSpots } = useSpotsContext();
  const { currentUser } = useFirebaseAuth();
  sonst [ likedSpots, setLikedSpots ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await loadSpots();
        const likedSpotList = await spots.filter(spot => spot.likes.some(
          like => parseInt(like.user_id) === parseInt(currentUser.id)));
          setLikedSpots(likedSpotList);
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