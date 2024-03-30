import "@/components/(css)/WaveStyle.css"

export default function WaveBgAnimation() {
  return (
    <div>
      <div className="waveDiv animation-wave">
        <div className="wave-content-wrapper first-wave">
          <div className="wave-image first-image" style={{
            backgroundImage: "url('https://www.yudiz.com/codepen/wave-animation/first-wave.png')"
          }}></div>
        </div>
        <div className="wave-content-wrapper second-wave">
          <div className="wave-image second-image" style={{
            backgroundImage: "url('https://www.yudiz.com/codepen/wave-animation/second-wave.png')"
          }}></div>
        </div>
        <div className="wave-content-wrapper third-wave">
          <div className="wave-image third-image" style={{
            backgroundImage: "url('https://www.yudiz.com/codepen/wave-animation/third-wave.png')"
          }}></div>
        </div>
      </div>
    </div>
  )
}
