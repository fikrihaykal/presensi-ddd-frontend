import {
    Box,
    Container,
    HStack,
    Heading,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react'
import { IoBusinessOutline, IoCalendarClearOutline, IoTimeOutline } from 'react-icons/io5'

const DetailKelasSection = () => {
    return (
        <>
            <Box as="section" id="detail-kelas-section" py={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <Stack spacing="5" divider={<StackDivider />}>
                            <Heading size={{ base: 'xs', md: 'sm' }} fontWeight="medium">
                                {"Pemrograman Berorientasi Objek (G)"}
                            </Heading>
                            <Stack direction={{ base: 'column', sm: 'row' }} spacing={{ base: '2', sm: '6' }} color="muted">
                                <HStack>
                                    <IoCalendarClearOutline />
                                    <Text color="muted">Selasa</Text>
                                </HStack>
                                <HStack>
                                    <IoTimeOutline />
                                    <Text color="muted">13.30 - 16.20</Text>
                                </HStack>
                                <HStack>
                                    <IoBusinessOutline />
                                    <Text color="muted">TIF 104</Text>
                                </HStack>
                            </Stack>
                            <Stack spacing="1">
                                <Text fontWeight="medium">
                                    Dosen:
                                </Text>
                                <Text fontWeight="bold" color="muted">
                                    Fikri Haykal, S.Kom.
                                </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DetailKelasSection