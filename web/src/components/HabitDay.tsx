import './Habit.css'

interface HabitProps{
    completed: number
}

export function HabitDay(props: HabitProps) {
    return (
        <div className="bg-zinc-900 w-10 h-10 border-2 border-zinc-800 rounded-lg"> </div>
    )
}
