import React, {useEffect} from 'react'
import axios from 'axios'

export default function Success(props) {

  let donation = props.location.state.donation
  // donation = Number(donation)
  useEffect(()=>{
    async function updateReceived(receiveAmt) {
      try {
        await axios.put(`/api/campaigns/${props.match.params.id}/success`, {receiveAmt});
      } catch (err) {
        console.log(err);
      }
    }
    updateReceived(donation)
  }, [])
  return (
    <div>
      Thank you for your kind donation.

    </div>
  )
}
