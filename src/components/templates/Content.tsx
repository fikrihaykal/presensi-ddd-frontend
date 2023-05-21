import {
    Box,
} from '@chakra-ui/react'
import { ReactNode, useContext } from 'react'

const Content = ({ children }: { children: ReactNode }) => {
    return (
        <Box pos="relative" mt="80px">
            {children}
        </Box>
    )
}

export default Content
