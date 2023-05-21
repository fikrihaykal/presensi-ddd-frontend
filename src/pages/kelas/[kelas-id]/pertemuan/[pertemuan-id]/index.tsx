import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import DetailPertemuanSection from '@/components/organisms/DetailPertemuanSection'
import DaftarPresensiSection from '@/components/organisms/DaftarPresensiSection'
import { useRouter } from 'next/router'

const Beranda = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Detail Pertemuan">
				<PageHeaderSection pageTitle="Detail Pertemuan" url={"/kelas/" + kelasId} />
				<DetailPertemuanSection />
				<DaftarPresensiSection />
			</BaseLayout >
		</>
	)
}

export default Beranda