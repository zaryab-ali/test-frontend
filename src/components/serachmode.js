import React, { useState } from 'react';
import axios from 'axios';
import Card from './card';

const SerachModel = () => {
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

    const [resp,setResp] = useState([]);

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

            const filteredData = Object.fromEntries(
                Object.entries(formData).filter(([_, value]) => value !== '')
            );
            const queryString = new URLSearchParams(filteredData).toString();
            console.log(queryString);
            const response = await axios.get(`http://localhost:8080/api/models/all/search?${queryString}`);
            setResp(response.data);
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>Get Person Data</h2>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
                <div style={{ marginBottom: '10px' }}>
                    <label>First Name *</label>
                    <input
                        type="text"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Picture</label>
                    <input
                        type="text"
                        name="picture"
                        value={formData.picture}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                {/* Add more fields similarly */}
                <div style={{ marginBottom: '10px' }}>
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
                <div style={{ marginBottom: '10px' }}>
                    <label>Date of Birth</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Profession</label>
                    <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    >
                        <option value="">Select Profession</option>
                        <option value="comedian">Comedian</option>
                        <option value="actor">Actor</option>
                        <option value="actress">Actress</option>
                        <option value="model">Model</option>
                    </select>
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Shoe Size</label>
                    <input
                        type="number"
                        name="shoesize"
                        value={formData.shoesize}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{marginBottom: "10px"}}>
                    <label>Hair Color</label>
                    <input
                        type="text"
                        name="haircolor"
                        value={formData.haircolor}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Hair Length</label>
                    <input
                        type="number"
                        name="hairlength"
                        value={formData.hairlength}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Waist Size</label>
                    <input
                        type="number"
                        name="waist"
                        value={formData.waist}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Height</label>
                    <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Weight</label>
                    <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label>Casting</label>
                    <select
                        name="casting"
                        value={formData.casting}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc', boxSizing: 'border-box' }}
                    >
                        <option value="">Select Casting</option>
                        <option value="movies">Movies</option>
                        <option value="commercials">Commercials</option>
                        <option value="newspaper">Newspaper</option>
                        <option value="magazines">Magazines</option>
                    </select>
                </div>
                <button type="submit" style={{ padding: '10px', border: 'none', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Get Data</button>
            </form>



            <div>
            <h2>Person Data</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {resp.map((person, index) => (
                    <Card key={index} person={person} />
                ))}
            </div>
        </div>

        </div>
    );
};

export default SerachModel;
