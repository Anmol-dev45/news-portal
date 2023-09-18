'use client'

import { useState } from "react"

const Translator = () => {
    const [isLanguageEnglish, setIsLanguageEnglish] = useState(true)
    return (
        <div className="flex items-center gap-2 text-dark" onClick={ () => setIsLanguageEnglish(!isLanguageEnglish)}>
            <div><img src="/translator.svg" alt=""/></div>
            <div><p className="text-sm font-medium">{isLanguageEnglish? 'English': 'Nepali'}</p></div>
        </div>
    )
}

export default Translator