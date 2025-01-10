const Section = () => {
  return (
    <div>
      <div>
      <ul className='flex gap-4 justify-between px-40'>
            <li>FALCON 9</li>
            <li>FALCON HEAVY</li>
            <li>DRAGON</li>
            <li>STARSHIP</li>
            <li>HUMAN SPACEFLIGHT</li>
            <li>RIDESHARE</li>
            <li>FALCON</li>
            <li>SHOP</li>
        </ul>
      </div>
      <div className='bg-[url(/public/sky.png)] bg-no-repeat bg-cover h-screen flex justify-end flex-col pb-40 pl-20'>
        <p className='text-white text-2xl mb-10  px-4'>upcoming lunch</p>
        <p className="text-white text-3xl mb-6  px-4  font-bold ">CRS-25 MISSION</p>
        <button className=" border-2  w-40 h-8  text-white font-bold">REWATCH</button>
      
      </div>
      
        
        
         
    </div>
  )
}

export default Section