import { styled } from '@mui/material'
import React from 'react'


const FooterContent = styled('footer')({
    padding: '100px',
    height: '200px',
})


function Footer() {
  return (
    <FooterContent>Footer</FooterContent>
  )
}

export default Footer