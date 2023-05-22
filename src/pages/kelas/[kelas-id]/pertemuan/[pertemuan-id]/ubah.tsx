import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import { useRouter } from 'next/router'
import UbahPertemuanSection from '@/components/organisms/UbahPertemuanSection'

const UbahPertemuan = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Ubah Pertemuan">
				<PageHeaderSection pageTitle="Ubah Pertemuan" url={"/kelas/" + kelasId} />
				<UbahPertemuanSection />
			</BaseLayout >
		</>
	)
}

export default UbahPertemuan