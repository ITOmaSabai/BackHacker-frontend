import { AdvancedMarker, Pin } from "@vis.gl/react-google-maps"

export const MyMarker = ({ key, position }) => {
  return (
    <AdvancedMarker key={key} position={position} >
      <Pin
        background={'#22ccff'}
        borderColor={'#1e89a1'}
        glyphColor={'#0f677a'}
      >Now</Pin>
    </AdvancedMarker>
  )
}