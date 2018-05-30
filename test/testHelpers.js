import { test } from 'substance-test'
import { DefaultDOMElement, platform } from 'substance'

export function testAsync (name, func) {
  test(name, async assert => {
    let success = false
    try {
      await func(assert)
      success = true
    } finally {
      if (!success) {
        assert.fail('Test failed with an uncaught exception.')
        assert.end()
      }
    }
  })
}

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

