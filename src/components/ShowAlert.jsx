import { FaPhone, FaTimes, FaWhatsapp } from "react-icons/fa";
function ShowAlert({ showAlert, setShowAlert }) {
  if (!showAlert) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl shadow-2xl w-80">
        <div className="bg-white rounded-2xl p-6 text-center">
          <button
            onClick={() => setShowAlert(false)}
            className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
          >
            <FaTimes size={20} />
          </button>

          <h2 className="text-xl font-bold text-gray-800 mb-4">
            تواصل معنا عبر
          </h2>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/966548415191?text=مؤسسه الاخلاص"
              className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              <FaWhatsapp size={18} /> واتساب
            </a>

            <a
              href="tel:+966548415191"
              className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
            >
              <FaPhone size={18} /> اتصال
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowAlert;
