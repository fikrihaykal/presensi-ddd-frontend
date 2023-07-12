import {
    useReactTable,
    getCoreRowModel,
    ColumnDef,
    flexRender,
} from '@tanstack/react-table'
import { fuzzyFilter } from "@/base/utils/table";
import { Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';

const TableBasic = ({ columns, data }: { columns: ColumnDef<any, any>[], data: any[] }) => {

    const table = useReactTable({
        data,
        columns,
        filterFns: {
            fuzzy: fuzzyFilter,
        },
        getCoreRowModel: getCoreRowModel()
    })

    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => {
                                    return (
                                        <Th key={header.id}>
                                            {header.isPlaceholder
                                                ? null : (
                                                    <Text textAlign="center">
                                                        {
                                                            flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )
                                                        }
                                                    </Text>
                                                )
                                            }
                                        </Th>
                                    )
                                })}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.map(row => {
                            return (
                                <Tr key={row.id}>
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <Td colSpan={cell.column.columnDef.meta?.colSpan ?? 1} rowSpan={cell.column.columnDef.meta?.rowSpan ?? 1} key={cell.id}>
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Td>
                                        )
                                    })}
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableBasic