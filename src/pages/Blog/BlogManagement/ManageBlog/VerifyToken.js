import React, { useState, useEffect } from 'react';
import { useAuth } from "../../../../components/Authentification/AuthContext";

const TokenVerification = ({ children }) => {
    const { token } = useAuth();
    const [isTokenPresent, setIsTokenPresent] = useState(false);
  
    useEffect(() => {
      if (token) {
        setIsTokenPresent(true);
      } else {
        setIsTokenPresent(false);
      }
    }, [token]);
  
    return isTokenPresent ? children : <p>Invalid token. Please log in again.</p>;
};
  
export default TokenVerification;
