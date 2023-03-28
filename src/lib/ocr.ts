export class PaddleOCR {
  constructor() {
    this.init()
  }

  iframe: HTMLIFrameElement

  iframeOnLoaded: Function
  loadIframePromise = new Promise((resolve) => {
    this.iframeOnLoaded = resolve
  })

  ocrResolve: Function
  ocrReject: Function

  init = () => {
    window.addEventListener("message", this.handleMessage)
  }

  handleMessage = (event: MessageEvent) => {
    try {
      const res = JSON.parse(event.data)
      if (res.name === "ocr-iframe-loaded") {
        this.iframeOnLoaded()
      }
      if (res.name === "ocr-recognize-success") {
        console.log(res.data)
        this.ocrResolve(res.data)
      } else if (res.name === "ocr-recognize-fail") {
        this.ocrReject()
      }
    } catch (error) {}
  }

  setIframe = (iframe: HTMLIFrameElement) => {
    this.iframe = iframe
  }

  delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  startOCR = async (image: string): Promise<string[]> => {
    return new Promise(async (resolve, reject) => {
      this.ocrResolve = resolve
      this.ocrReject = reject
      await this.loadIframePromise
      this.iframe.contentWindow?.window.postMessage(
        JSON.stringify({
          name: "start-ocr-recognize",
          data: {
            url: image
          }
        }),
        "*"
      )

      this.delay(20000).then(() => {
        reject()
      })
    })
  }
}

export const paddleOCR = new PaddleOCR()
