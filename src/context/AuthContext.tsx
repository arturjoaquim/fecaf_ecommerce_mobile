import React, { createContext, useContext, useState, useEffect } from 'react';

type AuthContextType = {
    user: string | null;
    signIn: (username: string) => void;
    signOut: () => void;
    isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);
    const signIn = (username: string) => {
        setUser(username);
    };

    const signOut = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                signIn,
                signOut,
                isAuthenticated: !!user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
