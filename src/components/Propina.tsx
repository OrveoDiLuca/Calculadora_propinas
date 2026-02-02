import type { Dispatch, SetStateAction } from "react"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

interface PropinaProps {
    setTip: Dispatch<SetStateAction<number>>, 
    tip: number
}

function Propina({setTip, tip }: PropinaProps) {
  return (
    <div className="flex gap-2">
        <h3 className="font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id}>
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        type="radio" 
                        id={tipOption.id} 
                        value={tipOption.value} 
                        name="tip" 
                        onChange={(e) => setTip(Number(e.target.value))} 
                        checked={tip === tipOption.value} 
                    />
                </div> 
            ))}
        </form>
    </div>
  )
}

export default Propina