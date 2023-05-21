import {
	Box,
	Container,
	Stack,
	StackDivider,
	Text
} from '@chakra-ui/react'
import { daftarKelas } from '@/data/dummy'
import KelasItem from '../molecules/KelasItem'

const DaftarKelasSection = () => {
	return (
		<>
			<Box as="section" id="daftar-kelas-section" pb={{ base: '4', md: '8' }}>
				<Container>
					<Box bg="bg-surface" boxShadow="sm" borderRadius="lg" p={{ base: '4', md: '6' }}>
						<Stack spacing="5" divider={<StackDivider />}>
							<Stack spacing="1">
								<Text fontWeight="medium">
									Daftar Kuliah Anda
								</Text>
								<Text fontSize="lg" fontWeight="bold" color="muted">
									Semester Genap 2022/2023
								</Text>
							</Stack>
							{
								(daftarKelas && daftarKelas.length > 0) ?
									daftarKelas.map(
										(kelas, key) => <KelasItem kelas={kelas} key={"list-kelas-" + key} />
									) : null
							}
						</Stack>
					</Box>
				</Container>
			</Box>
		</>
	)
}

export default DaftarKelasSection