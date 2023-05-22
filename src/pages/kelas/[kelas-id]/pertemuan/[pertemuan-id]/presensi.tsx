import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import { useRouter } from 'next/router'
import KodePresensiSection from '@/components/organisms/KodePresensiSection'

const PertemuanSelesai = () => {
	const router = useRouter()
	const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Kode Presensi">
				<PageHeaderSection pageTitle="Kode Presensi" url={"/kelas/" + kelasId + "/pertemuan/berlangsung"} />
				<KodePresensiSection />
			</BaseLayout >
		</>
	)
}

export default PertemuanSelesai