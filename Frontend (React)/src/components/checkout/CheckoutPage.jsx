import useCartData from '../../hooks/useCartData'
import OrderSummary from './OrderSummary'
import PaymentSection from './PaymentSection'

const CheckoutPage = () => {

  const {cartItems, setCartItems, cartTotal, setCartTotal, tax, loading} = useCartData()

  return (
    <div className='container my-3' style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <div className='row'>
        <OrderSummary cartItems={cartItems} cartTotal={cartTotal} tax={tax}/>
        <PaymentSection />
      </div>
    </div>
  )
}

export default CheckoutPage