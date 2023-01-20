const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
import { generateDatesFromYearBeginning } from '../utils/generate-dates-from-year-beginning'
import { HabitDay } from './HabitDay'

const summaryDates = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length

export default function SummaryTable(){
    return(
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((w, index) => (
                    <div key={index} className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center">{w}</div>
                ))}
            </div> 

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(d => {
                    return <HabitDay key={d.toString()} completed={1}/>
                })}
                {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}).map((_, i) => {
                    return <div key={i} className="bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg opacity-40 cursos-not-allowed"> </div>
                })}
            </div>
        </div>
    )
}