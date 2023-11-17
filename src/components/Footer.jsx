function Footer(){

    const newDate = new Date()
    const year = newDate.getFullYear();
    return(
        <>
            <footer className=" relative left-0 h-[10vh] py-5 flex flex-col sm:flex- items-center justify-between sm:px-20 text-white bg-gray-800 ">
            <section className=" text-lg  ">
             © Copyright {year} | All rights reserved
            </section>
            </footer>

        </>
    )

}




export default Footer;