'use server'
import { v4 as uuid } from 'uuid'

import axios from 'axios'
import { DataError, DataFile, DataFileListItem } from '@/type'
const SCRAPER_SERVER = process.env.SCRAPER_SERVER
export async function getDataFilesLIst() {
    try {
        const response = await axios.get(`${SCRAPER_SERVER}/data`, {
            auth: {
                username: process.env.USER_NAME!,
                password: process.env.PASSWORD!,
            },
        })

        const newResponse: DataFileListItem[] = response.data.map((item) => {
            const keys = item.name.split('_')

            return {
                filename: item.name,
                keyword: keys[2],
                jobid: keys[3],
            }
        })

        return newResponse
    } catch (error) {
        console.log(error)
        return null
    }
}

export async function getJobList() {
    try {
        const response = await axios.get(
            `${SCRAPER_SERVER}/listjobs.json?project=amazonscraper`,
            {
                auth: {
                    username: process.env.USER_NAME!,
                    password: process.env.PASSWORD!,
                },
            }
        )
        return response
    } catch (error) {
        console.log(error)
        return { data: { data: 'need credentials' } }
    }
}
export async function getDataFile(
    filename: string
): Promise<DataFile[] | DataError> {
    try {
        const response = await axios.get(`${SCRAPER_SERVER}/data/${filename}`, {
            auth: {
                username: process.env.USER_NAME!,
                password: process.env.PASSWORD!,
            },
        })

        return response.data
    } catch (error) {
        console.log(error)
        return { message: 'credentials error' }
    }
}

export async function scrapeData(keyword: string) {
    const jobid = uuid()

    const data = new URLSearchParams()

    data.append('keyword', `${keyword}_${jobid}`)
    data.append('jobid', `${jobid}`)
    data.append('project', 'amazonscraper')
    data.append('spider', 'amazonspider')

    try {
        await axios.post(`${SCRAPER_SERVER}/schedule.json`, data, {
            auth: {
                username: process.env.USER_NAME!,
                password: process.env.PASSWORD!,
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return null
    } catch (error) {
        console.log(error)
        return { data: { data: 'need credentials' } }
    }
}
