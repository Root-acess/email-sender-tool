from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import io

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/send-emails")
async def send_emails(
    file: UploadFile = File(...),
    emailData: str = Form(...)
):
    try:
        # Parse the email data
        import json
        email_data = json.loads(emailData)
        sender_email = email_data["senderEmail"]
        sender_password = email_data["password"]
        subject = email_data["subject"]
        html_content = email_data["htmlContent"]

        # Read recipient list
        recipient_list = []
        file_content = io.TextIOWrapper(file.file, encoding="utf-8")
        for line in file_content:
            recipient_list.append(line.strip())

        # Send emails
        with smtplib.SMTP("smtp.gmail.com", 587) as server:
            server.starttls()
            server.login(sender_email, sender_password)
            for recipient in recipient_list:
                msg = MIMEMultipart("alternative")
                msg["From"] = sender_email
                msg["To"] = recipient
                msg["Subject"] = subject
                msg.attach(MIMEText(html_content, "html"))
                server.send_message(msg)

        return {"message": "Emails sent successfully!"}

    except Exception as e:
        return {"error": str(e)}
