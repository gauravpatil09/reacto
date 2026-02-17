import '../styles/Home.css';
import { Link } from 'react-router-dom';
function Home () {
    return ( 
        <>
        <div className="homeok">
           <header className='text-white flex justify-between items-center p-6'>
            <div className='text-3xl font-extrabold'>REACTO</div>

            <Link to="/login">
            <button className="login bg-blue-400  font-bold p-2 rounded">Login</button>
            </Link>

            <Link to="/signup">
            <button className='bg-red-900 p-2 hover:bg-red-400 font-bold rounded '>Sign Up</button>
            </Link>
           </header>
            <div className='flex justify-center items-center center bg-gray-900 rounded-lg '>

           <main className='ms-10 '>
            <h1 className='mb-10 font-extrabold text-3xl text-white'>Distinguish redefines online conversation</h1>
            <p className='text-red-300'>Fast. Secure. Minimal.
A next-generation chat platform crafted for people who value privacy, performance, and a distraction-free experience.</p>
           </main>
           </div>
        </div>
        
        </>
     );
}

export default Home ;