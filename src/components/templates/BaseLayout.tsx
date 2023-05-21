import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Head from "next/head";
import MainMeta from "./MainMeta";

const BaseLayout = ({ children, pageName }: { children: ReactNode, pageName: string }) => {
    const pageTitle = pageName + " | " + process.env.NEXT_PUBLIC_APP_NAME_FULL

    return (
        <>
            <MainMeta />

            <Head>
                <title>{pageTitle}</title>
            </Head>

            <Flex flexDir="column" minH="100vh">
                <Header />

                <Content>
                    {children}
                </Content>

                <Footer />
            </Flex>
        </>
    )
}

export default BaseLayout