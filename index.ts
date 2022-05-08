/*
Copyright (c) 2022 matijaaaaa

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

//PROOF OF CONCEPT SKRIPTA by matijaaaaa
//Ova verzija ima samo basic komande, i sluzi samo kao "Proof Of Concept"
//Napravljeno je u par sati pa vjerojatno ima par bugova, regarts uzivajte ;)
//NOTE: OVO JE NAPRAVLJENO SAMO KAO SIDE PROJECT ZA ZABAVU I NEMA NIKAKVE VEZE S PRAVIM ALEKSANDROM VUCICEM


import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const imeSajta = 'test.com'

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () =>{
    console.log('Vucko spreman!')
})

client.on('messageCreate',(message) => {
    if(message.content === 'v!ping')
    {
        message.reply({
            content:'pong'
        })
    }
    if(message.content === 'v!pomoc')
    {
        message.reply({
            content:'Pogledajte nas sajt za listu svih dostupnih komandi: ' + imeSajta
        })
    }
    if(message.content === 'v!statistike')
    {
          
        message.reply({
            content:'[BETA OPCIJA, DOLAZI USKORO!] POGLEDAJTE SVE DOSTUPNE KOMANDE NA NASOJ STRANICI: ' + imeSajta
         })

    }
    if(message.content === 'v!sala')
    {  
        message.reply({
            content:'Kako se zovu olimpijske igre u Africi? Igre gladi.'
         })

    }
    if(message.content === 'v!porn')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!hentai')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!pizda')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!dupe')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!sise')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!vucko gole slike')
    {
        message.reply({
            content:'Down bad, za tebe nema 100 evra'
        })
    }
    if(message.content === 'v!ban')
    {
        message.reply({
            content:'[BETA OPCIJA DOLAZI USKORO], za listu svih dostupnih komandi pogledajte nas sajt  ' + imeSajta
        })
    }
    if(message.content === 'v!kick')
    {
        message.reply({
            content:'[BETA OPCIJA DOLAZI USKORO], za listu svih dostupnih komandi pogledajte nas sajt  ' + imeSajta
        })
    }
    if(message.content === 'v!mute')
    {
        message.reply({
            content:'[BETA OPCIJA DOLAZI USKORO], za listu svih dostupnih komandi pogledajte nas sajt  ' + imeSajta
        })
    }
    if(message.content === 'v!meme')
    {
        let mRandom = Math.floor(Math.random() * 10);  
        if(mRandom === 0)
        {
            message.reply({
                content:'https://i.redd.it/zb0v1qup64531.jpg'
             })
        }
        if(mRandom === 1)
        {
            message.reply({
                content:'https://i.imgur.com/gfnS1e1.jpg'
             })
        }
        if(mRandom === 2)
        {
            message.reply({
                content:'https://i.redd.it/3q9d1e2nj0461.jpg'
             })
        }
        if(mRandom === 3)
        {
            message.reply({
                content:'https://preview.redd.it/ov7pea0ujvd61.jpg?width=640&crop=smart&auto=webp&s=ed47f06140c5fb61f3b501ec38d0b9b8e415a976'
             })
        }
        if(mRandom === 4)
        {
            message.reply({
                content:'https://ocdn.eu/pulscms-transforms/1/wBOktkpTURBXy83MjRhNmEzYjQxOTVlMTYwYjczNWVmNGNkODA5N2EyNC5qcGeRlQLNArwAwsM'
             })
        }
        if(mRandom === 5)
        {
            message.reply({
                content:'https://i.redd.it/dutv042hzsv71.jpg'
             })
        }
        if(mRandom === 6)
        {
            message.reply({
                content:'https://i.redd.it/m32gs5ejanl41.png'
             })
        }
        if(mRandom === 7)
        {
            message.reply({
                content:'https://i.redd.it/2srr0hjfwmz21.jpg'
             })
        }
        if(mRandom === 8)
        {
            message.reply({
                content:'https://preview.redd.it/q9ojdgcdqyk51.jpg?width=640&crop=smart&auto=webp&s=c6b4e6bab1e1d2716801ff4c92cdb609c6cb4965'
             })
        }
        if(mRandom === 9)
        {
            message.reply({
                content:'https://i.redd.it/6eg3rps5ymk61.jpg'
             })
        }

    }
})
client.login(process.env.TOKEN)