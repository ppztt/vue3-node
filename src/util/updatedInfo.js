import axios from "axios";
const updatedInfo = (path, userForm) => {
    let Form = new FormData();
    for (let i in userForm) {
        Form.append(i, userForm[i]);
    }
    return axios.post(path, Form, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
}
export default updatedInfo