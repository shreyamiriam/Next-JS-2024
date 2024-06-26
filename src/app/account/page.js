import { redirect } from "next/navigation";




export default function Accounts(){
    //assume that the profile info is null
    const userProfileInfo = null;

    // if(userProfileInfo === null) redirect('profile')
    //  if(userProfileInfo === null) redirect('cart?search=product1&randomvalue=abcdef')
       if(userProfileInfo === null) redirect('products?search=product1')
    return <h1>Accounts page</h1>
}