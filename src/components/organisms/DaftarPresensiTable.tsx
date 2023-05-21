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

const DaftarPresensiTable = ({ header, data }: { header: Array<string>, data: Array<Presensi> }) => (
    <Table>
        <Thead>
            <TableHeader header={header} />
        </Thead>
        <Tbody>
            {data.map((presensi, key) => {
                return <PresensiRow presensi={presensi} key={"daftar-presensi-" + key} />
            })}
        </Tbody>
    </Table>
)

export default DaftarPresensiTable