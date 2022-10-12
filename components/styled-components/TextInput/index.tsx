import { SxProps } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'

const CustomInput = styled('input')(({ theme }) => ({
  background: 'rgba(138, 42, 134, 0.2)',
  border: '2px solid #CB03AD',
  fontFamily: "'Oxanium'",
  fontStyle: 'normal',
  color: '#FFFFFF',
  textTransform: 'uppercase',
  '&::placeholder': {
    fontFamily: "'Oxanium'",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: {xs: "13px", md: "20px"},
    lineHeight: '25px',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    textAlign: "center"
  },
  '&:focus': {
    border: '2px solid #CB03AD !important',
    outlineWidth: 0
  },
  '&:focus-visible': {
    border: '2px solid #CB03AD !important',
    outlineWidth: 0
  }
}))

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  sx: SxProps
}

const TextInput = ({ ...props }: Props) => {
  return <CustomInput {...props} />
}

export default TextInput
