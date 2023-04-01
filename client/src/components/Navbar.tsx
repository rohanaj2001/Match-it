import { ReactNode } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,  
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { text: 'Home', to: 'home' },
  { text: 'Match', to: 'matchPage' },
  { text: 'Help', to: 'home' },
  { text: 'Contact', to: 'contact' },
];

const NavLink = ({ children, to }: { children: ReactNode; to: string }) => (
  <ScrollLink
    to={to}
    spy={true}
    smooth={true}
    duration={500}
    offset={120} // Adjust the offset here
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      color: 'blue.200',
    }}
    href={to}>
    {children}
  </ScrollLink>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('blue.900', 'gray.900')} color='gray.50' px={4} h={'10vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'fixed'} w={'100vw'}>
        <Flex h={16} alignItems={'center'} justifyContent={'center'}>
          <IconButton   
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>matchIt</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link.text} to={link.to}>
                  {link.text}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.text} to={link.to}>
                  {link.text}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
