const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
import { api } from '../lib/axios'
import { useEffect, useState } from 'react'
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'
import dayjs from 'dayjs'

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

type Summary = {
    id: string;
    date: string;
    amount: number;
    completed: number;
}[]

export default function SummaryTable(){
    const [summary, setSummary] = useState<Summary>([])

    useEffect(() => {
        api.get('summary').then((response) => {
            setSummary(response.data)
        })
    }, [])

    return(
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((w, index) => (
                    <div key={index} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">{w}</div>
                ))}
            </div> 

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(d => {
                    const dayInSummary = summary.find(day => dayjs(d).isSame(day.date, 'day'))
                    return (
                        <HabitDay 
                            amount={dayInSummary?.amount} 
                            completed={dayInSummary?.completed} 
                            date={d}
                            key={d.toString()}
                        />
                    )
                })}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
                    return <div key={i} className="bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg opacity-40 cursos-not-allowed"> </div>
                })}
            </div>
        </div>
    )
}