import React, { useContext, useState } from 'react'
import './Home.css'
import { QuranContext } from '../../Context/Context'

const Home = () => {
    const [surahName, setSurahName] = useState(' اختر سوره...')
    const [surahSrc, setSurahSrc] = useState('')
    const { Quran } = useContext(QuranContext)
    const handelClick = (name, src) => {
        setSurahName(name)
        setSurahSrc(src)
        const audio = document.getElementById('#audio')
    }
    return (
        <>
            <div className='home-container'>
                <div className='header'>
                    <h1>{surahName}</h1>
                    <audio id='audio' controls autoPlay src={surahSrc}></audio>
                </div>
                {Quran.data ?
                    <div className='surah'>
                        {Quran.data?.map(surah => [
                            <div className='surah-info' key={surah.asma.ar.long} onClick={() => handelClick(surah.asma.ar.long, surah.recitation.full)} >
                                <div className='surah-name'>
                                    <h4>{surah.asma.ar.long}</h4>
                                    <h4>{surah.asma.en.long}</h4>
                                </div>
                                <div className='surah-number'>
                                    <span>{surah.number}</span>
                                </div>
                            </div>
                        ])}
                    </div>
                    : <div className='loading-img'>
                        <img src='img/loading.gif'></img>
                    </div>}
            </div>

        </>
    )
}

export default Home