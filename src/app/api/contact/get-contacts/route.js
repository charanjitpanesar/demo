import dbConnect from "@/backend/config/db";

export async function GET(req, res) {
    if (req.method === "GET") {
        try {
            let where = addFilters(req);

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
    const db = await dbConnect();
    const collection = db.collection('contacts');
    return await collection.find(where).toArray();  
}

const addFilters = (req) => {
    const { searchParams } = new URL(req.url);
    let where = {};

    let search = searchParams.get('search');
    if(search) {
        where['$or'] = [
            {
                fullname: { 
                    $regex: search, 
                    $options: 'i' 
                }
            },
            {
                email: { 
                    $regex: search, 
                    $options: 'i' 
                }
            },
            {
                _id: { 
                    $regex: search.toString(), 
                    $options: 'i' 
                }
            }
        ]
    }

    let status = searchParams.get('status');
    if(status) {
        if(status == "publish") {
            where.status = {
                $eq: "1"
            };
        } else if (status == "unpublish") {
            where.status = {
                $eq: "0"
            };
        }
    }

    let createdAtFrom = searchParams.get('createdAtFrom');
    if(createdAtFrom) {
        createdAtFrom = new Date(`${createdAtFrom}T00:00:00Z`);
        where.created_at = {
            $gte: createdAtFrom,
        };
    }

    let createdAtTo = searchParams.get('createdAtTo');
    if(createdAtTo) {
        createdAtTo = new Date(`${createdAtTo}T23:59:59Z`);
        where.created_at = {
            $lte: createdAtTo,
        };
    }

    return where;
}