import '../styles/Home.css';
function Home () {
    return ( 
        <>
        <div className="homeok">
           <header className='text-white flex justify-between items-center p-6'>
            <div className='text-3xl font-extrabold'>REACTO</div>

            <button className="login bg-blue-400  font-bold p-2 rounded">Login</button>
            <button className='bg-red-900 p-2 hover:bg-red-400 font-bold rounded '>Sign in</button>
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