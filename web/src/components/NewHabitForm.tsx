import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = ['Domingo', 'Segunda', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']

export function NewHabitForm(){
    const [title, setTitle] = useState<string>('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    function createNewHabit(event: FormEvent){
        event.preventDefault()
        if( title || weekDays.length === 0){
            return
        }

        api.post('habits', {
            title, weekDays
        })

        alert('Hábito criado com sucesso')
        setTitle('')
        setWeekDays([])
    }

    function handleToggleWeekDay(weekDay: number){
        if(weekDays.includes(weekDay)){
            const weekDaysWithRemovedOne = weekDays.filter(day => day !== weekDay)
            setWeekDays(weekDaysWithRemovedOne)
        } else {
            const weekDaysWithAddedOne = [ ... weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        }

    }

    return(
        <form className="w-full flex flex-col mt-6 gap-4">
            <label htmlFor="title" className="font-semibold leading-tight">Qual é o seu comprometimento</label>
            <input 
                type="text" 
                id="title" 
                value={title}
                placeholder="Exercícios, Estudar ..." 
                autoFocus
                className="p-4 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight">Qual é a Frequência</label>

            <div className="flex flex-col gap-2 mt-3">
                { 
                    availableWeekDays.map((weekDay, i) => (
                        <Checkbox.Root 
                            key={weekDay}
                            checked={weekDays.includes(i)}
                            onCheckedChange={() => handleToggleWeekDay(i)}
                            className="flex items-center gap-3 group m-0 p-0"
                        >
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-300 group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator>
                                    <Check size={20} className="text-white" />
                                </Checkbox.Indicator>
                            </div>
                            <span className="text-lg text-white leading-tight ">
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    ))
                }
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500">
                <Check size={20} weight="bold" /> Confirmar
            </button>
        </form>
    )
}