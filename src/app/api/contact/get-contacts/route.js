import dbConnect from "@/backend/config/db";

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            const { searchParams } = new URL(req.url);

            let where = {};

            if(searchParams.get('search'))
            {
                where['$or'] = [
                    {
                        fullname: { 
                            $regex: searchParams.get('search'), 
                            $options: 'i' 
                        }
                    },
                    {
                        email: { 
                            $regex: searchParams.get('search'), 
                            $options: 'i' 
                        }
                    },
                    {
                        _id: { 
                            $regex: searchParams.get('search').toString(), 
                            $options: 'i' 
                        }
                    }
                ]
            }


            let contacts = await getContacts(where);

            if(contacts) {
                return Response.json(
                    {
                        status: true,
                        data: contacts,
                        message: "Data Fetched Successfully!",
                    }, 
                    {
                        status: 200,
                    }
                )
            } else {
                return Response.json(
                    {
                        status: true,
                        message: "Something's Went Wrong",
                    }, 
                    {
                        status: 400,
                    }
                )
            }

        } catch(error) {
            console.log(error)
            return Response.json(
                {
                    status: false,
                    message: "Something's Went Wrong",
                }, 
                {
                    status: 400,
                }
            )
        }
    } else {
        return Response.json(
            {
                status: false,
                message: "Method Not Allowed",
            }, 
            {
                status: 405,
            }
        )
    }
}

const getContacts = async (where = {}) => {
    console.log(where)
    const db = await dbConnect();
    const collection = db.collection('contacts');
    return await collection.find(where).toArray();  
}