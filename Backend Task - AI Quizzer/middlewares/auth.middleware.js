import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1];

  // If token is missing, send a 403 error
  if (!token) {
    return res.status(403).json({ error: 'Authorization token is required' });
  }

  // Attempt to verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      // If verification fails, send a 401 error
      return res.status(401).json({ error: 'Invalid or expired token' });
    }

    // Attach decoded user data to the request object
    req.user = decoded;

    // Proceed to the next middleware or route handler
    next();
  });
};
