import {
    Box,
    Button,
    Container,
    Link,
    Stack,
    StackDivider,
    Text,
} from '@chakra-ui/react'
import { IoArrowBack } from 'react-icons/io5'
import NextLink from 'next/link'

const PageHeaderSection = ({ pageTitle, url }: { pageTitle: string, url: string }) => {
    return (
        <>
            <Box as="section" id="page-header-section" pt={{ base: '4', md: '8' }}>
                <Container>
                    <Stack direction={{ base: 'column', md: 'row' }} alignItems="center" divider={<StackDivider />}>
                        <Link as={NextLink} href={url}>
                            <Button variant="outline" alignItems="center">
                                <IoArrowBack />
                                <Text ml="2">Kembali</Text>
                            </Button>
                        </Link>
                        <Text fontWeight="semibold" fontSize="20px">
                            {pageTitle}
                        </Text>
                    </Stack>
                </Container>
            </Box>
        </>
    )
}

export default PageHeaderSection