import { Download } from 'lucide-react'

const ChecklistDownloadButton = ({ file = '/templates/start-here-checklist.pdf', label = 'Download checklist' }) => (
  <a
    href={file}
    download
    className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
  >
    <Download className="h-4 w-4" aria-hidden="true" /> {label}
  </a>
)

export default ChecklistDownloadButton
