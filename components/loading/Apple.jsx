import { lineSpinner } from 'ldrs'

lineSpinner.register()

export default function Apple({size,color}) {
    return <l-line-spinner
      size={size}
      stroke="3"
      speed="1" 
      color={color}
    ></l-line-spinner>
}
