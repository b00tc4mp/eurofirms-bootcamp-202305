import { useRef, useEffect } from 'react'

const Canvas = props => {

  const { panel, ...rest } = props

  const canvasRef = useRef(null)

  const drawPanel = ctx => {
    const esc1 = ctx.canvas.width / Number(panel.width)
    const esc2 = ctx.canvas.height / Number(panel.height)
    const escala = (esc1 < esc2) ? esc1 : esc2
    const maxY = ctx.canvas.height

    ctx.fillStyle = '#00ffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = '#aaaaaa'
    ctx.fillRect(0, 0, Number(panel.width) * escala, Number(panel.height) * escala)
    
    panel.blocks.forEach(block => {
      const orgX = Number(block.x) * escala
      const orgY = Number(block.y) * escala
      if (orgX !== -1) {
        let finX, finY
        if (block.orientation === 0) {
          finX = orgX + Number(block.width) * escala
          finY = orgY + Number(block.height) * escala
        } else {
          finX = orgX + Number(block.height) * escala
          finY = orgY + Number(block.width) * escala
        }
        ctx.beginPath()
        ctx.moveTo(orgX, maxY - orgY)
        ctx.lineTo(finX, maxY - orgY)
        ctx.lineTo(finX, maxY - finY)
        ctx.lineTo(orgX, maxY - finY)
        ctx.lineTo(orgX, maxY - orgY)
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