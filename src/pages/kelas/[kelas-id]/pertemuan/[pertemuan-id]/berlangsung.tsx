import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import DetailPertemuanSection from '@/components/organisms/DetailPertemuanSection'
import AksiPertemuanSection from '@/components/organisms/AksiPertemuanSection'
import DaftarPresensiSection from '@/components/organisms/DaftarPresensiSection'
import { useRouter } from 'next/router'

const PertemuanBerlangsung = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Detail Pertemuan [Berlangsung]">
				<PageHeaderSection pageTitle="Detail Pertemuan [Berlangsung]" url={"/kelas/" + kelasId} />
				<DetailPertemuanSection status="berlangsung" />
				<AksiPertemuanSection status="berlangsung" />
				<DaftarPresensiSection status="berlangsung" />
			</BaseLayout >
		</>
	)
}

export default PertemuanBerlangsung