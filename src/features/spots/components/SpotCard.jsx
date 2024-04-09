import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const SpotCard = ({ spots }) => {

  return (
    <>
      {spots ? (
        spots.map((spot) => (
          <Box>
            <Link
              to={`/spots/${spot.id}`}
              style={{color: "inherit", textDecoration: "none"}}
            >
              <Typography>
                {spot.name}
              </Typography>
              <img src={spot.videos[0].thumbnail_url} alt="動画のサムネイル" />
            </Link>
          </Box>
        ))
      ) : (
        <Typography >投稿したスポットはありません</Typography>
      )}
    </>
  )
}