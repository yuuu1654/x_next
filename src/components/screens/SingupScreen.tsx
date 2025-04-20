"use client"

import { useEffect, useState } from "react"
import { SignupModal } from "@/components/SignupModal"

// SignupModalの開け閉めを管理
export const SignupScreen = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      <SignupModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  )
}

