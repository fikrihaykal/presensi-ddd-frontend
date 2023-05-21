import {
    Badge,
    Box,
    Button,
    Container,
    Stack,
    Stat,
    StatGroup,
    StatLabel,
    StatNumber,
} from '@chakra-ui/react'
import DaftarPresensiTable from './DaftarPresensiTable'
import { daftarPresensi, kolomPresensi } from '@/data/dummy'

const DaftarPresensiSection = () => {

    return (
        <>
            <Box as="section" id="statistik-presensi-section" pb={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <StatGroup alignItems="center" justifyContent="space-between">
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="gray">Total Mahasiswa</Badge>
                                </StatLabel>
                                <StatNumber>16</StatNumber>
                            </Stat>
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="green">hadir</Badge>
                                </StatLabel>
                                <StatNumber>8</StatNumber>
                            </Stat>
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="yellow">Izin</Badge>
                                </StatLabel>
                                <StatNumber>3</StatNumber>
                            </Stat>
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="blue">Sakit</Badge>
                                </StatLabel>
                                <StatNumber>3</StatNumber>
                            </Stat>
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="red">Alpa</Badge>
                                </StatLabel>
                                <StatNumber>2</StatNumber>
                            </Stat>
                            <Stack>
                                <Button colorScheme="green">Tandai Semua Hadir</Button>
                                <Button colorScheme="red">Tandai Semua Alpa</Button>
                            </Stack>
                        </StatGroup>
                    </Box>
                </Container>
            </Box>

            <Box as="section" id="daftar-presensi-section" pb={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <Stack spacing="5">
                            <Box overflowX="auto">
                                <DaftarPresensiTable header={kolomPresensi} data={daftarPresensi} />
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DaftarPresensiSection