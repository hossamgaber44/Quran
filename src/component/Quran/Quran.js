import React, { useContext, useState } from 'react'
import './Quran.css'
import { QuranContext } from '../../Context/Context'
const Quran = () => {
    const { textOfQuran, Quran } = useContext(QuranContext)
    const [value, setValue] = useState('سُورَةُ ٱلْفَاتِحَةِ')

    return (
        <div className='home-container'>
            <div className='quran-img'>
                <img src='img/Quran.jpeg'></img>
            </div>

            {textOfQuran.data ?
                <>
                    <select className='select-surah' onChange={(e) => setValue(e.target.value)}>
                        {textOfQuran.data?.surahs.map(q => [
                            <option key={q.name} value={q.name} >{q.name}</option>
                        ])}
                    </select>
                    {textOfQuran.data?.surahs.map(q => [
                        <div key={q.name} >
                            {q.name === value &&
                                <div className='quran-data'>
                                    <div className='surah-info' >
                                        <h3>{q.name}</h3>
                                        <img src='img/sura.png'></img>
                                    </div>

                                    {q.name === 'سُورَةُ ٱلْفَاتِحَةِ' ?
                                        <div>
                                            {q?.ayahs.map(text => [
                                                <h4 key={text.numberInSurah} className='quran-title'>{text.numberInSurah === 1 && <span>﴿ {text.text} ﴾ </span>} </h4>
                                            ])}
                                            <div className='quran-content-text'>
                                                {q?.ayahs.map(text => [
                                                    <p key={text.numberInSurah} className='quran-text'>{text.numberInSurah != 1 && <span>{text.text}<span>  ﴿{text.numberInSurah - 1}﴾  </span></span>}</p>
                                                ])}
                                            </div>
                                        </div>
                                        :
                                        <div className='quran-content-text'>
                                            <div>
                                                {q?.ayahs.map(text => [
                                                    <p key={text.numberInSurah} className='quran-text'><span>{text.text}<span>  ﴿{text.numberInSurah}﴾  </span></span></p>
                                                ])}
                                            </div>
                                        </div>
                                    }
                                    <h4 className='quran-title'> ﴿ صدق الله العظيم ﴾ </h4>
                                </div>
                            }
                        </div>

                    ])}
                </> :
                <div className='loading-img'>
                    <img src='img/loading.gif'></img>
                </div>
            }

        </div>
    )
}

export default Quran