import * as Checkbox from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { StringValidation } from 'zod'
import { api } from '../lib/axios'

interface HabitsListProps {
    date: Date
}

interface HabitsInfo {
    possibleHabits: {
        id: string; 
        title: string;
        created_at: string;
    }[],
    completedHabits: string[]
}

export function HabitsList({ date }: HabitsListProps){
    const [habitsInfo, setHabitsInfo] = useState<HabitsInfo>()

    useEffect(() => {
        api.get('day', {
            params: {
                date: date.toISOString()
            }
        })
        .then(response => {
            setHabitsInfo(response.data)
            console.log(response)
        })
    }, [])
    return (
        <div>

            <div className='mt-6 flex flex-col gap-3'>
                {habitsInfo?.possibleHabits.map(habit => (
                    <Checkbox.Root 
                        key={habit.id} 
                        className="flex items-center gap-3 group"
                        checked={habitsInfo.completedHabits.includes(habit.id)}
                    >
                        <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-300 group-data-[state=checked]:border-green-500">
                            <Checkbox.Indicator>
                                <Check size={20} className="text-white" />
                            </Checkbox.Indicator>
                        </div>
                        <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-700">
                            {habit.title}
                        </span>
                    </Checkbox.Root>
                ))}

            </div>

        </div>
    )
}