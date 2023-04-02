import React from 'react'
// import MovingComponent from 'react-moving-text'
import { Flex, Text, background, Image, Box } from '@chakra-ui/react'
import '../css/style.css'
import Cube from '../assets/cube.svg'
export default function Home() {
    return (
        <Flex id='home' justifyContent={'center'} alignItems={'center'} backgroundColor={'#1A1A1D'} flexDirection={'column'} h={'100vh'} padding={0} margin={0}>
            {/* <div>
                <MovingComponent                
                    type="fadeInFromLeft"
                    duration="800ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <Text fontSize='9xl' fontWeight='bold' color={'#C3073F'}>Welcome</Text>
                </MovingComponent>
            </div>
            <div>
                <MovingComponent
                    type="fadeInFromRight"
                    duration="800ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <Text fontSize='9xl' fontWeight='bold' color={'#C3073F'}>To</Text>
                </MovingComponent>
            </div>
            <div>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="800ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <Text fontSize='9xl' fontWeight='bold' color={'#C3073F'}>Match-It</Text>
                </MovingComponent>
            </div> */}
            <Flex boxSize='sm' justifyContent={'center'} alignItems={'center'} padding={0} margin={0}>
                <Image src={Cube} alt='Dan Abramov' />
            </Flex>
        </Flex>
    )
}
