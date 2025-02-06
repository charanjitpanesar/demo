'use client'
import NavTop from "@/app/admin/components/navTop";
import ViewData from "@/app/admin/components/viewData";
import { formatDate, getApi } from "@/frontend/helpers";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
    const [data, setData] = useState(null);

    const getData = async () => {
        params = await params;
        let id = params.id;

        let res = await getApi(`/api/contact/${id}/get`);
        if(res.status) {
            setData(res.data);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <NavTop title="Contact" backUrl="/admin/contact-us"></NavTop>
            {
                data ?
                (<div className='right_inner top_spacing'>
                    <div className='left_side'>
                        <ViewData title="Contact">
                            <div className='card-body'>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Id</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data._id }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Full Name</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data.fullname }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Phone Number</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data.phonenumber }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Email</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data.email }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Type</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data.type }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Mail Sent</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ data.mailSent == 1 ? "Yes" : "No" }</div>
                                    </div>
                                </div>
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Appointment</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ formatDate(data.appointment) }</div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='card-footer'>
                                <div className='sub_heading'>Description</div>
                                <div className='desc'>jskldjljada</div>
                            </div> */}
                        </ViewData>
                    </div>
                    <div className='right_side'>
                        <ViewData>
                            <div className="card-body">
                                <div className='row_data'>
                                    <div className='left'>
                                        <div className='txt'>Created At</div>
                                    </div>
                                    <div className='right'>
                                        <div className='txt'>{ formatDate(data.created_at) }</div>
                                    </div>
                                </div>
                            </div>
                        </ViewData>
                    </div>
                </div>) : ""
            }
        </>
    )
}
export default Page;