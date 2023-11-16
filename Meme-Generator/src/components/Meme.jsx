import { useState, useEffect } from "react"

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImgs, setAllMemeImgs] = useState({})

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => setAllMemeImgs(response))
    }, [])

    const getMemeImage = () => {
        const memeArray = allMemeImgs.data.memes
        const randNum = Math.floor(Math.random() * memeArray.length)
        setMeme({
            topText: "",
            bottomText: "",
            randomImg: memeArray[randNum].url
        })
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setMeme({
            ...meme,
            [name]: value
        })
    }

    return (
        <main>
            <div className="form">
                <input 
                name="topText"
                className="form--input"
                type="text" 
                placeholder="Top Text"
                value={meme.topText}
                onChange={handleChange}
                />
                <input
                name="bottomText"
                className="form--input"
                type="text" 
                placeholder="Bottom Text"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button className="submit--button" onClick={getMemeImage} >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImg} alt="" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}