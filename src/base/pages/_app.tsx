import Footer from "@/base/components/organisms/Footer";
import Header from "@/base/components/organisms/Header";
import NotifToast from "@/base/components/organisms/NotifToast";
import Sidebar2 from "@/base/components/organisms/Sidebar2";
import {
	foundationsSrc,
	komponenSrc,
	patternSrc,
	stylesSrc,
} from "@/base/data/image";
import AppSettingContext, {
	AppSettingProvider,
} from "@/base/providers/AppSettingProvider";
import "nprogress/nprogress.css";
import theme from "@/base/theme/theme";
import { preloadImages } from "@/base/utils/image_preload";
import {
	Box,
	ChakraProvider,
	Flex,
	Stack,
	useColorMode,
} from "@chakra-ui/react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { ReactNode, useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic'

const AppWrapper = ({ children }: { children: ReactNode }) => {
	const { isLoading } = useContext(AppSettingContext);
	const { colorMode } = useColorMode();

	const [imgLoad, setImgLoad] = useState(Array<ReactNode>);

	useEffect(() => {
		const sources = preloadImages(
			komponenSrc,
			stylesSrc,
			foundationsSrc,
			patternSrc
		);
		setImgLoad(sources);
	}, []);

	return (
		<>
			{isLoading && colorMode !== undefined ? (
				<div id="globalLoader">
					<div style={{ display: "flex" }}>
						{/* <img id="logoimage" /> */}
						<div
							id="text-loading"
							style={{
								fontFamily: "inter",
								fontSize: "2rem",
								marginLeft: "10px",
								fontWeight: "600",
							}}
						>
							{process.env.NEXT_PUBLIC_APP_NAME}
						</div>
					</div>
					<div className="dot-flashing" style={{ marginTop: "14px" }}></div>
				</div>
			) : null}

			{imgLoad?.map((img, i) => (
				<div key={i} style={{ position: "absolute" }}>
					{img}
				</div>
			))}
			{children}
		</>
	);
};

const TopProgressBar = dynamic(
	() => {
		return import("../components/molecules/TopProgressBar");
	},
	{ ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [queryClient] = useState(() => new QueryClient());
	if (router.pathname === "/_error") return <Component {...pageProps} />;

	return (
		<>
			<AppSettingProvider>
				<QueryClientProvider client={queryClient}>
					<ChakraProvider theme={theme}>
						<AppWrapper>
							<Flex flexDir="column" minH="100vh">
								<Header />
								<Box id="top"></Box>
								<Box
									h="100vh"
									pos="relative"
									pl={{ base: "20px", md: "20px", lg: "25px", xl: "140px" }}
									pr={{ base: "20px", md: "20px", lg: "25px", xl: "140px" }}
								>
									<Flex flexDir="column" minH="calc(100vh - 80px)">
										<Flex justifyContent="start" minH="100vh" pos="relative">
											<Sidebar2 />
											<Stack
												w="full"
												mt={{ base: "80px", xl: "100px" }}
												mr={{ base: "0px", xl: "50px" }}
												ml={{ xl: "5px" }}
												mb={60}
											>
												<Hydrate state={pageProps.dehydratedState}>
													<AnimatePresence
														mode="wait"
														initial={false}
														onExitComplete={() => {
															document.getElementById("top")?.scrollIntoView();
														}}
													>
														<TopProgressBar />
														<Component key={router.route} {...pageProps} />
													</AnimatePresence>
												</Hydrate>
											</Stack>
										</Flex>
									</Flex>
									<Footer />
									{/* <NotifToast /> */}
								</Box>
							</Flex>
						</AppWrapper>
					</ChakraProvider>
				</QueryClientProvider>
			</AppSettingProvider>
		</>
	);
}

export { getServerSideProps } from "@/Chakra";
