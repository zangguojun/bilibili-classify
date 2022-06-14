import cssText from "data-text:~/style.css"
import type { PlasmoContentScript } from "plasmo"
import React, { useReducer } from "react"

export const config: PlasmoContentScript = {
  matches: ["https://space.bilibili.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const index = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        margin: 20
      }}>
      <button
        className="flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300"
        type="button"
        aria-label="like">
        <svg width="20" height="20" fill="currentColor">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
      </button>
    </div>
  )
}

export default index
