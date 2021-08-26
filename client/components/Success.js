import React, {useEffect} from 'react'

export default function Success(props) {
  useEffect(()=>{
    console.log(props)
  }, [])
  return (
    <div>
      Thank you for your kind donation.

    </div>
  )
}
