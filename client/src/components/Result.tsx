import React, { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import m1 from '../assets/man_images/man1.svg';
import m2 from '../assets/man_images/man2.svg';
import m3 from '../assets/man_images/man3.svg';
import shirt from '../assets/man_images/shirt.svg';

import '../css/Result.css';

export default function Result() {
  const [color, setColor] = useState('#000000')

  function handleClick() {
    console.log(color);
    setColor('#ffffff');
    
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} h={'100vh'} w={'100vw'} flexDirection={'column'}>
      <section>
      <Flex alignItems={'center'} justifyContent={'space-between'} height={'60vh'} width={'50vw'}>
        <Box onClick={handleClick}>
          <Image src={m1} alt='Outfit-1' className='m1' fill={color} />
        </Box>
        <Box onClick={handleClick}>
          <Image src={m2} alt='Outfit-2' className='m2' fill={color} />
        </Box>
        <Box onClick={handleClick}>
          <Image src={m3} alt='Outfit-3' className='m3' fill={color} />
        </Box>
      </Flex>
      </section>
      <section>
      <Flex      
      h={'auto'}
      w={'30vw'}
      alignItems={'center'}
      justifyContent={'space-between'}>
        <Flex
        h={'20vh'}
        w={'20vh'}
        bgColor={'black'}
        border={'1px solid white'}
        borderRadius={15}
        alignItems={'center'}
      justifyContent={'center'}
        >
          input
        </Flex>
        <Flex
        h={'20vh'}
        w={'20vh'}
        bgColor={'black'}
        border={'1px solid white'}
        borderRadius={15}
        alignItems={'center'}
      justifyContent={'center'}
        >
          output
        </Flex>
      </Flex>     
      </section> 
    </Flex>
  );
}
