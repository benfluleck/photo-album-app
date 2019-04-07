import { useState } from 'react'

export default function useModal (defaultState = false) {
  const [isOpen, setIsOpen] = useState(defaultState)

  const onToggle = () => setIsOpen(!isOpen)

  return {
    isOpen,
    setIsOpen,
    onToggle
  }
}
