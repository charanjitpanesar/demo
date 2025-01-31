import { checkVar, sendMailTemplate } from "@/backend/helpers";
import { add, modifyOne } from "@/backend/queries";

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

            let contactAdded = await add("contacts", contactData);

            if(contactAdded)
            {
                const mailSent = await sendMailTemplate(toEmail, type, codes);
                
                if(mailSent)
                {
                    modifyOne("contacts", contactAdded.insertedId, {mailSend: 1})
                    
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
                    modifyOne("contacts", contactAdded.insertedId, {mailSend: 0})
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