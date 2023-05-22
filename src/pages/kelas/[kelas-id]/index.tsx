import BaseLayout from '@/components/templates/BaseLayout'
import DaftarPertemuanSection from '@/components/organisms/DaftarPertemuanSection'
import DetailKelasSection from '@/components/organisms/DetailKelasSection'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'

const DetailKelas = () => {

	return (
		<>
			<BaseLayout pageName="Detail Kelas">
				<PageHeaderSection pageTitle="Detail Kelas" url="/" />
				<DetailKelasSection />
				<DaftarPertemuanSection />
			</BaseLayout >
		</>
	)
}

export default DetailKelas