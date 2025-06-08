"use client"

import { useState } from "react"
import { LoginModal } from "../LoginModal"

export const LoginScreen = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <LoginModal open={isOpen} onOpenChange={setIsOpen} />
  )
}

