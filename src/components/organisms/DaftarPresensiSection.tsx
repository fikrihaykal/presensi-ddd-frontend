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
import { StatusPertemuan } from '@/types/pertemuan'

const DaftarPresensiSection = ({ status }: { status: StatusPertemuan }) => {

    return (
        <>
            <Box as="section" id="statistik-presensi-section" pb={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <StatGroup alignItems="center" justifyContent="space-between">
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="green">Hadir</Badge>
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
                                    <Badge colorScheme="red">Alpa/Belum Tercatat</Badge>
                                </StatLabel>
                                <StatNumber>2</StatNumber>
                            </Stat>
                            <Stat textAlign="center">
                                <StatLabel>
                                    <Badge colorScheme="gray">Total Mahasiswa</Badge>
                                </StatLabel>
                                <StatNumber>16</StatNumber>
                            </Stat>
                            {
                                status === "berlangsung" || status === "selesai" ?
                                    <>
                                        <Stack>
                                            <Button colorScheme="green">Tandai Semua Hadir</Button>
                                            <Button colorScheme="red">Tandai Semua Alpa</Button>
                                        </Stack>
                                    </> : null
                            }
                        </StatGroup>
                    </Box>
                </Container>
            </Box>

            <Box as="section" id="daftar-presensi-section" pb={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <Stack spacing="5">
                            <Box overflowX="auto">
                                <DaftarPresensiTable header={kolomPresensi} data={daftarPresensi} status={status} />
                            </Box>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DaftarPresensiSection