import React, { useRef,useState } from 'react'
import { useDispatch } from 'react-redux'
import { postApplication } from '../../features/admin/AdminSlice'

const AddApplication = () => {
    const [salutaion, setSalutation] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddess] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [qualification, setQualification] = useState('')
    const [nominee, setNominee] = useState('');
    const [relation, setRelation] = useState('');
    const [insuranceId, setInsuranceId] = useState('');
    const imageRef = useRef(null);

    let dispatch =useDispatch();

    const post = () => {
        const data = {
            salutaion,
            name,
            email,
            address,
            gender,
            dob,
            qualification,
            nominee,
            relation,
            insuranceId,
            // imageRef:image.current.files[0]
        }
        dispatch(postApplication());
    }

    return (
        <div>
            <div>
                <input type="file" ref={imageRef} id='image' value={salutaion} onChange={(e) => setSalutation(e.target.value)}/>
                <select name="salutaion" id="salutaion">
                    <option value="Mr.">Mr.</option>
                    <option value="Mis.">Mis.</option>
                </select>
                <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder='address' value={address} onChange={(e) => setAddess(e.target.value)} />
                <input type="text" placeholder='gender' value={gender} onChange={(e) => setGender(e.target.value)} />
                <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="Male">Male</option>
                    <option value="Female" >Female</option>
                </select>
                <input type="date" placeholder='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
                <input type="text" placeholder='qualification' value={qualification} onChange={(e) => setQualification(e.target.value)} />
                <input type="text" placeholder='nominee' value={nominee} onChange={(e) => setNominee(e.target.value)} />
                <input type="text" placeholder='relation' value={relation} onChange={(e) => setRelation(e.target.value)} />
                <input type="text" placeholder='insuranceId' value={insuranceId} onChange={(e) => setInsuranceId(e.target.value)} />

            </div>
        </div>
    )
}

export default AddApplication