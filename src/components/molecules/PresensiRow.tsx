import {
	Badge,
	Box,
	Button,
	HStack,
	IconButton,
	Link,
	Td,
	Text,
	Tr
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { Presensi } from '@/types/presensi'
import { FiEdit2, FiEye } from 'react-icons/fi'
import { useRouter } from 'next/router'

const PresensiRow = ({ presensi }: { presensi: Presensi }) => {
	const router = useRouter()
	const kelasId = router?.query['kelas-id']

	return (
		<>
			<Tr>
				<Td>
					<Box>
						<Text fontWeight="semibold">{presensi.id}</Text>
						<Text color="muted">{presensi.nama}</Text>
					</Box>
				</Td>
				<Td>
					<Badge size="sm" colorScheme={
						presensi.status === 1 ?
							'green' : presensi.status === 2 ?
								'blue' : presensi.status === 3 ?
									'yellow' : 'red'}
					>
						{
							presensi.status === 1 ?
								'Hadir' : presensi.status === 2 ?
									'Sakit' : presensi.status === 3 ?
										'Izin' : 'Alpa'
						}
					</Badge>
				</Td>
				<Td w="20%">
					<HStack spacing="1">
						<Button>H</Button>
						<Button>S</Button>
						<Button>I</Button>
						<Button>A</Button>
					</HStack>
				</Td>
			</Tr>
		</>
	)
}

export default PresensiRow