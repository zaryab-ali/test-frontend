import React, { useState } from 'react';
import axios from 'axios';

const MyForm = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        picture: '',
        gender: '',
        dob: '',
        profession: '',
        shoesize: '',
        haircolor: '',
        hairlength: '',
        waist: '',
        height: '',
        weight: '',
        casting: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("upper made it")
            const response = await axios.post('http://localhost:8080/api/models/all', formData);
            console.log("lower mader it")
            console.log('Response:', response.data);
            // Add your logic here after successful submission
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add Person</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.inputGroup}>
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Picture</label>
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Gender *</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <label style={{ marginRight: '10px' }}>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={formData.gender === 'male'}
                                onChange={handleChange}
                                style={{ marginRight: '5px' }}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={formData.gender === 'female'}
                                onChange={handleChange}
                                style={{ marginRight: '5px' }}
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div style={styles.inputGroup}>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Profession</label>
                    <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="">Select Profession</option>
                        <option value="comedian">Comedian</option>
                        <option value="actor">Actor</option>
                        <option value="actress">Actress</option>
                        <option value="model">Model</option>
                    </select>
                </div>
                <div style={styles.inputGroup}>
                    <label>Shoe Size</label>
                    <input
                        type="number"
                        name="shoesize"
                        value={formData.shoesize}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Hair Color</label>
                    <input
                        type="text"
                        name="haircolor"
                        value={formData.haircolor}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Hair Length</label>
                    <input
                        type="number"
                        name="hairlength"
                        value={formData.hairlength}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Waist Size</label>
                    <input
                        type="number"
                        name="waist"
                        value={formData.waist}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Height</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Weight</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <label>Casting</label>
                    <select
                        name="casting"
                        value={formData.casting}
                        onChange={handleChange}
                        style={styles.input}
                    >
                        <option value="">Select Casting</option>
                        <option value="movies">Movies</option>
                        <option value="commercials">Commercials</option>
                        <option value="newspaper">Newspaper</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </div>
                <button type="submit" style={styles.button} >Submit</button>

            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    heading: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        padding: '8px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    },
    button: {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer',
    },
};

export default MyForm;
