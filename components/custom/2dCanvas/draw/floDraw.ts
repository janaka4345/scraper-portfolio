import { P5CanvasInstance } from '@p5-wrapper/react'
// import { Vector } from 'p5'

export default function floDraw(
    p5: P5CanvasInstance,
    width: number,
    height: number
) {
    const scale = 20
    const cols = width / scale
    const rows = height / scale

    let zOffset = 0.01

    return () => {
        // p5.noLoop()
        p5.background(0, 255, 0)
        let yOffset = 0
        for (let y = 0; y < rows; y++) {
            let xOffset = 0
            for (let x = 0; x < cols; x++) {
                const noise = p5.noise(
                    xOffset * p5.frameCount,
                    yOffset * p5.frameCount
                )
                // console.log(p5.frameRate())

                xOffset += 0.002
                // const noise = 7 / 4
                //@ts-ignore
                // let v = p5.constructor.Vector.fromAngle(0)

                p5.push()
                p5.line(
                    x * scale,
                    y * scale,
                    x * scale + (p5.cos(noise * p5.TWO_PI) * scale) / 2,
                    y * scale + (p5.sin(noise * p5.TWO_PI) * scale) / 2
                )
                // p5.fill(color)
                // p5.square(x * scale, y * scale, scale)
                p5.pop()
            }
            yOffset += 0.0005
        }
    }
}
