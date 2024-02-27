import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { initializeAuth, onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  });
}
