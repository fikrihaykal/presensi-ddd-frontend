import { AppSettingContextType, LanguagePreference, LogoAdvHum, LogoMyIts, ThemePreference } from "@/types/app-setting";
import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useEffect, useState } from "react";
import MonthName from "../lang/month.json"
import DayName from "../lang/day.json"

const appSettingContextDefault: AppSettingContextType = {
    langPref: "id",
    themePref: "light",
    logoMyIts: "/images/app/logo-myits-blue.svg",
    logoAdvHum: "/images/app/advhum-blue.png",
    isNavbarOpen: false,
    monthData: {},
    dayData: {},
}

const AppSettingContext = createContext<AppSettingContextType>(appSettingContextDefault)

export function AppSettingProvider({ children }: { children: ReactNode }) {

    const [langPref, setLangPref] = useState<LanguagePreference>("id")
    const [themePref, setThemePref] = useState<ThemePreference>("light")

    const [logoMyIts, setLogoMyIts] = useState<LogoMyIts>("/images/app/logo-myits-blue.svg")
    const [logoAdvHum, setLogoAdvHum] = useState<LogoAdvHum>("/images/app/advhum-blue.png")

    const [monthData, setMonthData] = useState(MonthName[langPref] ?? MonthName.id)
    const [dayData, setDayData] = useState(DayName[langPref] ?? DayName.id)

    const { isOpen: isNavbarOpen, onToggle: toggleNavbar } = useDisclosure()

    useEffect(() => {
        setMonthData(MonthName[langPref] ?? MonthName.id)
        setDayData(DayName[langPref] ?? DayName.id)

        if (langPref) {
            document.documentElement.setAttribute("lang", langPref)
            localStorage.setItem("language", langPref)
        } else {
            document.documentElement.setAttribute("lang", "id")
        }
    }, [langPref]);

    return (
        <AppSettingContext.Provider value={{
            langPref,
            themePref,
            logoMyIts,
            logoAdvHum,
            isNavbarOpen,
            monthData,
            dayData,

            toggleNavbar
        }}>
            {children}
        </AppSettingContext.Provider>
    )
}

export default AppSettingContext