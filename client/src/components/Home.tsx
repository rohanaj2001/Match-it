import React from 'react'
import MovingComponent from 'react-moving-text'
import { Text } from '@chakra-ui/react'
import '../css/style.css'
export default function Home() {
    return (
        <div className='pageContainer' id='home'>
            <div>
                <MovingComponent
                    type="fadeInFromLeft"
                    duration="800ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    <Text fontSize='9xl' fontWeight ='bold' color={'gray.50'}>Welcome</Text>
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
                    <Text fontSize='9xl' fontWeight ='bold' color={'gray.50'}>To</Text>
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
                    <Text fontSize='9xl' fontWeight ='bold' color={'gray.50'}>Match-It</Text>
                </MovingComponent>
            </div>
        </div>
    )
}
