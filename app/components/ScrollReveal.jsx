"use client";

import { motion, useReducedMotion } from 'framer-motion'

const revealElements = {
  div: motion.div,
  form: motion.form,
}

const ScrollReveal = ({ as = 'div', children, delay = 0, className = '', ...props }) => {
  const reduceMotion = useReducedMotion()
  const Component = revealElements[as]

  return (
    <Component
      {...props}
      className={`scroll-reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, transform: 'translateY(16px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -32px 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      {children}
    </Component>
  )
}

export default ScrollReveal
