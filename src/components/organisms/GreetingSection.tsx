import AppSettingContext from '@/providers/AppSettingProvider'
import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
} from '@chakra-ui/react'
import { useContext } from 'react'

const GreetingSection = () => {
    const { monthData, dayData } = useContext(AppSettingContext)

    const now = new Date()
    const nowDate = now.getDate()
    const nowMonth = monthData?.[now.getMonth()];
    const nowYear = now.getFullYear();
    const nowDay = dayData?.[now.getDay()];

    return (
        <>
            <Box as="section" id="greeting-section" py={{ base: '4', md: '8' }}>
                <Container>
                    <Stack spacing="5">
                        <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                            <Stack spacing="1">
                                <Text fontWeight="medium">
                                    Selamat datang,
                                </Text>
                                <Text fontSize="lg" fontWeight="bold" color="muted">
                                    Rizky Januar Akbar
                                </Text>
                            </Stack>
                        </Box>
                        <SimpleGrid columns={2} spacing={5}>
                            <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                                <Stack spacing="1">
                                    <Text fontWeight="medium">
                                        Hari ini: {nowDay}, {nowDate} {nowMonth} {nowYear}
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" color="muted">
                                        Pekan Perkuliahan ke-16
                                    </Text>
                                </Stack>
                            </Box>
                            <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                                <Stack spacing="1">
                                    <Text fontWeight="medium">
                                        Kuliah yang akan datang
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" color="muted">
                                        {"IF184301 - Pemrograman Berorientasi Objek (G)"}
                                    </Text>
                                </Stack>
                            </Box>
                        </SimpleGrid>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default GreetingSection