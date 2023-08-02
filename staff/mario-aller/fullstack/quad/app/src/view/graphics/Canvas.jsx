import { useRef, useEffect } from 'react'

const Canvas = props => {

  const { panel, ...rest } = props

  const canvasRef = useRef(null)

  const drawPanel = ctx => {
    ctx.fillStyle = '#ff00ff'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    panel.blocks.forEach(block => {

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