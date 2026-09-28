"use client"

import { motion, type Transition, type HTMLMotionProps } from "motion/react"
import * as React from "react"

interface Position {
  x: number
  y: number
}

export interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  transition?: Transition
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  stiffness: 150,
  damping: 15,
  mass: 0.1,
}

export function MagneticButton({
  children,
  className,
  transition = DEFAULT_TRANSITION,
  onMouseMove,
  onMouseLeave,
  ...props
}: MagneticButtonProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseMove?.(e as any)
    const node = ref.current
    if (!node) return
    const { clientX, clientY } = e
    const { height, width, left, top } = node.getBoundingClientRect()
    setPosition({
      x: clientX - (left + width / 2),
      y: clientY - (top + height / 2),
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    onMouseLeave?.(e as any)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={ref}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={transition}
      whileTap={{ scale: 0.95 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton