const jwt=require('jsonwebtoken')

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1];
    if(!token)return res.status(401).json({error: "no token "});
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded;
        next();
    }catch{
          res.status(401).json({ error: 'Invalid token' });
    }
}

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ error: 'No token provided' });

  try {
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);
    req.user = decoded; 
    next();
  } catch (err) {
    res.status(401).json({ error: 'Token invalid or expired' });
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
       console.log('Checking role:', req.user.role); // show the role directly
    console.log('Allowed roles:', roles); // show expected roles
    if (!req.user || !req.user.role || !roles.includes(req.user.role))
      return res.status(403).json({ error: 'Access denied' });
    next();
  };
};



module.exports = {
  protect,
  restrictTo,
};

