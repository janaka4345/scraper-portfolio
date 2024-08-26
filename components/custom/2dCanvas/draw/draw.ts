'use client'
import { type P5CanvasInstance } from '@p5-wrapper/react'
import bubblesArray from '../objectPool/bubblesArray'
import drawBubble from './drawBubbles'

export default function draw(
    p5: P5CanvasInstance,
    width: number,
    height: number
) {
    const bubbles = bubblesArray(width, height)

    return () => {
        // console.log(p5.deltaTime)

        p5.background(255, 0, 0)
        bubbles.forEach((bubble, i) => {
            drawBubble(p5, bubble)
        })
        p5.noLoop()

        // x += p5.frameRate / 10000
    }
}
