import AppSettingContext from '@/providers/AppSettingProvider'
import {
    Avatar,
    Box,
    Container,
    Flex,
    HStack,
    Image,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useContext } from 'react'
import { IoLogOut, IoPeopleCircle } from 'react-icons/io5'

const Header = () => {
    const { logoMyIts } = useContext(AppSettingContext)

    return (
        <Box as="section" pos="fixed" w="full" zIndex="1000">
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{ base: '3', lg: '4' }}>
                    <Flex justify="space-between">
                        <HStack spacing="4">
                            <Link as={NextLink} href="/" display="flex" justifyContent="center" alignItems="center">
                                <Image src={logoMyIts} w="55px" mt="5px" />
                                <Text ml="2" fontSize="20px" fontWeight="semibold">{process.env.NEXT_PUBLIC_APP_NAME}</Text>
                            </Link>
                        </HStack>
                        <Menu>
                            <MenuButton>
                                <Avatar boxSize="10" name="Fikri Haykal" src="/images/app/profile-default.jpg"/>
                            </MenuButton>
                            <MenuList>
                                <MenuItem icon={<IoPeopleCircle />}>
                                    Profil
                                </MenuItem>
                                <Link as={NextLink} href="https://dev-my.its.ac.id">
                                    <MenuItem icon={<IoLogOut />} color="darkred">
                                        Kembali ke myITS SSO
                                    </MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Container>
            </Box>
        </Box>
    )
}

export default Header
