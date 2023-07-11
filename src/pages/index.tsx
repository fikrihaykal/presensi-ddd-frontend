import PageTransition from "@/components/PageTransitions";
import CardIcon from "@/components/molecules/CardIcon";
import {
	Box,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { useContext } from 'react'
import AppSettingContext from '@/providers/AppSettingProvider'

const Beranda = () => {
	const { monthData, dayData } = useContext(AppSettingContext)

	const now = new Date()
	const nowDate = now.getDate()
	const nowMonth = monthData?.[now.getMonth()];
	const nowYear = now.getFullYear();
	const nowDay = dayData?.[now.getDay()];
	return (
		<>
			<PageTransition>
				<Box
					as="section"
					id="dashboard-hero-section"
					pb={{ base: "4", md: "8" }}
				>
					<Stack
						direction={{ base: "column", sm: "row" }}
						justifyContent="space-between"
						alignItems="center"
					>
						<Stack justifyContent="center" h="250px" mb={5}>
							<Heading fontSize={48} fontWeight={600}>
								Hai, Rizky Januar Akbar
							</Heading>
							<Text variant="subtitle" fontSize={22}>
								{nowDay}, {nowDate} {nowMonth} {nowYear}
							</Text>
							<Text variant="subtitle" fontSize={22}>
								Pekan perkuliahan ke-15
							</Text>
						</Stack>

						<Image
							display={{ base: "none", lg: "block" }}
							src="/images/app/myITS-DesignSystem.svg"
							h="200px"
						/>
					</Stack>
				</Box>
				<Box
					as="section"
					id="dashboard-hero-section"
					pb={{ base: "4", md: "8" }}
				>
					<Stack>
						<Stack
							direction={{ base: "column", sm: "row" }}
							justifyContent="space-between"
							alignItems="center"
						>
							{/* <Text fontSize="22px">All Guides</Text> */}
						</Stack>
						<Box className="grid grid-cols-12" pos="relative" gap="10px">
							<CardIcon
								title="Kuliah"
								description={
									<>
										Kuliah selanjutnya: <b>IF184301 - Pemrograman Berorientasi Objek (G)</b>
									</>
								}
								icon="/images/icon/portfolio.svg"
								url="/kelas"
							/>
						</Box>
					</Stack>
				</Box>
			</PageTransition>
		</>
	);
};

export default Beranda;
