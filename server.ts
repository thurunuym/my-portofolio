import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Verify email credentials are set
if (!process.env.EMAIL_PASSWORD) {
  console.warn("⚠️  EMAIL_PASSWORD is not set in .env file. Email sending will fail.");
}

// Email transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "thurunuym@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function startServer() {
  const app = express();
  const PORT = 5000;

  app.use(express.json());
  app.use(cors({
  origin: "http://localhost:3000",
}));


  // ✅ API ROUTES MUST BE DEFINED BEFORE VITE MIDDLEWARE
  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;
    
    console.log(`📨 Received transmission from ${name} (${email})`);
    
    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields"
      });
    }

    try {
      // Send email to you
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "thurunuym@gmail.com",
        to: "thurunuym@gmail.com",
        subject: `New Message from ${name}`,
        html: `
          <h2>New Contact Message</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      console.log("✅ Email sent to thurunuym@gmail.com");

      // Send confirmation email to sender
      await transporter.sendMail({
        from: process.env.EMAIL_USER || "thurunuym@gmail.com",
        to: email,
        subject: "Signal Received - Thurunu YM Portfolio",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Your message has been successfully received.</p>
          <br>
          <p>Best regards,<br>Thurunu YM</p>
        `,
      });

      console.log(`✅ Confirmation email sent to ${email}`);

      res.json({ 
        success: true, 
        message: "Signal dispatched successfully to Sector: thurunuym@gmail.com" 
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("❌ Email sending error:", errorMessage);
      
      res.status(500).json({
        success: false,
        message: errorMessage || "Signal transmission failed. Please try again."
      });
    }
  });

  // ✅ VITE MIDDLEWARE COMES AFTER API ROUTES
  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Spaceship Terminal running on http://localhost:${PORT}`);
    console.log("USER:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASSWORD);
  });
}

startServer();
