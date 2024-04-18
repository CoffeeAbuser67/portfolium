export interface AuthServiceProps {
    login: (username: string, password: string) => any;
    isLoggedIn: boolean;
    logout: () => void;
    // refreshAccessToken: () => Promise<number | Error>;
    // register: (username: string, password: string) => Promise<any>;
}

