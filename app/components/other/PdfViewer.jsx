// import CPPL from '../files/CPPL Assignment 2.pdf';
import Navbar from '../navigation/Navbar';
// import PDF from '../public/assets/images/files/q6.dsa.pdf';

const PdfViewer = () => (
  <>
    <Navbar />
    <div className=" w-auto h-[100vh] overflow-y-auto flex items-center content-center">
      {/* <object data={PDF} type="application/pdf" height={100} /> */}
      <object
        data="http://africau.edu/images/default/sample.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        {/* <p>
            Alternative text - include a link
            <a href="http://africau.edu/images/default/sample.pdf">
              to the PDF!
            </a>
          </p> */}
      </object>
    </div>
  </>
);

export default PdfViewer;
