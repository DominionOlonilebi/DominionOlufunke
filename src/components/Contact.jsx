import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdMail } from 'react-icons/md'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='container contact text-center'>
            <div className='row'>
                <div className='col'>
                    <h5 className='mb-3'>Contact Me</h5>
                    <div className='text-white'>
                        <p><MdMail className='mx-1'/>dominionolufunke27@gmail.com</p>
                        <p><FaPhoneAlt className='mx-1'/>+234 705-216-9039 <span className='mx-3'><FaPhoneAlt className='mx-1'/>+234 810-816-7305</span> </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact