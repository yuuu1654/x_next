"use client"

import { useEffect, useState } from "react"
import { LoginModal } from "../LoginModal"

export const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <LoginModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}

