import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/UseAuthContext';
import config from '../../config';

const Profile = () => {
    const { user, dispatch } = useAuthContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editValues, setEditValues] = useState({ name: user.userName, email: user.email });
    const [tempValues, setTempValues] = useState({ name: user.userName, email: user.email });
    const [errors, setErrors] = useState([]);
    const [succMessage, setSuccMessage] = useState("");

    const handleChange = (e) => {
        setTempValues({ ...tempValues, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setErrors([]);
        setSuccMessage("");

        const newEmail = tempValues.email.toLowerCase();

        try {
            const response = await fetch(`${config.apiUrl}/users/update`, {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: tempValues.name,
                    email: user.email,
                    newEmail: newEmail,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setErrors([data.error]);
                setIsEditing(false);
            } else {
                setSuccMessage("Updated Successfully");
                setEditValues({ name: data.updatedUser.name, email: data.updatedUser.email });
                setIsEditing(false);

                dispatch({ type: 'LOGIN', payload: { ...user, userName: data.updatedUser.name, email: data.updatedUser.email } });

                localStorage.setItem('user', JSON.stringify({ ...user, userName: data.updatedUser.name, email: data.updatedUser.email }));
            }
        } catch (err) {
            setErrors(['Failed to update profile.']);
        }
    };

    const handleEditClick = () => {
        setTempValues(editValues);
        setIsEditing(true);
        setSuccMessage("");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-700 via-orange-500 to-yellow-400 p-6 relative">
            <img src="/left.png" alt="Left Graphic" className="absolute left-10 w-[60vh] h-[70vh] transition-transform duration-500 hover:scale-110" />
            <img src="/right.png" alt="Right Graphic" className="absolute right-10 w-[60vh] h-[70vh] transition-transform duration-500 hover:scale-110" />
            <div className="bg-gray-900 shadow-2xl p-8 w-[350px] h-[550px] text-white transform transition-all duration-500 hover:scale-105 animate-pulse flex flex-col items-center border-4 border-orange-500 rounded-3xl relative z-10">
                <br />
                <h2 className="text-3xl font-extrabold text-orange-400 animate-pulse mb-6">Profile</h2>
                <br />
                <div className="space-y-6 w-full text-center">
                    <div className="flex flex-col items-center">
                        <label className="text-gray-400 text-lg">Name</label>
                        {isEditing ? (
                            <input type="text" name="name" value={tempValues.name} onChange={handleChange} className="w-3/4 p-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all animate-fadeIn rounded-md" />
                        ) : (
                            <p className="text-lg font-semibold text-orange-300">{editValues.name}</p>
                        )}
                    </div>
                    <br />
                    <div className="flex flex-col items-center">
                        <label className="text-gray-400 text-lg">Email</label>
                        {isEditing ? (
                            <input type="email" name="email" value={tempValues.email} onChange={handleChange} className="w-3/4 p-3 bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all animate-fadeIn rounded-md" />
                        ) : (
                            <p className="text-lg font-semibold text-orange-300">{editValues.email}</p>
                        )}
                    </div>
                </div>
                <br />
                <p className="text-sm text-gray-400 mt-6 animate-fadeIn">To change your password, log out and use "Forgot Password".</p>
                {succMessage && (
                    <div className="mt-4 p-3 bg-green-600 text-white text-center text-lg animate-fadeIn rounded-md">{succMessage}</div>
                )}
                {errors.length > 0 && (
                    <div className="mt-4">
                        {errors.map((error, index) => (
                            <div key={index} className="p-3 bg-red-600 text-white text-center text-lg animate-fadeIn rounded-md">{error}</div>
                        ))}
                    </div>
                )}
                <br /><br />
                <button className="mt-auto bg-orange-500 hover:bg-orange-600 text-white w-[70px] h-[50px] text-lg font-bold shadow-lg transition-all duration-300 hover:scale-110 animate-bounce rounded-md" onClick={isEditing ? handleSave : handleEditClick}>
                    {isEditing ? "Save" : "Edit"}
                </button>
            </div>
        </div>
    );
};

export default Profile;
