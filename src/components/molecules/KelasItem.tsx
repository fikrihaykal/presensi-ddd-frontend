import {
	Badge,
	Box,
	HStack,
	Link,
	Stack,
	Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoBusinessOutline, IoCalendarClearOutline, IoChevronForward, IoTimeOutline } from 'react-icons/io5'
import { Kelas } from '@/types/kelas'

const KelasItem = ({ kelas }: { kelas: Kelas }) => {
	return (
		<>
			<Link as={NextLink} href={"/kelas/" + kelas.id}>
				<Stack justify="space-between" direction="row" spacing="4">
					<Stack spacing="2" fontSize="sm">
						<Box>
							<Badge colorScheme="blue" variant="solid">{kelas.id}</Badge>
						</Box>
						<Box>
							<Text color="emphasized" fontSize="16px" fontWeight="semibold">
								{kelas.nama}
							</Text>
						</Box>
						<Stack direction={{ base: 'column', sm: 'row' }} spacing="3">
							<HStack>
								<IoCalendarClearOutline />
								<Text color="muted">{kelas.hari}</Text>
							</HStack>
							<HStack>
								<IoTimeOutline />
								<Text color="muted">{kelas.jam}</Text>
							</HStack>
							<HStack>
								<IoBusinessOutline />
								<Text color="muted">{kelas.lokasi}</Text>
							</HStack>
						</Stack>
					</Stack>

					<Stack direction={{ base: 'column', sm: 'row' }} alignItems="center" spacing={{ base: '0', sm: '1' }}>
						<IoChevronForward size="24px" />
					</Stack>
				</Stack>
			</Link>
		</>
	)
}

export default KelasItem