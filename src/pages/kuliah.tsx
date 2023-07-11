import PageTransition from "@/components/PageTransitions"
import { TextHeader, TextSubHeader } from "@/components/atoms/Text"
import { CardStatic, CardStaticHeader } from "@/components/molecules/CardStatic"
import KelasItem from "@/components/molecules/KelasItem"
import { daftarKelas } from "@/data/dummy"
import { Stack } from "@chakra-ui/react"


const Kuliah = () => {

	return (
		<>
			<PageTransition>
				<CardStatic>
					<CardStaticHeader>
						<TextHeader>Daftar Kuliah Anda</TextHeader>
						<TextSubHeader>Semester Gasal 2023/2024</TextSubHeader>
					</CardStaticHeader>
					<Stack spacing="10px">
						{
							(daftarKelas && daftarKelas.length > 0) ?
								daftarKelas.map(
									(kelas, key) => <KelasItem kelas={kelas} key={"list-kelas-" + key} />
								) : null
						}
					</Stack>
				</CardStatic>
			</PageTransition>
		</>
	)
}

export default Kuliah