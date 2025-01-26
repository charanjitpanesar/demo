import Cookies from "js-cookie";

export const formatDate = (date) => {
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