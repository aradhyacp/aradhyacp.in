"use client"
import React from 'react'
import Floatinglines from '@/components/FloatingLines.jsx'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div>
      <div style={{ width: "100vw", height: "100vh", backgroundColor: "#000", overflow: "hidden" }}>
      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
        <Floatinglines
          enabledWaves={["top", "middle", "bottom"]}
          // Array - specify line count per wave; Number - same count for all waves
          lineCount={5}
          // Array - specify line distance per wave; Number - same distance for all waves
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
        </div>
        <div style={{ position: "absolute", inset: 0 }}>
          <Hero/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page