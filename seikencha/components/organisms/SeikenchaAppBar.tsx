import { AppBar, Box, IconButton, Typography, Toolbar, Link, Menu, MenuItem, Card, CardMedia } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined'
import React, { useState } from 'react'
import { LogoCard } from '../atoms/LogoCard'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
type contentType = {
  title: string,
  url: string,
  isExternal?: boolean,
}
type SeikenchaAppBarProps = {
  hasBack?: boolean
}
export const SeikenchaAppBar: React.FC<SeikenchaAppBarProps> = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const contents: contentType[] = [
    { title: '自己紹介', url: '/profile' },
    { title: '過去作品', url: '/discography' },
    { title: '購入する', url: 'https://seikencha.booth.pm/', isExternal: true },
    { title: 'Twitter', url: 'https://twitter.com/seikencha', isExternal: true },
    { title: 'YouTube', url: 'https://www.youtube.com/channel/UCA9jmCbUl9sN4YNVl__W1VA/videos', isExternal: true },
  ]
  return (
    <Box>
      <AppBar
        sx={{
          backgroundColor: 'white',
          fontSize: 30,
          color: '#542218',
          height: 60
        }}
        position='static'
        elevation={1}>
        <Toolbar>
          {props.hasBack &&
            <Box>
              <Link
                href='/discography'
                sx={{
                  textDecoration: 'none',
                  color: '#542218'
                }} >
                <ArrowBackIcon />
              </Link>
              <Box ml={6} />
            </Box>}
          <Link
            href='/'
            sx={{
              textDecoration: 'none',
              color: '#542218'
            }} >
            <Box display='flex' alignItems='center'>
              <LogoCard />
              <Box ml={2} />
              <Typography
                variant='h1'
                sx={{
                  fontWeightBold: 'FontWeight',
                  fontSize: 30,
                  fontFamily: 'serif'
                }}
              >
                正弦鍵盤茶屋
              </Typography>
            </Box>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setIsMenuOpen(true)
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        open={isMenuOpen}
        onClose={() => {
          setIsMenuOpen(false)
        }}
        keepMounted
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {contents.map((content, index) => (
          <MenuItem key={index}>
            <Box mx={2}>
              <Link
                href={content.url}
                sx={{
                  textDecoration: 'none',
                  color: '#542218'
                }} >
                <Box display='flex' alignItems='center'>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: 'serif'
                    }}>
                    {content.title}
                  </Typography>
                  <Box ml={1} />
                  {content.isExternal ? <LinkOutlinedIcon sx={{ fontSize: 20 }} /> : <Box mx={1} />}
                </Box>
              </Link>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box >
  )
}
