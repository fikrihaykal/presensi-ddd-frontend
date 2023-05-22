import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import DetailPertemuanSection from '@/components/organisms/DetailPertemuanSection'
import AksiPertemuanSection from '@/components/organisms/AksiPertemuanSection'
import DaftarPresensiSection from '@/components/organisms/DaftarPresensiSection'
import { useRouter } from 'next/router'

const PertemuanBelumMulai = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Detail Pertemuan [Belum Mulai]">
				<PageHeaderSection pageTitle="Detail Pertemuan [Belum Mulai]" url={"/kelas/" + kelasId} />
				<DetailPertemuanSection status="belum-mulai" />
				<AksiPertemuanSection status="belum-mulai" />
				<DaftarPresensiSection status="belum-mulai" />
			</BaseLayout >
		</>
	)
}

export default PertemuanBelumMulai