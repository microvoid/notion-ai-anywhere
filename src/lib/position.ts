export interface IPosition {
  buttonX: string
  buttonY: string
  isTop: boolean
  maxHeight: string
  panelX: string
  panelY: string
}
/**
 * @summary 计算 panel 展示位置
 */
export const _calcPosition = (e: { clientX: number; clientY: number }) => {
  let x: number
  let y: number
  let maxHeight: number
  let isTop = true
  const { clientX, clientY } = e

  const { innerHeight, innerWidth } = window

  // 大于百分之六指高度时弹框出现在上面
  if (clientY > innerHeight * 0.8) {
    isTop = false
    y = clientY - 30
    maxHeight = innerHeight - (innerHeight - clientY + 30) - 10
  } else {
    y = clientY + 15
    maxHeight = innerHeight - (clientY + 15) - 10
  }

  return {
    panelX: clientX - 510 / 2 + "px",
    panelY: y + "px",
    buttonX: clientX - 10 + "px",
    buttonY: clientY + 10 + "px",
    isTop,
    maxHeight: maxHeight + "px"
  }
}
