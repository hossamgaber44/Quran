import { createContext, useState, useEffect } from "react";
export const QuranContext = createContext({});


const ContextProvider = (props) => {

    const [Quran, setQuran] = useState('')
    async function fetchData() {
        try {
            const response = await fetch("https://quran-endpoint.vercel.app/quran");
            const data = await response.json();
            setQuran(data);
        } catch (error) {
            console.log(error)
        }
    }

    const [textOfQuran, setTextOfQuran] = useState('')
    async function fetchtextOfQuran() {
        try {
            const response = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani");
            const data = await response.json();
            setTextOfQuran(data);
        } catch (error) {
            console.log(error)
        }
    }

    const [quranAudio, setQuranAudio] = useState('')
    async function fetchQuranAudio() {
        try {
            const response = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy");
            const data = await response.json();
            setQuranAudio(data);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchData()
        fetchtextOfQuran()
        fetchQuranAudio()
    }, [])

    const valuee = { Quran, textOfQuran, quranAudio }
    return (
        <QuranContext.Provider value={valuee} >
            {props.children}
        </QuranContext.Provider>
    );

};

/*    const respo = await fetch("https://mp3quran.net/api/v3/languages");
          const resp = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy");// صوت
          const re =await fetch("https://api.alquran.cloud/v1/meta");// تفاصيل القرءان
          const response = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani");//قراءه
          */

export default ContextProvider;
