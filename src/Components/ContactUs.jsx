import { FaMapMarker, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="contact flex justify-center items-start flex-col min-h-screen py-20 px-5">
            <div className="content max-w-screen-md text-center">
            <div className="heading-container">
            <h1 className="text-6xl font-extrabold text-black mb-4 mt-8 ">CONTACT US</h1>
            
          </div>
                
                <p className="font-light">
                    We would love to hear from you! Whether you have questions, feedback, or just want to say hello, don't hesitate to reach out. Our team at GDSC MACE is here to assist you in any way we can. Feel free to drop us a message using the form below, and we will get back to you as soon as possible. Your thoughts and inquiries are important to us as we strive to make your experience with us enjoyable and fulfilling.
                </p>
            </div>
            <div className="container w-1/2">
                <div className="contactInfo">
                    <div className="box flex items-center mb-4">
                        <div className="icon w-16 h-16 flex justify-center items-center rounded-full">
                            <FaMapMarker />
                        </div>
                        <div className="text py-10">
                            <h3 className="font-semibold ">Address</h3>
                            <p>Mar Athanasius College Of Engineering<br />Kothamangalam<br />686666</p>
                        </div>
                    </div>
                    <div className="box flex items-center mb-4">
                        <div className="icon w-16 h-16 flex justify-center items-center rounded-full">
                            <FaPhone />
                        </div>
                        <div className="text">
                            <h3 className="font-semibold">Phone</h3>
                            <p>+91 XXXXX XXXXX</p>
                        </div>
                    </div>
                    <div className="box flex items-center">
                        <div className="icon w-16 h-16 flex justify-center items-center rounded-full">
                            <FaEnvelope />
                        </div>
                        <div className="text">
                            <h3 className="font-semibold">Email</h3>
                            <p>xyz@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contactForm w-1/2 p-10 flex flex-col items-center mt-[-305px] ml-[329px] text-center">
                <form>
                    <h2 className="text-xl font-semibold mb-4">Send Message</h2>
                    <div className="inputBox relative w-full mb-4">
                        <label htmlFor="fullName" className="absolute left-0 top-0 py-1 px-0 text-sm text-gray-600 transition-all">Full Name</label>
                        <input type="text" id="fullName" name="fullName" required className="w-full  px-20 border-b-2 outline-none border-gray-400 bg-transparent" />
                    </div>
                    <div className="inputBox relative w-full mb-4">
                        <label htmlFor="email" className="absolute left-0 top-0 py-1 px-0 text-sm text-gray-600 transition-all">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-20 border-b-2 outline-none border-gray-400 bg-transparent" />
                    </div>
                    <div className="inputBox relative w-full mb-4">
                        <label htmlFor="message" className="absolute left-0 top-0 py-1 px-0 text-sm text-gray-600 transition-all">Message</label>
                        <textarea id="message" name="message" required className="w-full py-3 px-20 border-b-1 outline-none border-gray-400 bg-transparent resize-none"></textarea>
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="submit" value="Send" className="w-24 py-1 bg-blue-500 text-white cursor-pointer border-none hover:bg-blue-600" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;