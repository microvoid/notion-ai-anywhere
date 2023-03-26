import classNames from "classnames"
import { useEffect, useState } from "react"

export default function Toast(props: { message: string; id: string }) {
  const { message, id } = props
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (message) {
      setShow(true)
    }
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }, [message, id])

  return (
    <div
      className={classNames(
        "fixed w-64 right-10 bottom-10 px-5 py-4 border-r-8 border-blue-500 bg-white drop-shadow-lg",
        {
          hidden: !show
        }
      )}
      style={{
        zIndex: 1001
      }}>
      <p className="text-sm">
        <span className="mr-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white font-extrabold">
          i
        </span>
        {message}
      </p>
    </div>
  )
}
