import { useRef, useEffect } from 'react'

const Canvas = props => {

  const { panel, ...rest } = props

  const canvasRef = useRef(null)

  const drawPanel = ctx => {
    const escala1 = ctx.canvas.width / Number(panel.width)
    const escala2 = ctx.canvas.height / Number(panel.height)
    const escala = (escala1 < escala2) ? escala1 : escala2
    const maxY = ctx.canvas.height

    ctx.fillStyle = '#00ffff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = '#aaaaaa'
    ctx.fillRect(0, 0, Number(panel.width) * escala, Number(panel.height) * escala)
    
    panel.blocks.forEach(block => {
      const orginX = Number(block.x) * escala
      const originY = Number(block.y) * escala
      if (orginX !== -1) {
        let finX, finY
        if (block.orientation === 0) {
          finX = orginX + Number(block.width) * escala
          finY = originY + Number(block.height) * escala
        } else {
          finX = orginX + Number(block.height) * escala
          finY = originY + Number(block.width) * escala
        }
        ctx.beginPath()
        ctx.moveTo(orginX, maxY - originY)
        ctx.lineTo(finX, maxY - originY)
        ctx.lineTo(finX, maxY - finY)
        ctx.lineTo(orginX, maxY - finY)
        ctx.lineTo(orginX, maxY - originY)
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