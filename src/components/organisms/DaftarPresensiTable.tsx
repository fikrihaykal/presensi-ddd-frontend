import {
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import PresensiRow from '../molecules/PresensiRow'
import TableHeader from './common/TableHeader'
import { Presensi } from '@/types/presensi'
import { StatusPertemuan } from '@/types/pertemuan'

const DaftarPresensiTable = ({ header, data, status }: { header: Array<string>, data: Array<Presensi>, status: StatusPertemuan }) => (
    <Table>
        <Thead>
            <TableHeader header={header} />
        </Thead>
        <Tbody>
            {data.map((presensi, key) => {
                return <PresensiRow presensi={presensi} key={"daftar-presensi-" + key} status={status} />
            })}
        </Tbody>
    </Table>
)

export default DaftarPresensiTable