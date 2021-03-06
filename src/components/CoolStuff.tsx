import dynamic from 'next/dynamic'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false
})
interface ComponentProps {
    // Your component props
}

const CoolStuff: React.FC<ComponentProps> = (props: ComponentProps) => {
    let angle = 0

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight, p5.WEBGL).parent(canvasParentRef)
    }

    const draw = (p5: p5Types) => {
        p5.clear()

        p5.push()
        // p5.translate(-200, -100, 100)
        p5.rotateX(-p5.map(p5.mouseY, 0, p5.windowHeight, 1, -1) - angle)
        p5.rotateY(-p5.map(p5.mouseX, 0, p5.windowWidth, -1, 1) - angle)
        p5.box(500)
        p5.pop()

        // p5.push()
        // p5.translate(400, 100, -50)
        // p5.rotateX(-p5.map(p5.mouseY, 0, p5.windowHeight, 1, -1) - angle)
        // p5.rotateY(-p5.map(p5.mouseX, 0, p5.windowWidth, -1, 1) - angle)
        // p5.box(200)
        // p5.pop()

        // p5.push()
        // p5.translate(-100, 150, -100)
        // p5.rotateX(-p5.map(p5.mouseY, 0, p5.windowHeight, 1, -1) - angle)
        // p5.rotateY(-p5.map(p5.mouseX, 0, p5.windowWidth, -1, 1) - angle)
        // p5.box(75)
        // p5.pop()

        // p5.push()
        // p5.translate(200, -100)
        // p5.rotateX(p5.map(p5.mouseY, 0, p5.windowHeight, 1, -1) + angle)
        // p5.rotateY(p5.map(p5.mouseX, 0, p5.windowWidth, -1, 1) + angle)
        // p5.box(100)
        // p5.pop()

        angle += 0.008
    }

    const windowResized = (p5: p5Types, canvasParentRef: Element) => {
        p5.resizeCanvas(canvasParentRef.clientWidth, canvasParentRef.clientHeight)
    }

    return <Sketch className="absolute inset-0 w-full h-full" setup={setup} draw={draw} />
}

export default CoolStuff
