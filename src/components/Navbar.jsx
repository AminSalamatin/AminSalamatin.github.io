const Navbar = () => {
    return(
        <nav className="bg-secondary sticky top-0 w-full p-10 z-10 border-b border-text-shadow ">
            <div className="max-w-[50vw] flex justify-between mx-auto">
            <h3 className="mb-0">Amin Salamatin</h3>
            <ul className="flex">
                <list className="px-10"><p>item1</p></list>
                <list className="px-10"><p>item2</p></list>
                <list className="px-10"><p>item3</p></list>
                <list className="px-4 text-accent border-4 border-accent text-3xl rounded-md"><p>Resume</p></list>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;