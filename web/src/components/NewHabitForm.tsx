import { Check } from "phosphor-react";

export function NewHabitForm(){
    return(
        <form className="w-full flex flex-col mt-6 gap-4">
            <label htmlFor="title" className="font-semibold leading-tight">Qual é o seu comprometimento</label>
            <input 
                type="text" 
                id="title" 
                placeholder="Exercícios, Estudar ..." 
                autoFocus
                className="p-4 rounded-lg bg-zinc-800 text-white placeholder:text-zinc-400"
            />
            <label htmlFor="" className="font-semibold leading-tight">Qual é a Frequência</label>
            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500">
                <Check size={20} weight="bold" /> Confirmar
            </button>
        </form>
    )
}