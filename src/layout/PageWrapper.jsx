import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const PageWrapper = (props) => {
  return (
    <Box component={props.component} padding={3} sx={{ bgcolor: 'gray' }}>
      <Container maxWidth='lg'>
        <Box display='flex' justifyContent='space-around' flexWrap='wrap'>
          <Typography
            component='h6'
            variant='h6'
            textTransform='capitalize'
            fontWeight={700}>
            {props.text}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PageWrapper;
