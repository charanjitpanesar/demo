import dbConnect from "@/backend/config/db";
import { checkVar, sendMailTemplate } from "@/backend/helpers";

export async function POST(req, res) {
    if (req.method === "POST") {
        try {
            const { searchParams } = new URL(req.url);

            const data = await req.json();
            const type = searchParams.get('type');

            let toEmail = "ashu669212@gmail.com";
            let codes = {
                "{fullname}": data.fullname,
                "{phonenumber}": data.phonenumber,
                "{appointment}": data.appointment,
                "{email}": checkVar(data.email) ? data.email : "",
            };

            let contactData = {
                fullname: data.fullname,
                phonenumber: data.phonenumber,
                email: data.email,
                type: type,
                appointment: data.appointment,
                created_at: new Date(),
                updated_at: new Date(),
            };

            let contactAdded = addContact(contactData);

            if(contactAdded)
            {
                const mailSent = await sendMailTemplate(toEmail, type, codes);

                if(mailSent)
                {
                    return Response.json(
                        {
                            status: true,
                            message: "Mail Send Successfully!",
                        }, 
                        {
                            status: 200,
                        }
                    ) 
                }
                else
                {
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
            }
            else
            {
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

const addContact = async (data) => {
    const db = await dbConnect();
    const collection = db.collection('contacts');
    return await collection.insertOne(data);  
}