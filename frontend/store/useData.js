import { create } from "zustand"
import { myAxios } from "../lib/axios";
export const useData = create((set) => ({
    isLoading: false,
    quranList: [],
    surah: [],

    getQuranListFn: async () => {
        set({ isLoading: true })
        try {
            const res = await myAxios.get("/quran-list")
            console.log(res.data.AllQuranList);
            set({ quranList: res.data.AllQuranList })

        } catch (error) {
            console.log(error);

        } finally {
            set({ isLoading: false })

        }
    },
    gatSurah: async (id) => {
        try {
            const res = await myAxios.get(`/surah/${id}`)
            console.log(res.data.GetSurah);
            set({ surah: res.data.GetSurah })

        } catch (error) {
            console.log(error);

        }
    }
}))