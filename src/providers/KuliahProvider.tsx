import { KuliahContextType } from "@/base/types/setting";
import { Kuliah } from "@/types/kuliah";
import { ReactNode, createContext, useEffect, useState } from "react";

const kuliahContextDefault: KuliahContextType = {
    daftarKuliah: []
}

const KuliahContext = createContext<KuliahContextType>(kuliahContextDefault)

export function KuliahProvider({ children }: { children: ReactNode }) {
    const daftarKuliah: Kuliah[] = []

    return (
        <KuliahContext.Provider value={{
            daftarKuliah
        }}>
            {children}
        </KuliahContext.Provider>
    )
}

export default KuliahContext