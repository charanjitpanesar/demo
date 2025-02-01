export async function GET(req, res) {
    try {
        let contacts = await getContacts(req, where);

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
}