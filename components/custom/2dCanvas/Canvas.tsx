'use client'
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import sketch from "./canvasSetup/sketch";

export default function Canvas() {
    return <NextReactP5Wrapper sketch={sketch} />
}
