import { Routes, Route } from "react-router-dom";

import { HomeScreen } from "./pages/home";
import { CreateScreen } from "./pages/create";
import { EditScreen } from "./pages/edit";
import { NotFoundScreen } from "./pages/notfound";
import { Header } from "./components/header";
import { ContextProvider } from "./context";

const App = () => {
	return (
		<ContextProvider>
			<Header />
			<Routes>
				<Route path="/" element={<HomeScreen />} />
				<Route path="/create" element={<CreateScreen />} />
				<Route path="/edit/:id" element={<EditScreen />} />
				<Route path="*" element={<NotFoundScreen />} />
			</Routes>
		</ContextProvider>
	);
};

export default App;
