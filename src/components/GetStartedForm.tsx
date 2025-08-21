'use client'

import React, { useState, useEffect, createContext, useContext } from 'react'
import { motion } from 'framer-motion'
import { XMarkIcon, CheckIcon } from '@heroicons/react/24/outline'

// Create context for form state
interface FormContextType {
  isFormOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

// Custom hook to use form context
export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}

// Form provider component
export function FormProvider({ children }: { children: React.ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false)

  console.log('FormProvider render:', { isFormOpen })

  const openForm = () => {
    console.log('=== FormProvider: Opening form ===')
    console.log('Current isFormOpen state:', isFormOpen)
    console.log('About to set isFormOpen to true...')
    setIsFormOpen(true)
    console.log('setIsFormOpen(true) called')
  }

  const closeForm = () => {
    console.log('FormProvider: Closing form - before setState')
    setIsFormOpen(false)
    console.log('FormProvider: Closing form - after setState')
  }

  return (
    <FormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  )
}

interface GetStartedFormProps {
  // Remove isOpen and onClose props since we'll use context
}

export default function GetStartedForm({}: GetStartedFormProps) {
  const { isFormOpen, closeForm } = useFormContext()

  // Debug logging
  console.log('GetStartedForm render:', { isFormOpen })

  // Scroll to top and lock body when popup opens
  useEffect(() => {
    console.log('useEffect triggered:', isFormOpen)
    if (isFormOpen) {
      // Scroll to top immediately
      window.scrollTo(0, 0)
      // Simple overflow hidden to prevent background scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore body scroll
      document.body.style.overflow = ''
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ''
    }
  }, [isFormOpen])

  if (!isFormOpen) return null

  console.log('GetStartedForm: Rendering form content')

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '1rem'
    }}>
      {/* Test div to ensure popup is visible */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        left: '1rem',
        backgroundColor: 'red',
        color: 'white',
        padding: '0.5rem',
        borderRadius: '0.25rem',
        zIndex: 10000
      }}>
        POPUP IS OPEN - MINIMAL TEST
      </div>
      
      {/* Ultra simple test content */}
      <div style={{
        backgroundColor: 'lime',
        color: 'black',
        padding: '2rem',
        borderRadius: '1rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        minWidth: '300px',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem'
      }}>
        <div>🎉 FORM IS WORKING! 🎉</div>
        <div style={{ fontSize: '1rem' }}>If you can see this lime green box, the form is rendering correctly!</div>
        <button
          onClick={closeForm}
          style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          CLOSE FORM
        </button>
      </div>
    </div>
  )
}
