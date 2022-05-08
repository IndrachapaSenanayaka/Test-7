import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import Doc from '../../../images/updateP.png'
import { toast } from 'react-toastify';


export default function UpdatePharmacist() {


    const [gender, setGender] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [nic, setNic] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [province, setProvince] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [pcode, setPcode] = useState("");
    const [img, setImg] = useState("");


    let { id } = useParams();


    useEffect(() => {
        function getPharmacist() {
            axios.get("http://localhost:8070/pharmacist/getPharmacist/" + id).then((res) => {
                setGender(res.data.gender);
                setFname(res.data.fname);
                setLname(res.data.lname);
                setNic(res.data.nic);
                setNumber(res.data.number);
                setEmail(res.data.email);
                setPassword(res.data.password);
                setProvince(res.data.province);
                setCity(res.data.city);
                setStreet(res.data.street);
                setPcode(res.data.pcode);
                setImg(res.data.img);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getPharmacist();
    }, []);


    const UpdatePharmacist = e => {
        e.preventDefault();


        const UpdatePharmacist = new FormData();

        UpdatePharmacist.append("gender", gender);
        UpdatePharmacist.append("fname", fname);
        UpdatePharmacist.append("lname", lname);
        UpdatePharmacist.append("nic", nic);
        UpdatePharmacist.append("number", number);
        UpdatePharmacist.append("email", email);
        UpdatePharmacist.append("password", password);
        UpdatePharmacist.append("province", province);
        UpdatePharmacist.append("city", city);
        UpdatePharmacist.append("street", street);
        UpdatePharmacist.append("pcode", pcode);
        UpdatePharmacist.append("img", img);

        axios.put("http://localhost:8070/pharmacist/updatePharmacist/" + id, UpdatePharmacist).then(() => {
            toast.success("Pharmacist details are updated successfully !!!", {
                position: toast.POSITION.TOP_CENTER
            })
        }).catch(() => {
            toast.error(" pharmacist details did not update. Please try again !!!", {
                position: toast.POSITION.TOP_CENTER
            })
        });
    };




    return (
        <div className="grid-container">
            <div className="left-7">
                <img className="DocImg" src={Doc} height="610" alt="DocImg" />
            </div>
            <div className="grid-item-2 item-1">
                <div className="scroll-item-1">
                    <div className="form-group mb-3">
                        <form encType="multipart/form-data" name="form1" onSubmit={UpdatePharmacist} className="was-validated" role="form" style={{ padding: "20px 80px 0px 80px;" }} >
                            <center><h1> Update Registration Details</h1> </center>
                            <ul className="form-style-1">

                                <div className="Form-group">
                                    <label className="form-label" >Select Title <span className="required" value={gender}>*</span></label>
                                    <select name="field4" className="form-control" rows="4" value={gender} onChange={e => setGender(e.target.value)} required>
                                        <option value="" selected disabled>--Select Title--</option>
                                        <option value="mr">Mr.</option>
                                        <option value="miss">Miss</option>
                                        <option value="mrs">Mrs</option>
                                    </select>
                                    <div className="invalid-feedback">A required field.</div>

                                </div>
                                <br />
                                <div className="form-group">
                                    <label className="form-label">First Name <span className="required">*</span></label>
                                    <input type="text" name="field1" className="form-control" autoComplete="off" value={fname} onChange={(e) => { setFname(e.target.value) }} required />
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div> <br />

                                <div className="form-group">
                                    <label className="form-label">Last Name <span className="required">*</span></label>
                                    <input type="text" name="field2" className="form-control" autoComplete="off" value={lname} onChange={(e) => { setLname(e.target.value) }} required />
                                    <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <br />

                                <div className="form-group">
                                    <label className="form-label">NIC Number <span className="required">*</span></label>
                                    <input type="text" name="field3" className="form-control" autoComplete="off" value={nic} pattern="[0-9]{12}" onChange={(e) => { setNic(e.target.value) }} required />
                                    <div className="invalid-feedback">Please fill out this field in the format example:199087650977.</div>
                                </div>
                                <br />




                                <div className="form-group">
                                    <label className="form-label" >Phone Number<span className="required">*</span></label>
                                    <input type="text" name="field5" className="form-control" autoComplete="off" value={number} pattern="[947][0-9]{10}" onChange={(e) => { setNumber(e.target.value) }} required />
                                    <div className="invalid-feedback">Please fill out this field in the format example:94788098760.</div>
                                </div>
                                <br />

                                <div className="form-group">
                                    <label className="form-label" for="inputEmail">E-mail <span className="required">*</span></label>
                                    <input type="email" name="field6" id="inputEmail" className="form-control" autoComplete="off" value={email} pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" onChange={(e) => { setEmail(e.target.value) }} required />
                                    <div className="invalid-feedback">Please enter email address in the format example:someone@example.com.</div>
                                </div>
                                <br />

                                <div className="form-group">
                                    <label className="form-label">Password <span className="required">*</span></label>
                                    <input type="password" name="field7" className="form-control" autoComplete="off" value={password} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$" onChange={(e) => { setPassword(e.target.value) }} required />
                                    <div className="invalid-feedback">Please enter password(include symbols,numbers,uppercase and lowercase letters.Password cannot be less than 8 characters. </div>
                                </div>
                                <br />

                                <div class="card2">
                                    <div className="form-group">
                                        <label className="form-label">Province <span className="required">*</span></label>
                                        <input type="text" name="field8" className="form-control" autoComplete="off" value={province} onChange={(e) => { setProvince(e.target.value) }} required />
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <label className="form-label">City <span className="required">*</span></label>
                                        <input type="text" name="field9" className="form-control" autoComplete="off" value={city} onChange={(e) => { setCity(e.target.value) }} required />
                                        <div className="invalid-feedback">Please fill out this field.</div>
                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <label className="form-label">Street <span className="required">*</span></label>
                                        <input type="text" name="field9" className="form-control" autoComplete="off" value={street} onChange={(e) => { setStreet(e.target.value) }} required />
                                        <div className="invalid-feedback">Please fill out this field.</div>

                                    </div>
                                    <br />

                                    <div className="form-group">
                                        <label className="form-label">Postal Code<span className="required">*</span></label>
                                        <input type="text" name="field10" pattern="[0-9]{5}" className="form-control" autoComplete="off" value={pcode} onChange={(e) => { setPcode(e.target.value) }} required />
                                        <div className="invalid-feedback">Please fill out this field in the format example:60000.</div>
                                    </div>
                                </div>
                                <br />


                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Upload Image <span className="required">*</span></label>
                                    <input type="file" filename="img" className="form-control" id="exampleFormControlInput1"
                                        onChange={(e) => { setImg(e.target.files[0]) }} required />
                                    <div className="invalid-feedback">Please upload an image.</div>
                                </div>
                                <br />


                                <br />
                                <div style={{ textAlign: 'center' }}>
                                    <button type="submit" className="button-71" role="button"><i className="fa-solid fa-file-pen"></i> Update </button>
                                    <button type="reset" className="button-71" ><i className="fa fa-trash"></i>Clear </button>
                                </div>


                            </ul>

                        </form>

                    </div>
                </div>
            </div>
        </div>

    )
}
