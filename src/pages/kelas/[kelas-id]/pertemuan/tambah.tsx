import BaseLayout from '@/components/templates/BaseLayout'
import PageHeaderSection from '@/components/organisms/common/PageHeaderSection'
import { useRouter } from 'next/router'
import TambahPertemuanSection from '@/components/organisms/TambahPertemuanSection'

const TambahPertemuan = () => {
    const router = useRouter()
    const kelasId = router?.query['kelas-id']

	return (
		<>
			<BaseLayout pageName="Tambah Pertemuan">
				<PageHeaderSection pageTitle="Tambah Pertemuan" url={"/kelas/" + kelasId} />
				<TambahPertemuanSection />
			</BaseLayout >
		</>
	)
}

export default TambahPertemuan