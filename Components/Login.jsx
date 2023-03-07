import { auth } from '@/firebase'
import { useRouter } from 'next/router'
import { MdEmail } from 'react-icons/md'
import { MdLock } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'
import { MdVisibility } from 'react-icons/md'
import { signInWithEmailAndPassword, } from 'firebase/auth'
import React, { useState } from 'react'
import Link from 'next/link'


const Login = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')


    const [password, setPassword] = useState('')
    const [passwordType, setPasswordType] = useState("email");

    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }


    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password)
            alert("Logged In successfully")
            router.push('/admin')


        } catch (err) {
            alert(err)
        }
    }



    return (
        <div className=' flex h-screen w-full flex-col justify-center items-center'>
            <div className=' w-[420px] h-[50%] flex flex-col justify-between items-center p-5 bg-white rounded-lg border-[1px] border-gray-200 shadow-md shadow-gray-200'>{/*Login layout */}
                <div className=' w-full mb-4 flex flex-col justify-center items-center'>
                    <div className=' uppercase'>
                        <h2 className=' text-xl font-bold tracking-wider'>Login</h2>
                    </div>
                    <div>
                        <p className=' text-gray-400'>Xavier Institute of Engineering</p>
                    </div>
                </div>

                <div className=' w-full p-1 border-2 border-gray-100 rounded-md flex items-center justify-start bg-transparent'>{/**Email */}
                    <div className=' text-[#214ED3] m-2'>
                        <MdEmail size={20} />
                    </div>
                    <div className='w-full'>
                        <input className=' p-2 w-full outline-none ' type="email" onChange={(e) => setEmail(e.target.value)} value={email} name="email" placeholder="Enter Email" />
                    </div>
                </div>

                <div className=' w-full p-1 border-2 border-gray-100 rounded-md flex items-center justify-between bg-transparent'>{/**Email */}
                    <div className=' flex justify-start w-full'>
                        <div className=' text-[#214ED3] m-2'>
                            <MdLock size={20} />
                        </div>
                        <div className='w-full'>
                            <input className=' p-2 w-full outline-none ' type={passwordType} onChange={(e) => setPassword(e.target.value)} value={password} name="password" placeholder="Enter Password" />
                        </div>
                    </div>
                    <div className=' cursor-pointer flex ' onClick={togglePassword}>
                        {
                            passwordType === "password" ? <MdVisibilityOff size={20} className=' text-gray-400' /> : <MdVisibility size={20} className=' text-black' />
                        }
                    </div>
                </div>


                <div className=' w-full'>
                    <button onClick={handleLogin} className=' bg-[#214ED3] uppercase tracking-wider text-white hover:opacity-[0.8] active:opacity-[0.5] p-4 rounded-md w-full transition-all ease-in duration-150'>Login</button>
                </div>

                <div className=' flex items-center text-sm'>
                    <Link href='/forgot-password'><p className=' text-gray-500 underline-offset-2  hover:underline cursor-pointer'>Forgot password? </p></Link>
                </div>

            </div>
        </div>
    )
}

export default Login