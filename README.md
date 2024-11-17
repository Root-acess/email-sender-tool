
# **Email Sender Tool**

This project is a web-based tool for sending bulk emails with a sleek and responsive interface. It allows users to send HTML email templates to multiple recipients by uploading a recipient list and configuring email details. The tool uses **React** (TypeScript) for the frontend and **FastAPI** (Python) for the backend.

---

## **Features**
- User-friendly interface for configuring and sending emails.
- Bulk email sending by uploading a recipient list in `.txt` or `.csv` format.
- Supports HTML email templates.
- Real-time notifications for success or errors.
- Backend email handling using SMTP.
- Lightweight and easy to deploy.

---

## **Technologies Used**

### **Frontend**
- **React** with TypeScript
- **Axios** for API requests
- **React Toastify** for notifications
- **React Dropzone** for file upload

### **Backend**
- **FastAPI** for building RESTful APIs
- **smtplib** for sending emails
- **Uvicorn** for running the FastAPI server

---

## **Setup and Installation**

### Prerequisites
- Node.js and npm
- Python (3.9 or later)
- Gmail account (or any SMTP-compatible email service)

### Clone the Repository
```bash
git clone https://github.com/yourusername/email-sender-tool.git
cd email-sender-tool
```

---

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

---

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload
   ```

5. The backend will be available at `http://localhost:8000`.

---

### Usage
1. Start both the frontend and backend servers.
2. Open the frontend in your browser (`http://localhost:3000`).
3. Fill out the form with:
   - Sender email and password.
   - Subject and HTML content for the email.
   - Upload a recipient list (`.txt` or `.csv`).
4. Click **Send Emails** to initiate bulk email sending.

---

---

## **Endpoints**

### **POST `/send-emails`**
Uploads a recipient file and sends bulk emails.

- **Request Body**:
  - `file` (UploadFile): Recipient list in `.txt` or `.csv`.
  - `emailData` (JSON): Email configuration details:
    ```json
    {
      "senderEmail": "your_email@gmail.com",
      "password": "your_app_password",
      "subject": "Your Subject",
      "htmlContent": "HTML content of the email"
    }
    ```

- **Response**:
  - `200 OK`: Emails sent successfully.
  - `400/500`: Error details.

---

## **Screenshots**
### **Home Page**
_Add screenshots here to show the UI._

---

## **Future Enhancements**
- OAuth2 authentication for email services.
- Support for scheduling emails.
- Integration with a database for email logging.
- More file format support for recipient lists.

---

## **Contributing**
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

