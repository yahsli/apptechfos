'use client'
import { Player } from "@lordicon/react"
import { useRef ,useEffect} from "react"
const ICON = require('../../public/assets/account.json')
export default function Account({playerRef}) {

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  },[])
  const enter = () => {
    playerRef.current?.playFromBeginning()
  }
  const stop = (params) => {
    playerRef.current?.goToFirstFrame()
  }
  return (
    <button onMouseEnter={enter} onMouseLeave={stop}>
      <Player ref={playerRef} icon={ICON} size={20}/>
    </button>
  )
}
