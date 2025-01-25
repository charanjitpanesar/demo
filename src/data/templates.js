const bookCall = {
    subject: "New Contact Request: Book A Call",
    message: `
    New Contact Request Received!
    
    Name: {fullname}
    Phone Number: {phonenumber}
    `,
};

const bookAppointment = {
    subject: "New Appointment Scheduled",
    message: `
      New Appointment Scheduled!
      
      Name: {fullname}
      Email: {email}
      Phone Number: {phonenumber}
      Appointment Time: {appointment}
    `,
  };

export const emailTemplates = {
    bookCall,
    bookAppointment,
}; 