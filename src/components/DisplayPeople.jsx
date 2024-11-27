import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { LoremPicsum } from "react-lorem-picsum";

import InfoModal from './InfoModal';

function DisplayPeople({ characters, loader }) {
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const selectPerson = (person) => {
    setDisplayModal(true);
    setSelectedCharacter(person);
  };

  const handleCloseModal = () => {
    setDisplayModal(false);
    setSelectedCharacter(null);
  };

  return (
    <Box height='89.5%' overflow='auto'>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
        height='fit-content'>
        <Typography variant='h5'>Characters</Typography>
        {characters.length > 0 && !loader ? (
		  <Box display='flex' flexDirection='column' gap='0.5rem'>
            {characters.map((person) => (
			  <>
			  <Box key={person.name}>
				<Typography
                  onClick={() => selectPerson(person)}
                  className="w3-tooltip"
				  sx={{ cursor: 'pointer' }}>
                  <LoremPicsum width={50} height={50} random />
				  Name: {person.name}<span className="w3-text">(<em>Click for more</em>)</span>
                </Typography>
              </Box>
			  </>
            ))}
          </Box>
        ) : loader ? (
          <CircularProgress />
        ) : (
          <Typography width='170px' variant='paragraph' align='center'>
            No data. <br />
            Search characters by character name, homeworld name, homeworld
            population.
          </Typography>
        )}
      </Box>
      <InfoModal
        handleOpen={displayModal}
        selectedCharacter={selectedCharacter}
        handleCloseModal={handleCloseModal}
      />
    </Box>
  );
}

export default DisplayPeople;
