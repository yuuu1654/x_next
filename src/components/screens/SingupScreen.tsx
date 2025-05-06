"use client"

import { useState } from "react"
import { SignupModal } from "@/components/SignupModal"

// SignupModalの開け閉めを管理
export const SignupScreen = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <SignupModal open={isOpen} onOpenChange={setIsOpen} />
  )
}

