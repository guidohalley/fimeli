'use client'

interface CheckboxFilterProps {
  options: { id: string; name: string; count: number }[]
  selected: string[]
  onChange: (selected: string[]) => void
}

interface PriceRangeFilterProps {
  value: number[]
  onChange: (value: number[]) => void
  min: number
  max: number
}

export function CheckboxFilter({ options, selected, onChange }: CheckboxFilterProps) {
  const handleToggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter(item => item !== id))
    } else {
      onChange([...selected, id])
    }
  }

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            checked={selected.includes(option.id)}
            onChange={() => handleToggle(option.id)}
            className="rounded border-gray-300 text-black focus:ring-black"
          />
          <span className="text-sm text-gray-700">
            {option.name} ({option.count})
          </span>
        </label>
      ))}
    </div>
  )
}

export function PriceRangeFilter({ value, onChange, min, max }: PriceRangeFilterProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mín
          </label>
          <input
            type="number"
            value={value[0]}
            onChange={(e) => onChange([parseInt(e.target.value) || 0, value[1]])}
            min={min}
            max={value[1]}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Máx
          </label>
          <input
            type="number"
            value={value[1]}
            onChange={(e) => onChange([value[0], parseInt(e.target.value) || max])}
            min={value[0]}
            max={max}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="pt-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
      </div>
      
      <div className="flex justify-between text-sm text-gray-500">
        <span>${min}</span>
        <span>${max}</span>
      </div>
    </div>
  )
}
