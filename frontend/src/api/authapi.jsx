const BASE_URL = "http://localhost:3000/api";

const registerUser = async(userData)=>{
    const res = await fetch(`${BASE_URL}/auth/register`,{
        method:"POST",
          headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  if(!res.ok){
    throw new Error(data.message||"dang ky that bai")
  }
}
const loginUser =async(Credential)=>{
    const res = await fetch(`${BASE_URL}/auth/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(Credential),
    });
    const data = await res.json();
    if(!res.ok){
        throw new Error(data.message||"dang nhap that bai")
    }
    // luu token va thong tin nguoi dung khi login
    localStorage.setItem("token",data.token);
      if (data.userId) localStorage.setItem("userId", data.userId);

  return data;
};
const logoutUser=()=>{
    localStorage.removeItem("token");
    window.location.href="/login";
}

export{registerUser,loginUser,logoutUser};