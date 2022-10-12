import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Stack,
  Typography,
  SelectChangeEvent,
  useMediaQuery,
  Box
} from '@mui/material'
import backgroundMobile from '../public/connect_wallet/background_wallet_mobile.png'
import backgroundDesktop from '../public/connect_wallet/background_wallet_desktop.png'
import Image from 'next/image'

const Connect: NextPage = () => {
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
        flexDirection: { xs: 'column', md: 'column-reverse', lg: 'column-reverse' },
        justifyContent: { xs: 'center', md: 'space-evenly', lg: "space-evenly"},
        alignItems: 'center',
        color: 'white'
      }}
    >
      <Stack sx={{ alignItems: 'center', display: {xs: "", md: "none", lg: "none"} }}>
        <Image
          src="/logo.svg"
          width={small ? 150 : medium ? 260 : 400}
          height={small ? 150 : medium ? 260 : 400}
        />
      </Stack>
      <Typography
        sx={{
          fontFamily: 'Open Sans',
          fontWeight: "700",
          fontSize: {xs: "20px", md: "32px", lg: "32px"},
          lineHeight: {xs: "25px", md: "43px", lg: "43px"},
          letterSpacing: '12.5px',
          maxWidth: {xs: "700px", md: "900px", lg: "900px"},
          textAlign: 'center',
          marginBottom: {xs: "30px", md: "80px", lg: "80px"},
          marginTop: {xs: "90px", md: "-150px", lg: "-150px"}
        }}
      >
        {t('connect_wallet.select')}
      </Typography>
      <Stack sx={{ flexDirection: { xs: 'column', md: 'row', lg: "row"}, marginTop: {xs: "0px", md: "-100px", lg: "-100px"} }}>
        <Image
          src="/connect_wallet/Meta.svg"
          width={small ? 230 : medium ? 280 : 280}
          height={small ? 230 : medium ? 280 : 280}
          style={{ cursor: 'pointer' }}
        />
        <Box sx={{ marginTop: {xs: "50px", md: "80px", lg: "80px"}}}>
          <Image
            src="/connect_wallet/ConnectWallet.svg"
            width={small ? 290 : medium ? 370 : 370}
            height={small ? 290 : medium ? 370 : 370}
            style={{  cursor: 'pointer' }}
          />
        </Box>
      </Stack>
      <Stack sx={{ alignItems: 'center', display: {xs: "none", md: "flex", lg: "flex"}, alignSelf: "start", marginTop: "-80px", marginLeft: "40px"}}>
        <Image
          src="/logo.svg"
          width={small ? 150 : medium ? 150 : 180}
          height={small ? 150 : medium ? 150 : 180}
        />
      </Stack>
    </Stack>
  )
}

export default Connect
