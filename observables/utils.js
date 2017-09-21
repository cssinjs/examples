import {Observable} from 'rxjs'

export const getPosition = (box) => {
  const mouseup$ = Observable.fromEvent(box, 'mouseup')
  const mousemove$ = Observable.fromEvent(box.ownerDocument, 'mousemove')
  const mousedown$ = Observable.fromEvent(box, 'mousedown')

  return mousedown$.switchMap((md) => {
    const startX = md.clientX + window.scrollX
    const startY = md.clientY + window.scrollY
    const style = getComputedStyle(md.target)
    const startLeft = parseInt(style.left, 10) || 0
    const startTop = parseInt(style.top, 10) || 0

    return mousemove$
      .map((mm) => {
        return {
          left: startLeft + mm.clientX - startX,
          top: startTop + mm.clientY - startY
        }
      })
      .takeUntil(mouseup$)
  })
}
