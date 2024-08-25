import { P5CanvasInstance } from '@p5-wrapper/react'
import { type Bubble } from '../objectPool/bubblesArray'

export default function drawBubble(p5: P5CanvasInstance, element: Bubble) {
    p5.push()
    p5.noStroke()
    p5.fill(element.color[0], element.color[1], element.color[2])
    p5.square(
        element.x,
        ((element.y + p5.frameCount * element.speedY * 0.05) %
            (p5.height + element.radius)) -
            element.radius,
        element.radius
    )
    p5.pop()
}
