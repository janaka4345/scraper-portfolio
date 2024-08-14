'use server'

import axios from 'axios'
const username = process.env.USER_NAME
const password = process.env.PASSWORD

const auth = Buffer.from(`${username}:${password}`).toString('base64')

export async function getDataFilesLIst() {
    try {
        const response = await axios.get('http://161.35.168.4/data', {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        })
        return response
    } catch (error) {
        console.log(error)
        return { data: { data: 'need credentials' } }
    }
}

export async function getDataFile(file: string) {
    try {
        const response = await axios.get(`http://161.35.168.4/data/${file}`, {
            headers: {
                Authorization: `Basic ${auth}`,
            },
        })
        return response
    } catch (error) {
        console.log(error)
        return { data: { data: 'need credentials' } }
    }
}

export async function scrapeData(keyword: string) {
    console.log(auth)
    const data = new URLSearchParams()

    data.append('keyword', '')
    data.append('project', 'amazonscraper')
    data.append('spider', 'amazonspider')

    try {
        // curl http://localhost:6800/schedule.json -d arg1=val1 -d project=myproject -d spider=somespider
        const response = await axios.post(
            'http://161.35.168.4/schedule.json',
            data,
            {
                auth: {
                    username: username!,
                    password: password!,
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    // Authorization: `Basic ${auth}`,
                },
            }
        )
        return response
    } catch (error) {
        console.log(error)
        return { data: { data: 'need credentials' } }
    }
}
