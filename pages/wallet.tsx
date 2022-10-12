import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Stack,
  Typography,
  SelectChangeEvent,
  Button,
  useMediaQuery,
  Box
} from '@mui/material'
import backgroundMobile from '../public/metamask/background-mobile-metamask.png'
import backgroundDesktop from '../public/metamask/background-desktop-metamask.png'
import Image from 'next/image'
import TextInput from '../components/styled-components/TextInput/index'


const Wallet: NextPage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const medium = useMediaQuery('(max-width:1190px)')
  const small = useMediaQuery('(max-width:899px)')

  const [value, setValue] = useState('en-US')

  const handleChange = (event: SelectChangeEvent) => {
    let value = event.target.value as string
    setValue(value)
    router.push(router.route, router.asPath, {
      locale: value
    })
  }

  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: {
          xs: `url('${backgroundMobile.src}')`,
          md: `url('${backgroundDesktop.src}')`,
          lg: `url('${backgroundDesktop.src}')`
        },
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        flexDirection: {
          xs: 'column',
          md: 'row',
          lg: 'column-reverse'
        },
        justifyContent: {
          xs: 'center',
          md: 'space-evenly',
          lg: 'space-evenly'
        },
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Stack
        sx={{
          alignItems: 'center',
          display: { xs: '', md: 'none', lg: 'none' }
        }}
      >
        <Image
          src="/logo.svg"
          width={small ? 150 : medium ? 260 : 400}
          height={small ? 150 : medium ? 260 : 400}
        />
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: 'column', md: 'row', lg: "row"},
          justifyContent: 'center',
          alignItems: "center",
          background:
            'linear-gradient(147.75deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
          backdropFilter: 'blur(10px)',
          borderRadius: '15px',
          marginTop: '80px',
          width: { xs: '320px', md: '650px', lg: "700px" },
          height: { xs: '450px', md: '500px', lg: "500px"}
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: 'row', md: 'column', lg: "column"},
            marginTop: { xs: '-180px', md: '0px' },
            alignSelf: { xs: 'end', md: 'center' },
            marginLeft: { xs: '', md: '-200px', lg: "-250px" },
            justifyContent: { xs: '', md: 'space-between' },
            marginRight: {xs: "", md: "", lg: "80px"}
          }}
        >
          <Box sx={{ marginBottom: {xs: "", md: "-150px"}, marginTop: {xs: "", md: "250px", lg: "200px"}}}>
            <Image
              src="/metamask/wallet.svg"
              width={small ? 170 : medium ? 230 : 290}
              height={small ? 190 : medium ? 230 : 290}
              style={{ cursor: 'pointer', marginRight: '30px' }}
            />
          </Box>
          <Box
            sx={{
              marginTop: { xs: '50px', md: '200px', lg: "200px" },
              marginLeft: { xs: '30px', md: '140px' },
              marginRight: {xs: "-40px", md: "", lg: ""}
            }}
          >
            <Image
              src="/metamask/metamask.svg"
              width={small ? 90 : medium ? 140 : 130}
              height={small ? 80 : medium ? 130 : 120}
              style={{ cursor: 'pointer'}}
            />
          </Box>
        </Stack>
        <Stack sx={{ justifyContent: 'center', alignItems: {xs: "center", md: "start", lg: "start"}, marginTop: {xs: "-10px", md: "", lg: ""}, marginLeft: {xs: "", md: "100px", lg: "-20px"}}}>
          <Typography
            sx={{
              fontSize: {xs: "28px", md: "50px", lg: "55px"},
              fontFamily: 'Open Sans',
              fontWeight: '700',
              lineHeight: '23px',
              marginTop: '40px'
            }}
          >
            {t('wallet_connect.title')}
          </Typography>
          <Typography
            sx={{
              fontSize: {xs: "15px", md: "24px", lg: "26px"},
              fontFamily: 'Open Sans',
              fontWeight: '300',
              lineHeight: '12px',
              marginTop: {xs: "15px", md: "25px"}
            }}
          >
            {t('wallet_connect.description')}
          </Typography>
          <Box sx={{ marginTop: {xs: "20px"}}}>
            <Image
              src="/metamask/QR.png"
              width={small ? 190 : medium ? 250 : 250}
              height={small ? 180 : medium ? 250 : 250}
              style={{ cursor: 'pointer'}}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Wallet
