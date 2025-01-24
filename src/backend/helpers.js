import Cookies from "js-cookie";

export const postApi = async (url, data) => {
    let token = Cookies.get("au_to");

    let res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data),
    });

    return await res.json();
}

export const getApi = async (url) => {
    let token = Cookies.get("au_to");

    let res = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    return await res.json();
}

export const checkLogin = async () => {
    let res = await getApi("/api/auth/check-login");
    
    if(res.status) {
        return true;
    } else {
        return false;
    }
}