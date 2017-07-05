import { DefaultDOMElement, platform } from 'substance'

export function wait(ms) {
  return () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, ms)
    })
  }
}

export function getMountPoint(t) {
  let mountPoint
  if (platform.inBrowser) {
    mountPoint = t.sandbox
  } else {
    let htmlDoc = DefaultDOMElement.createDocument('html')
    mountPoint = htmlDoc.createElement('div')
    htmlDoc.appendChild(mountPoint)
  }
  return mountPoint
}