// Based on https://medium.com/tamman-inc/create-a-reusable-focus-lock-in-react-to-improve-user-experience-and-accessibility-90829426fae2
import React, { useEffect, useRef } from "react"

type FocusLockProps = {
  children: React.ReactNode
  isLocked: boolean
}

const FocusLock = ({ isLocked = true, children }: FocusLockProps) => {
  const rootNode = useRef<HTMLDivElement>(null)
  const focusableItems = useRef<NodeListOf<Element> | []>([])

  useEffect(() => {
    if (rootNode.current !== null) {
      const updateFocusableItems = () => {
        const listElements = rootNode?.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), video'
        )
        if (listElements) {
          focusableItems.current = listElements
        }
      }

      const observer = new MutationObserver(() => {
        updateFocusableItems()
      })
      updateFocusableItems()
      observer.observe(rootNode.current, { childList: true })
      return () => {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!focusableItems.current) return

      const { key, shiftKey } = event
      const {
        length,
        0: firstItem,
        [length - 1]: lastItem,
      } = focusableItems.current

      if (isLocked && key === "Tab") {
        // If only one item then prevent tabbing when locked
        if (length === 1) {
          event.preventDefault()
          return
        }

        // If focused on last item then focus on first item when tab is pressed
        if (!shiftKey && document.activeElement === lastItem) {
          event.preventDefault()
          ;(firstItem as HTMLElement)?.focus()
          return
        }

        // If focused on first item then focus on last item when shift + tab is pressed
        if (shiftKey && document.activeElement === firstItem) {
          event.preventDefault()
          ;(lastItem as HTMLElement)?.focus()
          return
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [isLocked])

  return <div ref={rootNode}>{children}</div>
}

export default FocusLock
