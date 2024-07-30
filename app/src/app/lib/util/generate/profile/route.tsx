import { ImageResponse } from 'next/og'
 
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 300,
          fontWeight: "bolder",
          background: 'transparent',
          color: 'whitesmoke',
        }}
      >
        TSpace
      </div>
    )
  )
}