import CONSTANTS from "../constants"

export const registerUser = (data) => {
    return fetch(`${CONSTANTS.API_BASE}/user/sing-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'applictaion/json'
        },
        body:JSON.stringify(data)
    }).then(res => res.json())
}