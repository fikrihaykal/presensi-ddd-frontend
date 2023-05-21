import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import DaftarPertemuanTable from './DaftarPertemuanTable'
import { daftarPertemuan, kolomPertemuan } from '@/data/dummy'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

const DaftarPertemuanSection = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']
    const isMobile = useBreakpointValue({ base: true, md: false })

    return (
        <>
            <Box as="section" id="daftar-pertemuan-section" pb={{ base: '4', md: '8' }}>
                <Container>
                    <Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
                        <Stack spacing="5">
                            <Box px={{ base: '4', md: '6' }} pt="5">
                                <Stack direction={{ base: 'column', md: 'row' }} justify="space-between">
                                    <Text fontSize="lg" fontWeight="medium">
                                        Daftar Pertemuan
                                    </Text>
                                    <Link as={NextLink} href={"/kelas/" + kelasId + "/pertemuan/tambah"}>
                                        <Button colorScheme="blue" variant="solid">Tambah Pertemuan</Button>
                                    </Link>
                                    {/* <InputGroup maxW="xs">
                                        <InputLeftElement pointerEvents="none">
                                            <IoSearch />
                                        </InputLeftElement>
                                        <Input placeholder="Search" />
                                    </InputGroup> */}
                                </Stack>
                            </Box>
                            <Box overflowX="auto">
                                <DaftarPertemuanTable header={kolomPertemuan} data={daftarPertemuan} />
                            </Box>
                            {/* <Box px={{ base: '4', md: '6' }} pb="5">
                                <HStack spacing="3" justify="space-between">
                                    {!isMobile && (
                                        <Text color="muted" fontSize="sm">
                                            Showing 1 to 5 of 42 results
                                        </Text>
                                    )}
                                    <ButtonGroup spacing="3" justifyContent="space-between" width={{ base: 'full', md: 'auto' }} variant="secondary">
                                        <Button>Previous</Button>
                                        <Button>Next</Button>
                                    </ButtonGroup>
                                </HStack>
                            </Box> */}
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default DaftarPertemuanSection