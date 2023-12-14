
import React from 'react';
import { Link } from 'react-router-dom'
import { MDBFooter,  MDBIcon } from 'mdb-react-ui-kit';


export default function footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

   

      <div className='text-center p-2' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © Created By:
   
        <h6 className='fw-bold'> Mohamed Nageh</h6>
       
      </div>
    </MDBFooter>
  );
}

