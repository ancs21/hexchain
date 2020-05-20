import * as React from 'react'
import { DeepstreamClient } from '@deepstream/client'
import { useStyletron } from 'baseui'
import { Button } from 'baseui/button'
import { Settings, Zap, Activity } from 'react-feather'
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'

const StreamDevices: React.FC<{}> = () => {
  const [css, theme] = useStyletron()
  const [data, setData] = React.useState([])
  React.useEffect(() => {
    const client = new DeepstreamClient('localhost:6020')
    client.login()

    client.event.subscribe('news/sports', data => {
      // handle published data
      console.log(data)
    })

    return () => {
      client.event.unsubscribe('news/politics', () => console.log('offline'))
    }
  }, [data])
  return (
    <div className={css({})}>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        })}
      >
        <div className={css({ ...theme.typography.font550 })}>
          Thiết bị XIot (#abc1234)
        </div>
        <Button
          // onClick={() => setIsOpen(true)}
          kind="secondary"
          startEnhancer={() => (
            <Settings color={theme.colors.mono700} size={18} />
          )}
          overrides={{
            BaseButton: {
              style: {
                borderTopLeftRadius: theme.sizing.scale400,
                borderBottomRightRadius: theme.sizing.scale400,
              },
            },
          }}
        >
          Cài đặt
        </Button>
      </div>

      <div
        className={css({
          marginTop: theme.sizing.scale800,
          marginBottom: theme.sizing.scale800,
          display: 'grid',
          gridTemplateColumns: '0.35fr 1fr',
        })}
      >
        <div
          className={css({
            backgroundColor: theme.colors.mono100,
            ...theme.borders.border200,
            borderTopLeftRadius: theme.sizing.scale400,
            borderBottomRightRadius: theme.sizing.scale400,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
            marginRight: theme.sizing.scale600,
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              paddingTop: theme.sizing.scale600,
              paddingLeft: theme.sizing.scale800,
              paddingRight: theme.sizing.scale800,
            })}
          >
            <div className={css({ marginRight: theme.sizing.scale500 })}>
              <Zap color={theme.colors.accent200} size={24} />
            </div>
            <div>
              <div className={css({ ...theme.typography.font400 })}>
                Nhiệt độ
              </div>
              <div
                className={css({
                  color: theme.colors.mono800,
                })}
              >
                3 phút trước
              </div>
            </div>
          </div>
          <div
            className={css({
              ...theme.typography.font1050,
              fontWeight: 'normal',
              fontSize: '46px',
              paddingTop: theme.sizing.scale1000,
              paddingBottom: theme.sizing.scale800,
              paddingLeft: theme.sizing.scale800,
              paddingRight: theme.sizing.scale800,
              borderBottom: theme.colors.mono300,
              textAlign: 'center',
            })}
          >
            26.88
          </div>
        </div>
        <div
          className={css({
            backgroundColor: theme.colors.mono100,
            ...theme.borders.border200,
            borderTopLeftRadius: theme.sizing.scale400,
            borderBottomRightRadius: theme.sizing.scale400,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              paddingTop: theme.sizing.scale600,
              paddingBottom: theme.sizing.scale600,
              paddingLeft: theme.sizing.scale800,
              paddingRight: theme.sizing.scale800,
            })}
          >
            <div className={css({ marginRight: theme.sizing.scale500 })}>
              <Activity color={theme.colors.accent200} size={24} />
            </div>
            <div>
              <div className={css({ ...theme.typography.font400 })}>
                Nhiệt độ
              </div>
            </div>
          </div>
          <div
            className={css({
              width: '100%',
              height: '150px',
            })}
          >
            <ResponsiveContainer>
              <LineChart
                data={[]}
                syncId="imp"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis dataKey="date_start" />
                <YAxis
                  ticks={[0, 20, 40, 60]}
                  axisLine={false}
                  tickFormatter={value => value}
                />

                <Tooltip />
                <Line
                  type="linear"
                  dataKey="impressions"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StreamDevices
