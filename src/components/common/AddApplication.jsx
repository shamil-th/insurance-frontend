import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllapplications, getPolicies, postApplication } from '../../features/admin/AdminSlice';
import AddCss from './AddApplication.module.css'
import Alert from './Alert';

const AddApplication = ({ setModal }) => {

    const [salutation, setSalutation] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddess] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [age, setAge] = useState('');
    const [qualification, setQualification] = useState([]);
    const [nominee, setNominee] = useState('');
    const [relation, setRelation] = useState('');
    const [insuranceId, setInsuranceId] = useState('');
    const [profession, setProfession] = useState('');
    const imageRef = useRef(null);

    const [alert, setAlert] = useState(false);

    // const [viewPolicy, setViewPolicy] = useState(false)

    const policies = useSelector((state) => state.admin.policies);
    const status = useSelector((state) => state.admin.status);

    const dobCalc = (currentDob) => {
        setDob(currentDob);
        if (currentDob) {
            let dobParts = currentDob.split('-');
            console.log(dobParts, "dobParts");
            let year = parseInt(dobParts[0], 10);
            let month = parseInt(dobParts[1], 10) - 1;
            let day = parseInt(dobParts[2], 10);
            let dobs = new Date(year, month, day);
            let currentDate = new Date();

            let calcAge = currentDate.getFullYear() - dobs.getFullYear();
            console.log(dobs.getFullYear());
            if (currentDate.getMonth() < dobs.getMonth() || (currentDate.getMonth() === dobs.getMonth() && currentDate.getDate() < dobs.getDate())) {
                calcAge--;
            }
            setAge(calcAge);
        }

    }


    const qualifications = ["SSLC", "PLUS TWO", "Bachelor's", "Masters"];

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...qualification];
        if (event.target.checked) {
            updatedList = [...qualification, event.target.value];
        } else {
            updatedList.splice(qualification.indexOf(event.target.value), 1);
        }
        setQualification(updatedList);
    };

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPolicies());
    }, [dispatch])

    const resetForm = () => {

        setSalutation("");
        setName("");
        setEmail("");
        setAddess("");
        setGender("");
        setDob("");
        setAge("");
        setQualification("");
        setNominee("");
        setRelation("");
        setInsuranceId("");
        setProfession("");
        imageRef.current.value = '';

        // setModal(false);
    }

    const post = () => {

        const data = {
            salutation,
            name,
            email,
            address,
            gender,
            dob,
            age,
            qualification,
            nominee,
            relation,
            insuranceId,
            profession,
            avatar: imageRef.current.files[0]
        }
        dispatch(postApplication(data));
        let param = "";
        dispatch(getAllapplications(param))
        resetForm();
        setAlert(true);
    }

    const getDetails = async (id) => {
        setInsuranceId('')
        // setViewPolicy(false)
        await setInsuranceId(id)
        console.log("id", insuranceId)
        // setViewPolicy(true)
    }


    return (
        <>
            {!alert ?
                < div className={AddCss.app_form}>
            <button onClick={() => setModal(false)}>Close</button>
            <div className={AddCss.input_fields}>
                <input type="file" ref={imageRef} />
                <select name="salutation" id="salutation" value={salutation} onChange={(e) => setSalutation(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mis.">Mis.</option>
                </select>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <textarea rows='5' type="text" placeholder='address' value={address} onChange={(e) => setAddess(e.target.value)} />
                <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="select">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female" >Female</option>
                </select>
                <input type="date" placeholder='dob' value={dob} onChange={(e) => dobCalc(e.target.value)} />
                <input type="text" placeholder='age' value={age} disabled />
                <input type="text" placeholder='profession' value={profession} onChange={(e) => setProfession(e.target.value)} />
                <div>Qualification
                    {qualifications.map((quali, index) => (
                        < div key={index}>
                            <input type="checkbox" id={quali} value={quali} onChange={handleCheck} />
                            <label htmlFor={quali}>{quali}</label></div>
                    ))}
                </div>
                <input type="text" placeholder='nominee' value={nominee} onChange={(e) => setNominee(e.target.value)} />
                <select name="relation" id="relation" value={relation} onChange={(e) => setRelation(e.target.value)}>
                    <option value="">Select</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Spause">Spause</option>
                </select>
                {status === "succeeded" && <div><p>Select Policy</p>
                    {policies.map((policy) => (
                        <div key={policy._id}>
                            <label htmlFor={policy.insurance}>{policy.insurance}</label>
                            <input type="radio" placeholder='insuranceId' name='nominee' id={policy.insurance} value={policy._id} onChange={(e) => getDetails(e.target.value)} />
                            {policy._id === insuranceId && <div>
                                <p>{policy.amount}</p>
                                <p>{policy.details}</p></div>}
                        </div>
                    ))}
                </div>}
                <button onClick={() => post()}>Submit</button>
            </div>
        </div >:
    <div><Alert setAlert={setAlert} setModal={setModal}/></div>
}
        </>
    )
}

export default AddApplication