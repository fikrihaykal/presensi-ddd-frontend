import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import DetailPertemuanSection from '@/components/organisms/DetailPertemuanSection'
import AksiPertemuanSection from '@/components/organisms/AksiPertemuanSection'
import DaftarPresensiSection from '@/components/organisms/DaftarPresensiSection'
import { useRouter } from 'next/router'

const PertemuanTerlewat = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Detail Pertemuan [Terlewat]">
				<PageHeaderSection pageTitle="Detail Pertemuan [Terlewat]" url={"/kelas/" + kelasId} />
				<DetailPertemuanSection status="terlewat" />
				<AksiPertemuanSection status="terlewat" />
				<DaftarPresensiSection status="terlewat" />
			</BaseLayout >
		</>
	)
}

export default PertemuanTerlewat