import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  Stack,
  Typography,
  Select,
  MenuItem,
  SelectChangeEvent,
  Button,
  useMediaQuery,
  Input,
  FormControl,
  InputLabel
} from '@mui/material'
// import backgroundMobile from '../public/background-mobile-min.gif'
import backgroundDesktop from '../public/background-desktop-min.gif'
import Image from 'next/image'
import TextInput from '../components/styled-components/TextInput'

const Home: NextPage = () => {
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
          // xs: `url('${backgroundMobile.src}')`,
          md: `url('${backgroundDesktop.src}')`,
          lg: `url('${backgroundDesktop.src}')`
        },
        background: 'purple',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: '100% 100%',
        flexDirection: { xs: 'column', md: 'row', lg: 'row' },
        justifyContent: { xs: 'space-between', md: 'space-between' },
        color: 'white'
      }}
    >
      <Stack
        sx={{
          marginTop: '40px',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: { xs: '0px', md: '80px', lg: '250px' }
        }}
      >
        <Stack sx={{ alignItems: 'center' }}>
          <Image
            src="/logo.svg"
            width={small ? 150 : medium ? 260 : 400}
            height={small ? 150 : medium ? 260 : 400}
          />
          <Typography
            paragraph
            sx={{
              marginTop: { xs: '10px', md: '40px' },
              fontSize: { xs: '20px', md: '40px', lg: '50px' },
              lineHeight: '27px',
              fontWeight: '800',
              fontFamily: 'Open Sans'
            }}
          >
            <b>{t('login.title1')}</b>
          </Typography>
          <Typography
            paragraph
            sx={{
              marginTop: { xs: '-10px', md: '20px' },
              fontSize: { xs: '38px', md: '65px', lg: '74px' },
              lineHeight: '33px',
              fontWeight: '300',
              letterSpacing: '40%',
              fontFamily: 'Open Sans'
            }}
          >
            {t('login.title2')}
          </Typography>
          {/* <Input
            placeholder={t('login.referral')}
            sx={{
              marginTop: { xs: '15px', md: '40px' },
              color: 'white',
              width: { xs: '300px', md: '400px' },
              height: { xs: '30px', md: '40px' },
              background: 'transparent',
              border: '2px solid #CB03AD',
              WebkitBackgroundSize: '2px'
            }}
          ></Input> */}
          <TextInput
            placeholder={t('login.referral')}
            sx={{
              marginTop: { xs: '15px', md: '40px' },
              width: { xs: '300px', md: '400px' },
              height: { xs: '30px', md: '40px' }
            }}
          />
        </Stack>
        <Stack
          sx={{
            flexDirection: 'row',
            marginBottom: '70px',
            marginTop: { xs: '400px', md: '50px' }
          }}
        >
          <Button
            sx={{
              display: { xs: 'block', md: 'none', lg: 'none' },
              width: '117px',
              height: '37px',
              backgroundColor: '#CE18C5',
              borderRadius: '0px',
              fontSize: '13px',
              fontFamily: 'Oxanium',
              fontWeight: '700',
              textTransform: 'capitalize',
              color: 'white'
            }}
          >
            {t('login.log')}
          </Button>
          <Button
            sx={{
              width: { xs: '130px', md: '226px' },
              height: { xs: '37px', md: '55px' },
              backgroundColor: '#CE18C5',
              borderRadius: '0px',
              fontSize: { xs: '13px', md: '20px' },
              fontFamily: 'Oxanium',
              fontWeight: '700',
              textTransform: 'capitalize',
              color: 'white',
              marginLeft: '20px'
            }}
          >
            {t('login.connect')}
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          display: { xs: 'none', md: 'flex', lg: 'flex' },
          flexDirection: 'row',
          marginTop: '30px',
          marginRight: '50px'
        }}
      >
        <FormControl
          sx={{
            border: 'none',
            color: 'white',
            fontSize: '20px',
            fontWeight: '700',
            fontFamily: 'Oxanium'
          }}
        >
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Oxanium',
              fontWeight: '700',
              marginTop: '-5px'
            }}
          >
            {t('language.select')}
          </InputLabel>
          <Select
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            sx={{
              backgroundColor: '#CE18C5',
              borderRadius: '0px',
              width: '260px',
              height: '45px',
              color: 'white',
              fontSize: '20px',
              fontWeight: '700',
              fontFamily: 'Oxanium',
              textAlign: 'center'
            }}
            onChange={handleChange}
          >
            <MenuItem
              value="en-US"
              sx={{
                color: '#CE18C5',
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'Oxanium',
                textAlign: 'end'
              }}
            >
              {t('language.language2')}
            </MenuItem>
            <MenuItem
              value="es-ES"
              sx={{
                color: '#CE18C5',
                fontSize: '20px',
                fontWeight: '700',
                fontFamily: 'Oxanium',
                textAlign: 'end'
              }}
            >
              {t('language.language1')}
            </MenuItem>
          </Select>
        </FormControl>
        <Button
          sx={{
            width: '158px',
            height: '45px',
            backgroundColor: '#CE18C5',
            borderRadius: '0px',
            fontSize: '20px',
            fontFamily: 'Oxanium',
            fontWeight: '700',
            textTransform: 'capitalize',
            color: 'white',
            marginLeft: '5px'
          }}
        >
          {t('login.log')}
        </Button>
      </Stack>
    </Stack>
  )
}

export default Home
