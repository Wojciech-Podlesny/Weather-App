import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type ErrorToastProps = {
	message: string
}

const ErrorToast = ({ message }: ErrorToastProps) => {
	toast.error(message, {
		position: 'top-right',
		autoClose: 15000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

	return <ToastContainer/>
}

export { ErrorToast }

// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// type ToastProps = {
//   message: string;
//   type: 'success' | 'error'; // Typ powiadomienia
// }

// const CustomToast = ({ message, type }: ToastProps) => {
//   if (type === 'error') {
//     toast.error(message, {
//       position: 'top-right',
//       autoClose: 15000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   } else if (type === 'success') {
//     toast.success(message, {
//       position: 'top-right',
//       autoClose: 5000, // Krótszy czas dla powiadomień o sukcesie
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   }

//   return <ToastContainer />;
// }

// export { CustomToast };
