import {
	Badge,
	Box,
	HStack,
	IconButton,
	Link,
	Td,
	Text,
	Tr
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { IoBusinessOutline, IoCalendarClearOutline, IoTimeOutline } from 'react-icons/io5'
import { Pertemuan } from '@/types/pertemuan'
import { FiEdit2, FiEye } from 'react-icons/fi'
import { useRouter } from 'next/router'

const PertemuanRow = ({ pertemuan }: { pertemuan: Pertemuan }) => {
	const router = useRouter()
	const kelasId = router?.query['kelas-id']

	return (
		<>
			<Tr>
				<Td>
					<Link as={NextLink} href={"/kelas/" + kelasId + "/pertemuan/" + pertemuan.id + "/" + pertemuan.status}>
						<Box>
							<Text fontWeight="semibold">{"Pertemuan ke-" + pertemuan.id}</Text>
							<Text color="muted">{pertemuan.deskripsi}</Text>
						</Box>
					</Link>
				</Td>
				<Td>
					<HStack>
						<IoCalendarClearOutline />
						<Text color="muted">{pertemuan.hari}</Text>
					</HStack>
					<HStack>
						<IoTimeOutline />
						<Text color="muted">{pertemuan.jam}</Text>
					</HStack>
					<HStack>
						<IoBusinessOutline />
						<Text color="muted">{pertemuan.lokasi}</Text>
					</HStack>
				</Td>
				<Td textAlign="center">
					<Text fontWeight="semibold" mb="1">{pertemuan.dosen}</Text>
					<Badge size="sm" colorScheme={
						pertemuan.status === "selesai" ?
							'green' : pertemuan.status === "terlewat" ?
								'red' : pertemuan.status === "berlangsung" ?
									'orange' : 'gray'}
					>
						{
							pertemuan.status === "selesai" ?
								'Selesai' : pertemuan.status === "terlewat" ?
									'Terlewat' : pertemuan.status === "berlangsung" ?
										'Berlangsung' : 'Belum dimulai'
						}
					</Badge>
				</Td>
				<Td>
					<HStack spacing="1">
						<Link as={NextLink} href={"/kelas/" + kelasId + "/pertemuan/" + pertemuan.id + "/" + pertemuan.status}>
							<IconButton icon={<FiEye fontSize="1.25rem" />} variant="ghost" aria-label="Lihat pertemuan" />
						</Link>
						<Link as={NextLink} href={"/kelas/" + kelasId + "/pertemuan/" + pertemuan.id + "/ubah"}>
							<IconButton icon={<FiEdit2 fontSize="1.25rem" />} variant="ghost" aria-label="Ubah pertemuan" />
						</Link>
					</HStack>
				</Td>
			</Tr>
		</>
	)
}

export default PertemuanRow