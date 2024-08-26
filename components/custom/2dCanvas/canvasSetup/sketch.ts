import { type P5CanvasInstance, type Sketch } from '@p5-wrapper/react'
import setup from './setup'
import preload from './preload'
import draw from '../draw/draw'
import mousePressed from '../handleInputs/mousePressed'
import floDraw from '../draw/floDraw'
// import mouseMoved from '../handleInputs/mouseMoved'
const sketch: Sketch = (p5: P5CanvasInstance) => {
    const width = 600
    const height = 400
    p5.preload = preload(p5)
    p5.setup = setup(p5, width, height)
    // p5.draw = draw(p5, width, height)
    p5.draw = floDraw(p5, width, height)
    p5.mousePressed = () => mousePressed(p5)
    // p5.mouseMoved = () => mouseMoved(p5)
    // p5.keyPressed = () => keyPressed(p5)
}

export default sketch
