'use client';
import { Input, Textarea } from '@heroui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase';
//  useInView
export default function Home() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const isFormValid = Object.values(formData).every(
    (value) => value.trim() !== '',
  );

  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); // 'success' or 'error

  const [btnloading, setbtnloading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setbtnloading(true);
    console.log('clciked');

    try {
      //  adding timestamp with form data
      const formDataWithTimestamp = {
        ...formData,
        timestamp: serverTimestamp(),
      };

      //  adding timestamp with form data

      await addDoc(collection(db, 'contacts'), formDataWithTimestamp);
      setStatusMessage('Message sent successfully!');
      setStatusType('success');

      // Reset the form
      setFormData({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
      });
      setbtnloading(false);
    } catch (error) {
      console.error('Error adding document: ', error);
      setStatusMessage('Failed to send message. Please try again.');
      setStatusType('error');
      setbtnloading(false);
    }

    // Clear message after 4 seconds
    setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 4000);
  };

  return (
    // <div className=" min-h-screen bg-[#231F20] overflow-y-auto flex items-center justify-center ">
    //   {/* Right Form Section */}
    //   <div
    //     className="w-full    max-w-lg lg:w-full bg-[#01B7AA]  border border-[#00263A]/10 p-10 rounded-3xl shadow-2xl"
    //     // initial={{ opacity: 0, x: 50 }}
    //     // animate={isInView ? { opacity: 1, x: 0 } : {}}
    //     // transition={{ duration: 0.8, ease: 'easeOut' }}
    //   >
    //     <h2 className="text-4xl font-bold text-whites text-[#00263A] mb-6">
    //       Contact Us
    //     </h2>
    //     <p className="text-whites uppercase   text-[#00263A] font-medium font-raleway text-xl mb-8 tracking-wide">
    //       Send us a message
    //       {/* & join our team */}
    //     </p>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //       <Input
    //         label="Name"
    //         value={formData.name}
    //         onChange={(e) => setFormData({ ...formData, name: e.target.value })}
    //         className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
    //         required
    //       />
    //       <Input
    //         label="Phone"
    //         value={formData.phone}
    //         onChange={(e) =>
    //           setFormData({ ...formData, phone: e.target.value })
    //         }
    //         className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
    //         required
    //       />
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
    //       <Input
    //         label="Email"
    //         value={formData.email}
    //         onChange={(e) =>
    //           setFormData({ ...formData, email: e.target.value })
    //         }
    //         type="email"
    //         className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
    //         required
    //       />
    //       <input
    //         // label="Subject"
    //         value={formData.subject}
    //         onChange={(e) =>
    //           setFormData({ ...formData, subject: e.target.value })
    //         }
    //         className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
    //         required
    //       />
    //     </div>
    //     <Textarea
    //       // label="Message"
    //       value={formData.message}
    //       onChange={(e) =>
    //         setFormData({ ...formData, message: e.target.value })
    //       }
    //       className="mt-6 rounded-lg shadow-mds font-raleway placeholder:font-raleway"
    //       rows={5}
    //       required
    //     />
    //     <div
    //       // whileHover={{ scale: 1.05 }}
    //       // whileTap={{ scale: 0.95 }}
    //       className="mt-8 flex flex-col justify-center"
    //     >
    //       {/* <Button className="bg-[#00263A] w-full text-white py-4 rounded-full text-lg shadow-xl transition-all duration-300">
    //           Send Now
    //         </Button> */}
    //       {/* <motion.button
    //           whileHover={{ scale: 1.05 }}
    //           whileTap={{ scale: 0.95 }}
    //           className="group relative flex items-center justify-center px-6 py-3 text-white border-2 border-white rounded-full transition-all duration-300 hover:bg-[#88CCD4]"
    //         >

    //           <div className="flex gap-3 items-center">
    //             <h1 className="transition-all duration-300 font-raleway font-medium ">
    //               Send now
    //             </h1>

    //             <div className="flex w-8 h-8 justify-center items-center rounded-full bg-[#88CCD4] transition-all duration-300 group-hover:bg-white">
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth="1.5"
    //                 stroke="currentColor"
    //                 className="size-5 text-white transition-all duration-300 group-hover:text-[#EDC273]"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
    //                 />
    //               </svg>
    //             </div>
    //           </div>
    //         </motion.button> */}

    //       <motion.button
    //         onClick={handleSubmit}
    //         // disabled={!formData}
    //         disabled={!isFormValid}
    //         whileHover={{ scale: 1.05 }}
    //         whileTap={{ scale: 0.95 }}
    //         className={`group w-fit  mx-auto relative flex items-center justify-center px-6 py-3 text-white border-2 border-white rounded-full transition-all duration-300 ${
    //           btnloading ? 'bg-gray-400' : ''
    //         } hover:bg-[#88CCD4`}
    //       >
    //         <div className="flex gap-3 items-center">
    //           <h1 className="transition-all duration-300 font-raleway font-medium">
    //             {` ${btnloading ? 'Sending...' : 'Send now'}`}
    //           </h1>
    //           <div className="flex w-8 h-8 justify-center items-center rounded-full bg-[#88CCD4] transition-all duration-300 group-hover:bg-white">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               strokeWidth="1.5"
    //               stroke="currentColor"
    //               className="size-5 text-white transition-all duration-300 group-hover:text-[#EDC273]"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
    //               />
    //             </svg>
    //           </div>
    //         </div>
    //       </motion.button>

    //       {statusMessage && (
    //         <div
    //           className={` ${
    //             statusType === 'Message sent successfully!'
    //               ? 'text-green-400'
    //               : 'text-green-400'
    //           } text-center mt-3 block mb-4`}
    //         >
    //           {statusMessage}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-[#231F20] overflow-y-auto flex flex-col lg:flex-row items-center gap-7 justify-center px-4 py-12">
      {/* Left Side - Logo and Coming Soon */}
      <div className="w-full max-w-lg  flex flex-col items-center justify-center text-center mb-10 lg:mb-0 px-4">
        <Image
          width={1000}
          height={1000}
          src="/logo.jpg"
          alt="Logo"
          className="w-48 h-fit mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 max-w-md font-raleway">
          {`We're working hard to launch our website. Leave us a message, and
          we’ll get back to you!`}
        </p>
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full max-w-lg  bg-[#01B7AA] border border-[#00263A]/10 p-10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl font-bold text-[#231F20] mb-6">Contact Us</h2>
        <p className="uppercase text-[#231F20] font-medium font-raleway text-xl mb-8 tracking-wide">
          Send us a message
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
            required
          />
          <Input
            label="Phone"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Input
            label="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            type="email"
            className="rounded-lg shadow-mds font-raleway placeholder:font-raleway"
            required
          />
          <input
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="rounded-lg shadow-mds font-raleway placeholder:font-raleway px-4 py-2"
            required
          />
        </div>

        <Textarea
          placeholder="Message"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="mt-6 rounded-lg shadow-mds font-raleway placeholder:font-raleway"
          rows={5}
          required
        />

        <div className="mt-8 flex flex-col justify-center">
          <motion.button
            onClick={handleSubmit}
            disabled={!isFormValid}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`group w-fit mx-auto relative flex items-center justify-center px-6 py-3 text-white border-2 border-white rounded-full transition-all duration-300 ${
              btnloading ? 'bg-gray-400' : ''
            } hover:bg-[#88CCD4]`}
          >
            <div className="flex gap-3 items-center">
              <h1 className="transition-all duration-300 font-raleway font-medium">
                {btnloading ? 'Sending...' : 'Send now'}
              </h1>
              <div className="flex w-8 h-8 justify-center items-center rounded-full bg-[#88CCD4] transition-all duration-300 group-hover:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 text-white transition-all duration-300 group-hover:text-[#EDC273]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          {statusMessage && (
            <div
              className={`${
                statusType === 'success' ? 'text-green-900' : 'text-red-900'
              } text-center mt-3 font-semibold block mb-4`}
            >
              {statusMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
