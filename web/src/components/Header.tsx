
import { Plus } from 'phosphor-react'
import logo from '../assets/logo.png'

export default function Header(){ 
    return(
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
          <img src={logo} alt="" />
          <button 
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex gap-3 hover:border-violet-300"
          >
            <Plus size={20} className="text-violet-200" />
            Novo Hábito
          </button>
        </div>
    )
}