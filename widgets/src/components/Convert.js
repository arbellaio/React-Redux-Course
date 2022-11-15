import React, {useEffect, useState} from "react";
import axios from "axios";
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"

const TranslateGoogleAPIKEY = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const Convert = ({language, text}) => {
    const [translatedText, setTranslatedText] = useState("");
    const [debouncedText, setDebouncedText] = useState("")

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)
        return() => {
            clearTimeout(timerId)
        }
    }, [text])
    useEffect(() => {
        const doTranslation = async () => {
         const {data} = await axios.post('https://translation.googleapis.com/' +
                'language/translate/v2',{},
                {
                    params:{
                        q: debouncedText,
                        target: language.value,
                        key: TranslateGoogleAPIKEY,
                    }
                })
            setTranslatedText(data.data.translations[0].translatedText)
        }
        doTranslation();
        console.log("New Language Or Text")
    }, [debouncedText, language])

  return(
      <div>
          <h1 className={"ui header"}>{translatedText}</h1>
      </div>
  )
}

export default Convert;
