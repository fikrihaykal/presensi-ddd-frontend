import {
	Card,
	CardProps,
	Stack
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardStaticInterface extends CardProps {
	children?: ReactNode;
	cardProps?: CardProps;
}

const CardStatic = ({ children, ...cardProps }: CardStaticInterface) => {
	return (
		<>
			<Card
				pos="relative"
				p="20px"
				border="1px solid #ededf0"
				boxShadow="none"
				borderRadius="10px"
				{...cardProps}
			>
				{children ?? null}
			</Card>
		</>
	);
};

const CardStaticHeader = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Stack mb="25px" spacing="0px">
				{children ?? null}
			</Stack>
		</>
	);
};

export { CardStatic, CardStaticHeader };
