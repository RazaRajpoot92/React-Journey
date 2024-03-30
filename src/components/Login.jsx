import {useState} from "react"

const Login = ()=>{
    const [user,setUser] = useState("")

    
    return(
       
        <div className="flex justify-center p-8">
            <div className=" w-60 flex flex-col rounded-lg bg-gray-100 gap-3 items-center h-60 border p-2 border-blue-400">
                <h1 className="text-xl text-blue-500 font-semibold mb-2">Login Form</h1>
                <input onChange={(e)=>setUser(e.target.value)} placeholder="Enter your username" className="border text-sm text-gray-600 p-2 h-8 w-full border-blue-500 focus:outline-none rounded-md" type="text" />
                <input placeholder="Enter your password" className="border text-sm text-gray-600 p-2 h-8 w-full border-blue-500 focus:outline-none rounded-md" type="text" />
                <button className="px-2 w-44 mt-3 h-9 hover:bg-blue-500 bg-blue-300 border border-green-400 rounded">Login</button>
                <p className="hover:underline text-sm cursor-pointer text-blue-400">Forgot password?</p>
            
            </div>
        </div>
       
    )
}

export default Login;