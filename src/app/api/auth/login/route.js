import dbConnect from "@/backend/config/db";
import bcrypt from 'bcrypt';

export async function POST(req, res) {
    console.log(req.method)
  if (req.method === "POST") {
    const { email, password } = await req.json();
    
    if (!email || !password) {
      return Response.json(
        {
          status: false,
          message: "Email and password are required",
        }, 
        {
          status: 400,
        })
    }
    
    try {
      const db = await dbConnect();
      const collection = db.collection('admins');
      let admin = await collection.findOne({email: email});
      const match = await bcrypt.compare(password, admin.password);

      if(match) {
        return Response.json(
          {
            status: true,
            message: "Logged In Successfully",
          }, 
          {
            status: 200,
          })
      } else {
        return Response.json(
          {
            status: false,
            message: "Invalid Credentials!!!",
          }, 
          {
            status: 403,
          })
      }
    } catch (error) {
      console.log(error)
      // return res.status(500).json({ message: "Server error", error });
    }

    return Response.json({status: true})

  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
