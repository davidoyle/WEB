import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => (
  <div className="border-b border-gray-200" key={id}>
    <button
      type="button"
      onClick={() => onToggle(id)}
      className="flex w-full items-center justify-between px-4 py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
      aria-expanded={isOpen}
      aria-controls={`${id}-content`}
    >
      <span className="text-base font-semibold text-gray-900">{title}</span>
      <ChevronDown
        aria-hidden="true"
        className={`h-5 w-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
    <div
      id={`${id}-content`}
      role="region"
      className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
    >
      <div className="bg-gray-50 px-4 pb-4 text-sm leading-relaxed text-gray-800">
        {content}
      </div>
    </div>
  </div>
)

const Accordion = ({ items = [] }) => {
  const [openId, setOpenId] = useState(items[0]?.id)

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm" role="tablist">
      {items.map((item) => (
        <AccordionItem key={item.id} {...item} isOpen={openId === item.id} onToggle={handleToggle} />
      ))}
    </div>
  )
}

export default Accordion
