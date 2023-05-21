import BaseLayout from '@/components/templates/BaseLayout'
import GreetingSection from '@/components/organisms/GreetingSection'
import DaftarKelasSection from '@/components/organisms/DaftarKelasSection'

const Beranda = () => {
	return (
		<>
			<BaseLayout pageName="Daftar Kelas">
				<GreetingSection />
				<DaftarKelasSection />
			</BaseLayout >
		</>
	)
}

export default Beranda