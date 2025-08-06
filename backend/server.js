const express=require('express');
const router = express.Router();
const connectDB=require('./config/db.js');

const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();

connectDB();
const app=express();
app.use(cors());
app.use(express.json());


app.use('/api/auth',require('./routes/authRoutes.js'));
app.use('/api/auth', require('./routes/authRoutes.js'));
app.use('/api/mentees', require('./routes/menteeRoutes.js'));
app.use('/api/mentors', require('./routes/mentorRoutes.js'));
app.use('/api/bookings', require('./routes/bookingRoutes.js'));





const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
