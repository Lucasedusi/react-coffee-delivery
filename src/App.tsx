import { useEffect, useState } from "react";

function App() {
	const [count, setCount] = useState(() => {
		const savedItem = localStorage.getItem("dataKey");

		if (savedItem) {
			return JSON.parse(savedItem);
		}
	});

	useEffect(() => {
		localStorage.setItem("dataKey", JSON.stringify(count));
	}, [count]);

	function handlePlus() {
		setCount(count + 1);
	}

	function handleMenos() {
		setCount(count - 1);
	}

	return (
		<div>
			<button onClick={handlePlus}>aumentar</button>
			<button onClick={handleMenos} disabled={count <= 0}>
				Dimuir
			</button>
			<h1>{count}</h1>
		</div>
	);
}

export default App;
