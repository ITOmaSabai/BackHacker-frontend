import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Spinner from "../../../components/Elements/Spinner/Spinner";

export const SpotCard = ({ spots, text }) => {

  if (!spots) {
    return <div><Spinner /></div>
  }

  return (
    <>
      {spots.length > 0 ? (
        spots.map((spot) => (
          <Box>
            <Link
              to={`/spots/${spot.id}`}
              style={{color: "inherit", textDecoration: "none"}}
              state={{ open: true, spotId: spot.id }}
            >
              <Typography>
                {spot.name}
              </Typography>
              <img src={spot.videos[0].thumbnail_url} alt="動画のサムネイル" />
            </Link>
          </Box>
        ))
      ) : (
        <Typography >{text}したスポットはありません</Typography>
      )}
    </>
  )
}