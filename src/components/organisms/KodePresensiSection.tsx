import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useQRCode } from 'next-qrcode';

const KodePresensiSection = () => {
    const { Canvas } = useQRCode();
    return (
        <>
            <Box as="section" id="detail-kelas-section" py={{ base: '4', md: '8' }}>
                <Container>
                    <Center>
                        <Stack spacing="4">
                            <Canvas
                                text={'eyJwZXJ0ZW11YW5faWQiOiI5QTMyOUZENi04MTVELTRBQkUtQTJCNS1CODk3QUJCNTQyNzgiLCJrb2RlX2Frc2VzIjoiMjI2MjUwIn0='}
                                options={{
                                    level: 'H',
                                    margin: 3,
                                    scale: 10,
                                    width: 500,
                                    color: {
                                        dark: '#000000',
                                        light: '#FFFFFF',
                                    },
                                }}
                            />
                            <Heading size="md" textAlign="center">226250</Heading>
                            <Text textAlign="center">Kode akses berlaku sampai Senin, 22 Mei 2023 12:30 WIB</Text>
                            <Flex justifyContent="center">
                                <Link as={NextLink} href="/" textAlign="center">
                                    <Button colorScheme="blue" variant="solid">Ganti Kode Presensi</Button>
                                </Link>
                            </Flex>
                        </Stack>
                    </Center>
                </Container>
            </Box>
        </>
    )
}

export default KodePresensiSection