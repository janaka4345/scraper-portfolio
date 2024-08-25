import { type P5CanvasInstance } from '@p5-wrapper/react'

export default function setup(
    p5: P5CanvasInstance,
    width: number,
    height: number
) {
    return () => {
        // p5.createCanvas(600, 400, p5.WEBGL)
        p5.createCanvas(width, height)
    }
}
