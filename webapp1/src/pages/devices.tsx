import * as React from 'react'
import { useParams } from 'react-router-dom'
import StreamDevices from '../components/devices/stream'
import { useStyletron } from 'baseui'

const DevicesPage: React.FC<{}> = () => {
  const [css, theme] = useStyletron()
  const params = useParams()
  console.log(params)
  return (
    <div
      className={css({
        maxWidth: '999px',
        padding: theme.sizing.scale400,
        margin: `${theme.sizing.scale600} auto`,
      })}
    >
      <StreamDevices />
    </div>
  )
}

export default DevicesPage
