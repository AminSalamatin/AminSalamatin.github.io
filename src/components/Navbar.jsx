const Navbar = () => {
    return(
        <nav className="sticky top-0 w-full p-10 bg-gray-800 text-white z-10 flex justify-between">
            <p>Name</p>
            <ul className="flex">
                <list className="px-10"><p>item1</p></list>
                <list className="px-10"><p>item2</p></list>
                <list className="px-10"><p>item3</p></list>
                <list className="px-10"><p>item4</p></list>
            </ul>
        </nav>
    )
}

export default Navbar;