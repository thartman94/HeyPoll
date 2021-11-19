import "tailwindcss/tailwind.css";
import { AppProvider } from "../components/AppContext";
import "../styles/global.css";
// import "/styles/app.pcss";

function MyApp({ Component, pageProps }) {
	return (
		<AppProvider>
			<Component {...pageProps} />;
		</AppProvider>
	);
}

export default MyApp;
