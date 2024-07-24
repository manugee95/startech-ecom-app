import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Checkout() {
  const { cartItems, totalAmount } = useContext(EcomContext);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const amount = totalAmount();
    const currency = "NGN";
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const phone = e.target.elements.phone.value;
    const address = e.target.elements.address.value;

    try {
      const res = await fetch("https://startech-ecom-api.onrender.com/api/payment/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({
          amount,
          currency,
          firstName,
          lastName,
          phone,
          address,
        }),
      });

      const data = await res.json()
      if (res.ok) {
        window.location.href = data.link 
      }else{
        console.error(data.msg || "Failed to initate payment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex mx-[10%] my-[5%]">
      <div className="w-[50%]">
        <h1 className="text-center mb-[10px] text-2xl font-bold">
          Order Summary
        </h1>
        <table className="w-[90%] mx-auto">
          <thead>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </thead>
          <tbody className="text-center">
            {cartItems.products?.map((item) => (
              <tr className="border-b-2">
                <td>{item.product.name}</td>
                <td className="flex justify-center">
                  <img
                    src={"https://startech-ecom-api.onrender.com/" + item.product.img}
                    alt=""
                    className="h-[50px]"
                  />
                </td>
                <td>₦{item.price}</td>
                <td>{item.quantity}</td>
                <td>₦{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-[3%]">
          <div>
            <p className="text-xl font-bold">Total Amount = ₦{totalAmount()}</p>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <h1 className="text-center mb-[10px] text-2xl font-bold">
          Delivery Information
        </h1>
        <form onSubmit={(e)=> handleCheckout(e)}>
          <div className="mb-3">
            <input
              type="text"
              className="outline outline-1 w-full p-[10px]"
              placeholder="First Name"
              name="firstName"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="outline outline-1 w-full p-[10px]"
              placeholder="Last Name"
              name="lastName"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="outline outline-1 w-full p-[10px]"
              placeholder="Phone"
              name="phone"
            />
          </div>
          <div className="mb-3">
            <textarea
              name="address"
              id=""
              className="outline outline-1 w-full p-[10px]"
              placeholder="Delivery Address"
            ></textarea>
          </div>
          <div>
            <button className="bg-blue-950 p-[10px] text-white rounded-lg">
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
