import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import EcomContext from '../../context/EcomContext'
import { useSearchParams, Navigate } from 'react-router-dom'

function ThankYou() {
  const {createOrder, isAuthenticated} = useContext(EcomContext)
  const [searchParams] = useSearchParams()
  const tx_ref = searchParams.get("tx_ref")
  const transaction_id = searchParams.get("transaction_id")

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  useEffect(()=>{
    if (transaction_id && tx_ref) {
      createOrder(transaction_id, tx_ref)
    }
  }, [transaction_id, tx_ref, createOrder])

  return (
    <div className='py-[5%] px-[10%] bg-cover bg-center mb-[-10%] text-center' style={{backgroundImage: `url(/img/thanks.jpg)`, height: `100vh`}}>
        <div className='bg-white py-[20px] opacity-80'>
            <p className='text-xl'>Thank you for your purchase. A representative will contact you shortly, Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iure necessitatibus accusantium blanditiis ratione reprehenderit quod quaerat laboriosam quasi pariatur.</p>
            <Link to="/products">
                <button className='bg-blue-950 p-[10px] rounded-lg text-white'>Back to products</button>
            </Link>
        </div>
    </div>
  )
}

export default ThankYou