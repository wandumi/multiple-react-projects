import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import axios from "axios";

export default function Homepage() {
	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=800")
			.then((response) => {
				console.log(response.data);
			});
	}, []);
	return <Box></Box>;
}
