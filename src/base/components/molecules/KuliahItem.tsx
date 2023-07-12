import {
	Badge,
	Box,
	HStack,
	Link,
	Stack,
	Image,
	Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoBusinessOutline, IoCalendarClearOutline, IoChevronForward, IoTimeOutline } from 'react-icons/io5'
import { Kuliah } from '@/types/kuliah'
import { useColorMode } from '@chakra-ui/react';

const KuliahItem = ({ kuliah }: { kuliah: Kuliah }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<Link as={NextLink} href={"/kuliah/" + kuliah.id}>
				<Stack
					justify="space-between"
					direction="row"
					spacing="4"
					p="15px 20px"
					border="1px solid #ededf0"
					borderRadius="10px"
				>
					<HStack spacing="0">
						<Stack>
							<Image src="/images/icon/portfolio-book.svg" w="35px" mr="15px" />
						</Stack>
						<Stack spacing="3px" fontSize="sm">
							<Box>
								<Badge colorScheme="itsblue" fontWeight="semibold">{kuliah.id}</Badge>
							</Box>
							<Box>
								<Text fontFamily="poppins" color="emphasized" fontSize="15px" fontWeight="medium">
									{kuliah.nama}
								</Text>
							</Box>
							<Stack direction={{ base: 'column', sm: 'row' }} spacing="2" fontSize="13px" color="#8392a5">
								<HStack>
									<IoCalendarClearOutline />
									<Text color="muted">{kuliah.hari}</Text>
								</HStack>
								<HStack>
									<IoTimeOutline />
									<Text color="muted">{kuliah.jam}</Text>
								</HStack>
								<HStack>
									<IoBusinessOutline />
									<Text color="muted">{kuliah.lokasi}</Text>
								</HStack>
							</Stack>
						</Stack>
					</HStack>

					<Stack direction={{ base: 'column', sm: 'row' }} alignItems="center" spacing={{ base: '0', sm: '1' }} color="#8392a5">
						<IoChevronForward size="24px" />
					</Stack>
				</Stack>
			</Link>
		</>
	)
}

export default KuliahItem