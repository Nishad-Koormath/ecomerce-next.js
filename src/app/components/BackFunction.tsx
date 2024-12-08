"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const BackFunction = () => {
    const router = useRouter()
  return (
    <div>
        <button title='Go Back' onClick={() => router.back()}><i className="bi bi-arrow-left"></i></button>
    </div>
  )
}

export default BackFunction