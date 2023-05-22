import {
    Box,
    Button,
    Container,
    Divider,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Text,
    Textarea,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

const UbahPertemuanSection = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

    const [modePerkuliahan, setModePerkuliahan] = useState('1')

    return (
        <>
            <Box as="section" id="ubah-pertemuan-section" py={{ base: '4', md: '8' }}>
                <Container>
                    <Box as="form" bg="bg-surface" boxShadow="sm" borderRadius="lg" action={"/kelas/" + kelasId} method="POST">
                        <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
                            <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
                                <FormControl id="pertemuanKe">
                                    <FormLabel>Pertemuan ke-</FormLabel>
                                    <Input type="number" defaultValue="1" />
                                </FormControl>
                                <FormControl id="ruangan">
                                    <FormLabel>Ruangan</FormLabel>
                                    <Select placeholder='Pilih ruangan'>
                                        <option value='tif101'>TIF 101</option>
                                        <option value='tif102'>TIF 102</option>
                                        <option value='tif103' selected>TIF 103</option>
                                    </Select>
                                </FormControl>
                            </Stack>
                            <Stack spacing="6" direction={{ base: 'column', md: 'row' }}>
                                <FormControl id="tanggal">
                                    <FormLabel>Tanggal</FormLabel>
                                    <Input type="date" defaultValue="05-05-2023" />
                                </FormControl>
                                <FormControl id="jamMulai">
                                    <FormLabel>Jam Selesai</FormLabel>
                                    <Input type="time" defaultValue="13:30" />
                                </FormControl>
                                <FormControl id="jamSelesai">
                                    <FormLabel>Jam Selesai</FormLabel>
                                    <Input type="time" defaultValue="16:20" />
                                </FormControl>
                            </Stack>
                            <FormControl id="topikPerkuliahan">
                                <FormLabel>Topik Perkuliahan</FormLabel>
                                <Textarea>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus illum maxime aspernatur excepturi accusantium corrupti placeat libero. Soluta reprehenderit molestiae sunt quia ratione.
                                </Textarea>
                            </FormControl>
                            <FormControl id="topikPerkuliahanEn">
                                <FormLabel>Topik Perkuliahan EN</FormLabel>
                                <Textarea>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam possimus illum maxime aspernatur excepturi accusantium corrupti placeat libero. Soluta reprehenderit molestiae sunt quia ratione.
                                </Textarea>
                            </FormControl>
                            <FormControl id="modePerkuliahan">
                                <RadioGroup onChange={setModePerkuliahan} value={modePerkuliahan}>
                                    <Stack spacing="4">
                                        <Radio value='1'>
                                            <Text as="i">Online</Text>
                                            <Text fontSize="12">Dosen dan mahasiswa terhubung melalui internet</Text>
                                        </Radio>
                                        <Radio value='2'>
                                            <Text as="i">Offline</Text>
                                            <Text fontSize="12">Dosen dan mahasiswa berada di ruangan yang sama</Text>
                                        </Radio>
                                        <Radio value='3' defaultChecked>
                                            <Text as="i">Hybrid</Text>
                                            <Text fontSize="12">Pertemuan kombinasi <i>online</i> dan <i>offline</i></Text>
                                        </Radio>
                                    </Stack>
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                        <Divider />
                        <Flex direction="row-reverse" py="4" px={{ base: '4', md: '6' }}>
                            <Button type="submit" variant="primary">
                                Save
                            </Button>
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default UbahPertemuanSection