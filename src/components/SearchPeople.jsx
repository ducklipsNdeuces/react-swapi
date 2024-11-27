import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DisplayPeople from './DisplayPeople';

const joinArraysAndDeleteDuplicates = (arr1, arr2) => {
  return [...arr1, ...arr2].filter(
    (v, i, a) =>
      a.findIndex((v2) => ['name'].every((k) => v2[k] === v[k])) === i,
  );
};

function SearchPeople() {
  const [searchTerm, setSearchTerm] = useState('');
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(false);
  const [planets, setPlanets] = useState([]);

  const firstRender = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      let nextPage = `https://swapi.dev/api/planets`;
      if (!firstRender.current) {
        while (nextPage) {
          const res = await axios.get(nextPage);
          setPlanets((prevPlanets) => [...prevPlanets, ...res.data.results]);
          nextPage = res.data.next;
        }
      }
    };
    fetchData();
    firstRender.current = true;
  }, []);

  const handleSearch = async (e) => {
    setLoader(true);
    const { value } = e.target.search;
    e.preventDefault();
    setSearchTerm(value);

    const peoplePromise = axios.get(
      `https://swapi.dev/api/people?search=${searchTerm}`,
    );

    const filteredPlanets = planets.filter(
      ({ name, population }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        population.includes(searchTerm),
    );

    const residentsPromises = filteredPlanets.map(async ({ residents }) => {
      const residentUrls = residents;
      const residentRequests = residentUrls.map((url) => axios.get(url));

      return Promise.all(residentRequests).then((responses) =>
        responses.map((res) => res.data),
      );
    });

    const people = await peoplePromise;
    const residents = await Promise.all(residentsPromises);
    const flatResidents = residents.flat();
    const peopleResults = people.data.results;
    const joinedArray = joinArraysAndDeleteDuplicates(
      peopleResults,
      flatResidents,
    );
    setCharacters(joinedArray);
    setLoader(false);
    setSearchTerm('');
  };

  return (
    <Box
      width='100%'
      display='flex'
      flexDirection='column'
      gap='0.5rem'
      height='100%'
      py='0.5rem'>
      <Box
        component='form'
        onSubmit={handleSearch}
        display='flex'
        flexDirection='row'
        gap='0.5rem'
        justifyContent='center'
        width='100%'>
        <Box
          type='text'
          component='input'
          name='search'
          width='40%'
          bgcolor='LightGray'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type='submit' variant='contained' sx={{ width: '40%' }}>
          Search
        </Button>
      </Box>
      <DisplayPeople loader={loader} characters={characters} />
    </Box>
  );
}

export default SearchPeople;
