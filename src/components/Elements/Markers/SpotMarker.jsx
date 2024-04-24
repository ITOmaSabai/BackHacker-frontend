import { Avatar } from "@mui/material"
import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps"

export const SpotMarker = ({ key, position, onClick, avatar }) => {
  return (
    <AdvancedMarker
      key={key}
      position={position}
      onClick={onClick}
    >
      <Pin
        // background={'#22ccff'}
        // borderColor={'#1e89a1'}
        // glyphColor={'#0f677a'}
      >
        {<Avatar
          src={avatar}
          sx={{ width: 24, height: 24 }}
          alt={`${avatar}`}
        >
        </Avatar>}
      </Pin>
    </AdvancedMarker>
  )
}