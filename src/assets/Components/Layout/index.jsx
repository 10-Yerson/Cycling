const Layout = ({ children }) => {  // Aqui se retorna el estilo  de como vera el contenido de las paginas 
    return (
        <div className="flex flex-col items-center bg-slate-200 p-7">   
            {children}
        </div>
    )
}

export default Layout


