import { StatusPertemuan } from '@/types/pertemuan'
import {
    Badge,
    Box,
    Button,
    Container,
    HStack,
    Heading,
    Link,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoBusinessOutline, IoCalendarClearOutline, IoTimeOutline } from 'react-icons/io5'
import NextLink from "next/link"

const DetailPertemuanSection = ({ status }: { status: StatusPertemuan }) => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']
    const pertemuanId = router?.query['pertemuan-id']

    return (
        <>
            <Box as="section" id="detail-pertemuan-section" py={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <Stack direction={{ base: 'column', md: 'row' }} alignItems="center" spacing={{ base: '4', sm: '6' }}>
                            <Stack spacing="5" divider={<StackDivider />}>
                                <Heading size="xs" fontWeight="medium">
                                    <Badge colorScheme="blue" variant="solid" mb="1">IF184301</Badge>
                                    <Text>{"Pemrograman Berorientasi Objek (G)"}</Text>
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
                                        Topik Perkuliahan:
                                    </Text>
                                    <Text fontWeight="bold" color="muted">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quidem impedit, cupiditate vitae, ea ex excepturi ratione tempore alias nemo voluptatibus? Quaerat, consequuntur labore.
                                    </Text>
                                </Stack>
                                <Stack spacing="1">
                                    <Text fontWeight="medium">
                                        Dosen:
                                    </Text>
                                    <Text fontWeight="bold" color="muted">
                                        Rizky Januar Akbar
                                    </Text>
                                </Stack>
                            </Stack>
                            {
                                status === "berlangsung" ?
                                    <>
                                        <Stack spacing="4" maxW="20%">
                                            <Link as={NextLink} href={"/kelas/" + kelasId + "/pertemuan/" + pertemuanId + "/presensi"}>
                                                <Button colorScheme="blue" variant="outline" w="100%">Lihat Kode Presensi</Button>
                                            </Link>
                                            <Button colorScheme="blue" variant="solid">Akhiri Pertemuan</Button>
                                            <Text as="i" textAlign="center">Dengan menekan tombol <b>Akhiri Pertemuan</b>, maka pertemuan akan berakhir dan mahasiswa bisa mulai mengisi berita acara</Text>
                                        </Stack>
                                    </> : null
                            }
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DetailPertemuanSection