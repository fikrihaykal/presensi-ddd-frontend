import {
    Th,
    Tr
} from '@chakra-ui/react'

const TableHeader = ({ header }: { header: Array<string> }) => {
    return (
        <>
            <Tr>
                {header.map((item) => (
                    <Th fontWeight="semibold" fontSize="16px" key={"table-header-" + item}>{item}</Th>
                ))}
            </Tr>
        </>
    )
}

export default TableHeader