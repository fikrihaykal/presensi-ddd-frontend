import { Heading, Text } from "@chakra-ui/react"
import { ReactNode } from "react"

const TextHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Heading
            fontFamily="poppins"
            fontWeight="medium"
            fontSize="17.5px"
        >
            {children}
        </Heading>
    )
}

const TextSubHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text
            fontSize="14px"
            fontWeight="400"
        >
            {children}
        </Text>
    )
}

export { TextHeader, TextSubHeader }