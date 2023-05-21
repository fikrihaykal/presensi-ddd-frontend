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

const Footer = () => {
    const { logoAdvHum } = useContext(AppSettingContext)

    return (
        <Box as="footer">
            <Container py={{ base: '3', lg: '4' }}>
                <Flex flexWrap="wrap" w="full" h="70px" justifyContent="space-between" alignItems="center">
                    <Flex w={{ base: "full", lg: "fit-content" }} justifyContent={{ base: "center", lg: "start" }}>
                        <Text as="span">Copyright © {new Date().getFullYear()} Institut Teknologi Sepuluh Nopember</Text>
                    </Flex>
                    <Flex w={{ base: "full", lg: "fit-content" }} justifyContent={{ base: "center", lg: "end" }}>
                        <Image src={logoAdvHum} h="60px" />
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
}

export default Footer
