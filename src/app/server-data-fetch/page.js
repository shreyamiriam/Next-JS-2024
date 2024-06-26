// fetch
import Link from "next/link";
async function fetchListofUsers(){
    try{
        const apiResponse=await fetch('https://dummyjson.com/users');
        const result=await apiResponse.json();
        return result.users


    }catch{
        (error)
    throw new Error(error)
    }
}



export default async function ServerSideDataFetching(){
    const listofUsers = await fetchListofUsers();
    // console.log(listofUsers);

    return <div className="p-10">
        <h1>
            ServerSideDataFetching : User list Page
        </h1>
        <ul>
            {listofUsers && listofUsers.length > 0 ?
            listofUsers.map((user) => <li className="mt-5 cursor-pointer">
                <Link href={`/server-data-fetch/${user.id}`}>{user.firstName}</Link></li>)
            : null}
            
        </ul>
    </div>
}