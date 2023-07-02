import React from 'react'

const TrimLink = () => {
  return (
    <div className='flex justify-center items-center py-24 trim' id='trim'>
        <form className='bg-white rounded-lg w-1/2 p-16'>
            <input type="text" className=' text-[#005AE2] p-5 rounded-xl border border-[#005AE2] w-full' placeholder='Paste URL here...' />
            <div className='flex flex- justify-between mt-8'>
                <select name="" id="" className='text-[#005AE2] p-5 rounded-xl border border-[#005AE2] w-[45%]'>
                    <option value="nil">Choose Domain</option>
                </select>
                <input type="text" className=' text-[#005AE2] p-5 rounded-xl border border-[#005AE2] w-[45%]' placeholder='Type Alias here' />
            </div>
            <button className='w-full flex justify-center items-start mt-5 bg-[#005AE2] rounded-full text-white text-xl py-5'>
                Trim URL
            </button>
        </form>
    </div>
  )
}

export default TrimLink