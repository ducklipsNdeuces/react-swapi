import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import SearchPeople from '../components/SearchPeople';
import Background from './Background';
import ProductHeroLayoutRoot from './ProductHeroLayoutRoot';

function ProductHeroLayout(props) {
  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />
        <Background sx={props.sxBackground} />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            opacity: 0.8,
            '& > :not(style)': {
              m: 1,
              width: {
                xs: 300,
                sm: 400,
                md: 512,
              },
              height: 512,
            },
          }}>
          <Paper sx={{ bgcolor: 'gray' }} elevation={3}>
            <SearchPeople />
          </Paper>
        </Box>
      </Container>
    </ProductHeroLayoutRoot>
  );
}

export default ProductHeroLayout;
