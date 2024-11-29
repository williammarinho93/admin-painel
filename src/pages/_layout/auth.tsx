import { Outlet } from 'react-router-dom';
import  Logo  from '../../assets/Logo.png';
import BackgroundImage from '../../assets/14.jpg';


export function AuthLayout(){
    return(
        <div className='min-h-screen grid grid-cols-2  ' >
            <div className='flex h-full flex-col justify-between border-r border-foreground/5  bg-gradient-to-t from-cyan-500 to-blue-500  p-10 text-muted-foreground' style={{ 
                backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.7), rgba(0, 0, 255, 0.7)), url(${BackgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh' // ajuste a altura conforme necessário
             }} >
            <div className='flex items-center gap-3 text-lg text-foreground '>
                <img src={Logo} alt='Logo' className='w-15 h-15' ></img>
                <span className='font-semibold text-2xl text-white '>Dr. Suporte</span>
            </div>
            <footer className='text-sm text-black'>
                Painel do parceiro &copy; Dr. Suporte - {new Date().getFullYear()}
            </footer>
            </div>

            <div className='relative flex flex-col items-center justify-center'> 
                <Outlet/> 
            </div>
        </div>
    )
}