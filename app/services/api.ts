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
    try {
        const response = await fetch(`${BASE_URL}/auth/verify-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(code),
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
    try {
        const response = await fetch(
            `${BASE_URL}/auth/verify-email/resend-code`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({}),
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
