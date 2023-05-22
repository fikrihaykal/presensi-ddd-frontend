import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import DetailPertemuanSection from '@/components/organisms/DetailPertemuanSection'
import AksiPertemuanSection from '@/components/organisms/AksiPertemuanSection'
import DaftarPresensiSection from '@/components/organisms/DaftarPresensiSection'
import { useRouter } from 'next/router'

const PertemuanSelesai = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Detail Pertemuan [Selesai]">
				<PageHeaderSection pageTitle="Detail Pertemuan [Selesai]" url={"/kelas/" + kelasId} />
				<DetailPertemuanSection status="selesai" />
				<AksiPertemuanSection status="selesai" />
				<DaftarPresensiSection status="selesai" />
			</BaseLayout >
		</>
	)
}

export default PertemuanSelesai