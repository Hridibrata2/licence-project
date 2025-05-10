import React, { useState } from 'react';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const { name, email, licenseType, message } = formData;

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!licenseType) newErrors.licenseType = 'Please select a license type';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      console.log(formData);
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900  items-center justify-center">
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow justify-center">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-white">Contact Us</h2> 
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-700 dark:text-white">
          <div>
            <input
              id="name"
              name="name"
              placeholder="Name"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              value={formData.name}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <input
              id="email"
              name="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              value={formData.email}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <input
              id="company"
              name="company"
              placeholder="Company"
              className="w-full border px-4 py-2 rounded"
              onChange={handleChange}
              value={formData.company}
            />
          </div>
          <div>
           <select
              id="licenseType"
              name="licenseType"
              className="w-full border px-4 py-2 rounded text-gray-700"
              onChange={handleChange}
              value={formData.licenseType} 
            >
              <option value="">Select License Type</option>
              <option value="Office">Netflix</option>
              <option value="Adobe">Adobe Suite</option>
              <option value="Antivirus">Antivirus</option>
              <option value="Other">Other</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full border px-4 py-2 rounded"
              rows="4"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700" type="submit">
            Submit
          </button>
        </form>   
       </div>
      
      </div> 
  );
};

export default ContactForm;
