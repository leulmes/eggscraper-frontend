import "./App.css";
import { Input } from "./components/ui/input";
function App() {
	return (
		<div className="bg-[#f5f5f5] h-screen w-full">
			<div className="flex flex-col gap-5 m-auto">
				<div className="flex flex-col justify-center items-center gap-3">
					<h1 className="text-red-500 text-4xl">Eggzit!</h1>
					<h3>Leave expensive eggs behind!</h3>
				</div>

				<div className="flex flex-col gap-5 items-center justify-center">
					<Input placeholder="City, State Zipcode" className="w-1/2"></Input>
					<button className="cursor-pointer border border-black rounded-md px-1 py-1 bg-green-600 text-white">Eggsplore the prices!</button>
				</div>
			</div>
		</div>
	);
}

export default App;
