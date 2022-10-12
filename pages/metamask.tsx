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


const Metamask: NextPage = () => {
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
          width: { xs: '320px', md: '600px', lg: "700px" },
          height: { xs: '450px', md: '600px', lg: "600px"}
        }}
      >
        <Stack
          sx={{
            flexDirection: { xs: 'row', md: 'column', lg: "column"},
            marginTop: { xs: '-120px', md: '0px' },
            alignSelf: { xs: 'end', md: 'center' },
            marginLeft: { xs: '', md: '-130px', lg: "-400px" },
            justifyContent: { xs: '', md: 'space-between' },
            marginRight: {xs: "", md: "", lg: "80px"}
          }}
        >
          <Box sx={{ marginBottom: {xs: "", md: "-150px"}, marginTop: {xs: "", md: "250px", lg: "250px"}}}>
            <Image
              src="/metamask/metamask.svg"
              width={small ? 170 : medium ? 230 : 290}
              height={small ? 190 : medium ? 230 : 290}
              style={{ cursor: 'pointer', marginRight: '30px' }}
            />
          </Box>
          <Box
            sx={{
              marginTop: { xs: '35px', md: '250px', lg: "200px" },
              marginLeft: { xs: '30px', md: '140px' },
              marginRight: {xs: "-40px", md: "", lg: ""}
            }}
          >
            <Image
              src="/metamask/wallet.svg"
              width={small ? 90 : medium ? 140 : 170}
              height={small ? 80 : medium ? 130 : 160}
              style={{ cursor: 'pointer'}}
            />
          </Box>
        </Stack>
        <Stack sx={{ justifyContent: 'center', alignItems: {xs: "center", md: "start", lg: "start"}, marginRight: {xs: "", md: "", lg: "-120px"}, marginTop: {xs: "-20px", md: "", lg: ""}}}>
          <Typography
            sx={{
              fontSize: {xs: "24px", md: "50px", lg: "55px"},
              fontFamily: 'Open Sans',
              fontWeight: '700',
              lineHeight: '23px',
              marginTop: '40px'
            }}
          >
            {t('metamask.title')}
          </Typography>
          <Typography
            sx={{
              fontSize: {xs: "12px", md: "24px", lg: "26px"},
              fontFamily: 'Open Sans',
              fontWeight: '300',
              lineHeight: '12px',
              marginTop: {xs: "15px", md: "25px"}
            }}
          >
            {t('metamask.description')}
          </Typography>
          <TextInput
            sx={{
              marginTop: { xs: '30px', md: '40px' },
              width: { xs: '270px', md: "380px" },
              height: { xs: '29px', md: '40px' }
            }}
          />
          <TextInput
            sx={{
              marginTop: { xs: '15px', md: '40px' },
              width: { xs: '270px', md: '380px' },
              height: { xs: '29px', md: '40px' }
            }}
          />
          <Stack
            sx={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '20px'
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Open Sans',
                fontWeight: '300',
                fontSize: {xs: "12px", md: "16px", lg: "18px"},
                lineHeight: '12px'
              }}
            >
              {t('metamask.phrase')}
            </Typography>
            <Typography
              sx={{
                marginLeft: '5px',
                fontFamily: 'Open Sans',
                fontWeight: '300',
                fontSize: {xs: "12px", md: "16px", lg: "18px"},
                color: '#00FFFF',
                lineHeight: '12px'
              }}
            >
              {' '}
              {t('metamask.phrase2')}
            </Typography>
          </Stack>
          <Button
            sx={{
              display: { xs: 'block', md: 'block', lg: 'block' },
              width: {xs: "150px", md: "205px", lg: "230px"},
              height: {xs: "37px", md: "50px"},
              backgroundColor: '#CE18C5',
              borderRadius: '0px',
              fontSize: {xs: "13px", md: "18px", lg: "22px"},
              fontFamily: 'Oxanium',
              fontWeight: '700',
              textTransform: 'capitalize',
              color: 'white',
              marginTop: '30px'
            }}
          >
            {t('metamask.connect')}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Metamask
