import AllQuranList from '../data/quran.json' with { type: "json" };

export const GetAllQuranList = async (req, res) => {
    try {
        res.status(200).json({ AllQuranList })
    } catch (error) {
        console.log(error);

    }
}
export const GetSurah = async (req, res) => {
    const { id } = req.params
    try {
        if (id > 1 && id < 115) {
            const { default: GetSurah } = await import(`../data/surah/${id}.json`, { with: { type: "json" } })
            res.status(200).json({ GetSurah })
        } else {
            return res.status(400).json({ message: "invalid Id" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })

    }
}