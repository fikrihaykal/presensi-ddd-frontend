import { StatusPertemuan } from '@/types/pertemuan'
import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const AksiPertemuanSection = ({ status }: { status: StatusPertemuan }) => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']
    const [modePerkuliahan, setModePerkuliahan] = useState('1')
    const [kehadiranMengajar, setKehadiranMengajar] = useState('1')
    const [masaPresensi, setMasaPresensi] = useState('1')

    return (
        <>
            {
                status === "selesai" ?
                    <>
                        <Box as="section" id="aksi-pertemuan-section" pb={{ base: '4', md: '8' }}>
                            <Container>
                                <Box>
                                    <Alert status='info' borderRadius="8">
                                        <AlertIcon />
                                        Pertemuan dimulai pada Senin, 22 Mei 2023 13:30 dan berakhir pada 16.20 WIB
                                    </Alert>
                                </Box>
                            </Container>
                        </Box>
                    </> : status === "belum-mulai" ?
                        <>
                            <Box as="section" id="detail-pertemuan-section" pb={{ base: '4', md: '8' }}>
                                <Container maxW="4xl">
                                    <Box as="form" bg="bg-surface" boxShadow="sm" borderRadius="lg" action={"/kelas/" + kelasId + "/pertemuan/berlangsung"} method="POST">
                                        <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }} divider={<StackDivider />}>
                                            <Heading size="xs" fontWeight="medium">Pengaturan Presensi</Heading>
                                            <FormControl id="modePerkuliahan">
                                                <RadioGroup onChange={setModePerkuliahan} value={modePerkuliahan}>
                                                    <Stack spacing="4">
                                                        <Text fontWeight="semibold">Mode Perkuliahan</Text>
                                                        <Radio value='1'>
                                                            <Text as="i">Online</Text>
                                                            <Text fontSize="12">Dosen dan mahasiswa terhubung melalui internet</Text>
                                                        </Radio>
                                                        <Radio value='2'>
                                                            <Text as="i">Offline</Text>
                                                            <Text fontSize="12">Dosen dan mahasiswa berada di ruangan yang sama</Text>
                                                        </Radio>
                                                        <Radio value='3'>
                                                            <Text as="i">Hybrid</Text>
                                                            <Text fontSize="12">Pertemuan kombinasi <i>online</i> dan <i>offline</i></Text>
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormControl id="kehadiranMengajar">
                                                <RadioGroup onChange={setKehadiranMengajar} value={kehadiranMengajar}>
                                                    <Stack spacing="4">
                                                        <Text fontWeight="semibold">Kehadiran Mengajar</Text>
                                                        <Radio value='1'>
                                                            <Text>Saya mengajar di kelas</Text>
                                                        </Radio>
                                                        <Radio value='2'>
                                                            <Text>Saya mengajar secara <i>online</i></Text>
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </FormControl>
                                            <FormControl id="masaPresensi">
                                                <RadioGroup onChange={setMasaPresensi} value={masaPresensi}>
                                                    <Stack spacing="4">
                                                        <Text fontWeight="semibold">Masa Berlaku Kode Presensi / <i>QR Code</i></Text>
                                                        <Radio value='1'>
                                                            <Text>Kode Presensi / <i>QR Code</i> bisa diakses sampai kuliah berakhir</Text>
                                                        </Radio>
                                                        <Radio value='2'>
                                                            <Text>Kode Presensi / <i>QR Code</i> akan kadaluarsa setelah menit.</Text>
                                                            <FormControl id="pertemuanKe">
                                                                <Input type="number" />
                                                            </FormControl>
                                                        </Radio>
                                                    </Stack>
                                                </RadioGroup>
                                            </FormControl>
                                            <Stack>
                                                <Button type="submit" variant="primary">
                                                    OK, Kelas Dimulai
                                                </Button>
                                                <Text>Dengan menekan tombol <b><i>OK, Kelas Dimulai</i></b>, maka Kode Presensi / QRCode bisa mulai diakses.</Text>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Container>
                            </Box>
                        </> : status === "terlewat" ?
                            <>
                                <Box as="section" id="detail-pertemuan-section" pb={{ base: '4', md: '8' }}>
                                    <Container maxW="4xl">
                                        <Box as="form" bg="bg-surface" boxShadow="sm" borderRadius="lg" action={"/kelas/" + kelasId + "/pertemuan/berlangsung"} method="POST">
                                            <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }} divider={<StackDivider />}>
                                                <Stack>
                                                    <Heading size="xs" fontWeight="medium">Lupa Presensi</Heading>
                                                    <Text>Pertemuan ini telah berakhir, tetapi lupa/belum ditandai presensinya. </Text>
                                                </Stack>
                                                <FormControl id="modePerkuliahan">
                                                    <RadioGroup onChange={setModePerkuliahan} value={modePerkuliahan}>
                                                        <Stack spacing="4">
                                                            <Text fontWeight="semibold">Mode Perkuliahan</Text>
                                                            <Radio value='1'>
                                                                <Text as="i">Online</Text>
                                                                <Text fontSize="12">Dosen dan mahasiswa terhubung melalui internet</Text>
                                                            </Radio>
                                                            <Radio value='2'>
                                                                <Text as="i">Offline</Text>
                                                                <Text fontSize="12">Dosen dan mahasiswa berada di ruangan yang sama</Text>
                                                            </Radio>
                                                            <Radio value='3'>
                                                                <Text as="i">Hybrid</Text>
                                                                <Text fontSize="12">Pertemuan kombinasi <i>online</i> dan <i>offline</i></Text>
                                                            </Radio>
                                                        </Stack>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormControl id="kehadiranMengajar">
                                                    <RadioGroup onChange={setKehadiranMengajar} value={kehadiranMengajar}>
                                                        <Stack spacing="4">
                                                            <Text fontWeight="semibold">Kehadiran Mengajar</Text>
                                                            <Radio value='1'>
                                                                <Text>Saya mengajar di kelas</Text>
                                                            </Radio>
                                                            <Radio value='2'>
                                                                <Text>Saya mengajar secara <i>online</i></Text>
                                                            </Radio>
                                                        </Stack>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormControl id="realisasiJamMengajar">
                                                    <Stack spacing="4">
                                                        <Text fontWeight="semibold">Realisasi Jam Mengajar</Text>
                                                        <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
                                                            <FormControl id="jamMulai">
                                                                <FormLabel>Jam Selesai</FormLabel>
                                                                <Input type="time" />
                                                            </FormControl>
                                                            <FormControl id="jamSelesai">
                                                                <FormLabel>Jam Selesai</FormLabel>
                                                                <Input type="time" />
                                                            </FormControl>
                                                        </Stack>
                                                    </Stack>
                                                </FormControl>
                                                <Stack>
                                                    <Button type="submit" variant="primary">
                                                        OK, Tandai Presensi Sekarang
                                                    </Button>
                                                    <Text>Dengan menekan tombol <b><i>OK, Tandai Presensi Sekarang</i></b>, maka presensi pada pertemuan ini bisa mulai ditandai secara manual. </Text>
                                                </Stack>
                                            </Stack>
                                        </Box>
                                    </Container>
                                </Box>
                            </> : status === "berlangsung" ?
                                <>
                                </> : null
            }
        </>
    )
}

export default AksiPertemuanSection