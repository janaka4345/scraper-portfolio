export type Bubble = {
    x: number
    y: number
    radius: number
    speedX: number
    speedY: number
    color: number[]
}
export default function bubblesArray(width: number, height: number) {
    const bubbles: Bubble[] = []
    for (let index = 0; index < 100; index++) {
        let radius = Math.floor(Math.random() * 30 + 10)
        let x = Math.floor(Math.random() * (width - radius))
        let y = 0
        let speedX = Math.floor(Math.floor(Math.random() * 100))
        let speedY = Math.floor(Math.floor(Math.random() * 100))
        let color = [
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 255),
            Math.floor(Math.random() * 205 + 50),
        ]
        bubbles.push({ x, y, radius, speedX, speedY, color })
    }
    return bubbles
}
