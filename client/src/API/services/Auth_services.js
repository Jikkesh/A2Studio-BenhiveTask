import { login, signup } from "../Api";

export async function login_service(body, handleLogin, navigate) {
    try {
        const response = await login(body);
        if (response.data && response.data.token) {
            const token = response.data.token;
            alert("Hey User, Login Success");
            handleLogin(token);
            navigate("/");
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert(error.message);
        throw error;
    }
}

export async function signup_service(body, navigate) {
    try {
        const response = await signup(body);
        if (response.status === 200) {
            alert("Signup Success, Now login to be a user");
            navigate("/login");
        } else {
            console.error('Signup failed:', response);
            throw new Error("Signup failed");
        }
    } catch (error) {
        console.error('Error during signup:', error);
        throw error;
    }
}