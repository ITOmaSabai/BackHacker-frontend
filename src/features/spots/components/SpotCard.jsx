import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Elements/Spinner/Spinner";

export const SpotCard = ({ spots, text }) => {

  if (!spots) {
    return <div><Spinner /></div>
  }

  return (
    <>
      <Grid container spacing={2} style={{ width: '100%', margin: '0 auto' }} >
        {spots.length > 0 ? (
          spots.map((spot) => (
            <Grid item xs={4} >
              <Link
                to={`/spots/${spot.id}`}
                style={{color: "inherit", textDecoration: "none"}}
                state={{ open: true, spotId: spot.id }}
              >
                <Typography>{spot.name}</Typography>
                <img
                  src={spot.videos[0].thumbnail_url}
                  alt="動画のサムネイル"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Link>
            </Grid>
          ))
        ) : (
          <Typography >{text}したスポットはありません</Typography>
        )}
      </Grid>
    </>
  )
}