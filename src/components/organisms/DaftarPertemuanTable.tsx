import { Pertemuan } from '@/types/pertemuan'
import {
    Table,
    Tbody,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import PertemuanRow from '../molecules/PertemuanRow'
import TableHeader from './common/TableHeader'

const DaftarPertemuanTable = ({ header, data }: { header: Array<string>, data: Array<Pertemuan> }) => (
    <Table>
        <Thead>
            <TableHeader header={header} />
        </Thead>
        <Tbody>
            {data.map((pertemuan, key) => {
                return <PertemuanRow pertemuan={pertemuan} key={"daftar-pertemuan-" + key} />
            })}
        </Tbody>
    </Table>
)

export default DaftarPertemuanTable