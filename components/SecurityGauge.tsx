'use client'

import dynamic from 'next/dynamic'

const GaugeComponent = dynamic(() => import('react-gauge-component'), { ssr: false })

export default function SecurityGauge({ value }: { value: number }) {
  return (
    <div style={{ width: '100%', maxWidth: 400, margin: '0 auto' }}>
      <GaugeComponent
        type="semicircle"
        arc={{
          // 越高越绿 ✅
          colorArray: ['#FF2121', '#FF8A15', '#FFD215', '#90FF15', '#00FF15'],
          padding: 0.02,
          subArcs: [
            { limit: 15 },
            { limit: 35 },
            { limit: 55 },
            { limit: 75 },
            { limit: 100 },
          ],
        }}
        pointer={{
          type: 'blob',
          color: '#FFD700',
          animationDelay: 0,
          animationDuration: 1500,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (v: number) => `${v.toFixed(2)}%`,
            style: { fontSize: '36px', fill: '#ffffff', fontWeight: 600 },
          },
          tickLabels: {
            type: 'outer',
            defaultTickValueConfig: { style: { fill: '#aaa', fontSize: '10px' } },
          },
        }}
        value={value}
      />
    </div>
  )
}
