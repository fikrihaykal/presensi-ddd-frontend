import PageTransition from "@/base/components/PageTransitions"
import { TextHeader, TextSubHeader } from "@/base/components/atoms/Text"
import { CardStatic, CardStaticHeader } from "@/base/components/molecules/CardStatic"
import KuliahItem from "@/components/molecules/KuliahItem"
import { daftarKuliah } from "@/data/dummy"
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
					<Stack mt="20px" spacing="10px">
						{
							(daftarKuliah && daftarKuliah.length > 0) ?
								daftarKuliah.map(
									(kuliah, key) => <KuliahItem kuliah={kuliah} key={"list-kuliah-" + key} />
								) : null
						}
					</Stack>
				</CardStatic>
			</PageTransition>
		</>
	)
}

export default Kuliah