import '@/styles/globals.css'
import "nprogress/nprogress.css";
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/config/theme'
import { AppSettingProvider } from '@/providers/AppSettingProvider'
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
	() => {
		return import("../components/molecules/TopProgressBar");
	},
	{ ssr: false },
);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<AppSettingProvider>
				<ChakraProvider theme={theme}>
					<TopProgressBar />
					<Component {...pageProps} />
				</ChakraProvider>
			</AppSettingProvider>
		</>
	)
}
