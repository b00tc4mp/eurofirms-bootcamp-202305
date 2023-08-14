import { useRef, useEffect } from 'react'

/**
 * The `Canvas` component in JavaScript React renders a panel with blocks on a canvas element.
 */
const Canvas = props => {

  const { panel, ...rest } = props

  const canvasRef = useRef(null)

  const drawPanel = ctx => {

    ctx.canvas.height = ctx.canvas.width * Number(panel.height) / Number(panel.width)
    const escala1 = ctx.canvas.width / Number(panel.width)
    const escala2 = ctx.canvas.height / Number(panel.height)
    const escala = (escala1 < escala2) ? escala1 : escala2
    const maxY = ctx.canvas.height

    // ctx.fillStyle = '#00ffff'
    // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = '#aaaaaa'
    ctx.fillRect(0, 0, Number(panel.width) * escala, Number(panel.height) * escala)
    ctx.fillStyle = '#777777'
    ctx.lineWidth = 2

    panel.blocks.forEach(block => {
      if (Number(block.x) !== -1) {
        const originX = Number(block.x) * escala
        const originY = Number(block.y) * escala
        let finX, finY
        if (block.orientation === 0) {
          finX = originX + Number(block.width) * escala
          finY = originY + Number(block.height) * escala
        } else {
          finX = originX + Number(block.height) * escala
          finY = originY + Number(block.width) * escala
        }
        ctx.fillRect(originX, maxY - finY, finX - originX, finY - originY)
        ctx.beginPath()
        ctx.moveTo(originX, maxY - originY)
        ctx.lineTo(finX, maxY - originY)
        ctx.lineTo(finX, maxY - finY)
        ctx.lineTo(originX, maxY - finY)
        ctx.lineTo(originX, maxY - originY)
        ctx.closePath()
        ctx.stroke()
      }
    })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    drawPanel(context)
  }, [drawPanel])

  return < canvas ref={canvasRef} {...rest} />
}

export default Canvas  