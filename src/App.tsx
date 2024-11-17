import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const [emailData, setEmailData] = useState({
    senderEmail: '',
    password: '',
    subject: '',
    htmlContent: '',
  });
  const [file, setFile] = useState<File | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const sendEmails = async () => {
    if (!file) {
      toast.error('Please upload a recipient file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('emailData', JSON.stringify(emailData));

    try {
      const response = await axios.post('http://localhost:8000/send-emails', formData);
      toast.success(response.data.message);
    } catch (error) {
      toast.error('Failed to send emails');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-purple-600 text-white">
      <div className="bg-gray-800 bg-opacity-90 shadow-lg rounded-lg w-full max-w-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Email Sender Tool</h1>

        <div className="space-y-4">
          <input
            type="email"
            name="senderEmail"
            placeholder="Sender Email"
            value={emailData.senderEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={emailData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={emailData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
          />
          <textarea
            name="htmlContent"
            placeholder="HTML Content"
            value={emailData.htmlContent}
            onChange={handleInputChange}
            className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-purple-500"
            rows={6}
          />
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-600 file:text-white hover:file:bg-purple-700"
          />
        </div>

        <button
          onClick={sendEmails}
          className="mt-6 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400"
        >
          Send Emails
        </button>
      </div>

      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
