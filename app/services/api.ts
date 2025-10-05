import {
    LoginUserData,
    RegisterUserData,
    VerifyUser,
} from '../types/authTypes';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const registerUser = async (userData: RegisterUserData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok)
            throw new Error(
                data.message ||
                    'An unknown error occurred during registration.',
            );
        return data;
    } catch (error) {
        console.error('Registration API Error:', error);
        throw error;
    }
};

export const loginUser = async (userData: LoginUserData) => {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        if (!response.ok)
            throw new Error(
                data.message || 'An unknown error occurred during Logging.',
            );
        return data;
    } catch (error) {
        console.error('LoggingIn API Error:', error);
        throw error;
    }
};

export const verifyUser = async (code: VerifyUser) => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch(`${BASE_URL}/auth/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ token, ...code }),
        });
        const data = await response.json();
        if (!response.ok)
            throw new Error(data.message || 'Verification Failed');
        return data;
    } catch (error) {
        console.error('Verification API Error:', error);
        throw error;
    }
};
export const ResendCode = async () => {
    const token = localStorage.getItem('authToken');

    try {
        const response = await fetch(
            `${BASE_URL}/auth/verify-email/resend-code`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        const data = await response.json();
        if (!response.ok)
            throw new Error(data.message || 'Failed To resend code.');
        return data;
    } catch (error) {
        console.error('Resend Code API Error:', error);
        throw error;
    }
};

export const userData = async () => {
    const token = localStorage.getItem('authToken');
    try {
        const response = await fetch(`${BASE_URL}/auth/user-data`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok)
            throw new Error(data.message || 'Failed To Load User Data.');
        return data;
    } catch (error) {
        console.error('Get User DAta API Error:', error);
        throw error;
    }
};

export const logout = async () => {
    const token = localStorage.getItem('authToken');
    if (!token) {
        console.error('Logout failed: No auth token found.');
        return;
    }
    try {
        const response = await fetch(`${BASE_URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        if (!response.ok) {
            console.warn(
                'Server logout failed, but proceeding with client-side logout.',
            );
        }

        return data;
    } catch (error) {
        console.error('Logout API Error:', error);
        throw error;
    }
};
