import {
	Badge,
	Box,
	Button,
	HStack,
	Td,
	Text,
	Tr
} from '@chakra-ui/react'
import { Presensi } from '@/types/presensi'
import { StatusPertemuan } from '@/types/pertemuan'

const PresensiRow = ({ presensi, status }: { presensi: Presensi, status: StatusPertemuan }) => {

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
					{
						status === "berlangsung" || status === "selesai" ?
							<>
								<HStack spacing="1">
									<Button>H</Button>
									<Button>S</Button>
									<Button>I</Button>
									<Button>A</Button>
								</HStack>
							</> : <Text color="red">BELUM TERCATAT</Text>
					}
				</Td>
			</Tr>
		</>
	)
}

export default PresensiRow