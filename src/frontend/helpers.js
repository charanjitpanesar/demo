import Cookies from "js-cookie";

export const formatDate = (date) => {
  date = new Date(date);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
};

export const postApi = async (url, data) => {
  let token = Cookies.get("au_to");

  let res = await fetch(getUrl(url), {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(data),
  });

  return await res.json();
}

export const getApi = async (url, options = {}) => {
  let token = Cookies.get("au_to");

  try{
    let res = await fetch(getUrl(url), {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token ?? ""}`
        },
        ...options,
    });
    
    return await res.json();
  } catch(error) {
    if (error.name !== "AbortError") {
      return {
        status: false,
      }
    }
  }
}

export const checkLogin = async () => {
  let res = await getApi("/api/auth/check-login");
  
  if(res.status) {
      return true;
  } else {
      return false;
  }
}

export const handleInputChange = (e, state, stateFunction) => {
  stateFunction({
    ...state,
    [e.target.name]: e.target.value,
  });
}

export const getUrl = (url) => {
  try {
    const parsedUrl = new URL(url);
    if(!!parsedUrl.hostname) {
      return url;
    } else {
      return process.env.BASE_URL+url;
    }
  } catch (e) {
    return process.env.BASE_URL+url;
  }
}

export const handleBulkAction = async (url, selectedIds, type) => {
  let res = await bulkAction(url, selectedIds, type);
  if (res.status) {
    window.location.reload();
  }
};

export const bulkAction = async (url, ids, type) => {
  return await postApi(url, {
    ids: ids,
    type: type,
  });
};

export const handleStatusChange = async (url, id, status) => {
  return await postApi(url, {id: id, status: status});
}

// export const updateAdminToken = async () => {
//   await getApi("/api/auth/update-admin-token");
// }