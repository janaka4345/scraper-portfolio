import { type P5CanvasInstance } from '@p5-wrapper/react'
function mousePressed(p5: P5CanvasInstance) {
    console.log(p5.frameRate())
}
export default mousePressed
