import { useNavigate } from 'react-router-dom';

const cardStyle = {
  width: '376px',
  height: '217px',
  left: '23px',
  top: '142px',
  background: ' linear-gradient(180deg, #0FF0FC 0%, #098F96 100%)',
  borderRadius: '37px'
}
const validateBtn = {
  position: "absolute",
  width: "199px",
  height: "64px",
  left: "111px",
  top: "419px",
  background: "linear-gradient(90deg, #0FF0FC 0%, #098F96 100%)",
  borderRadius: "18px",
  color:'white'
};



const CardDetail = () => {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const goToServices = () => {
    navigate('/services')
  }

  return (
    <div style={{ background: 'linear-gradient(to bottom, lightgray, #DBE9EF)' }}
      className="card-detail h-screen  rounded-md p-4 flex flex-col items-center">
      <div className="flex justify-between mb-3">
        <span
          onClick={goBack}
          className="text-3xl text-dark font-bold flex items-center space-x-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>

          <span>Add Card Details</span>
        </span>

      </div>
      <div className="card mt-5" style={cardStyle}>

      </div>

      <button onClick={goToServices} className='font-bold' style={validateBtn}>Validate </button>
    </div>
  );
};

export default CardDetail;