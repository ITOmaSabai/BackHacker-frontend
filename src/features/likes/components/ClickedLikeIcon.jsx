import { Player } from "@lottiefiles/react-lottie-player";
import { useRef, useEffect } from "react";
import clickedFavoriteIcon from "../../../clickedFavoriteIcon"
import { Box } from "@mui/material";

export const ClickedLikeIcon = ({ on }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      return;
    }
    if (on) {
      playerRef.current.play();
    } else {
      playerRef.current.stop();
    }
  }, [on]);

  return (
    <Box position={"absolute"} sx={{width: "50px", height: "40px", overflow: "hidden"}}>
      <Player
        ref={playerRef}
        keepLastFrame
        speed={3}
        src={clickedFavoriteIcon}
        style={{
          position: "relative",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -40%)",
          height: "200px",
          width: "200px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
    </Box>
  );
};