import dynamic from 'next/dynamic'

const InteractiveMap = dynamic(() => import('./InteractiveMap'), { ssr: false })

export default InteractiveMap
