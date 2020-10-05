import { useState, useEffect } from "react";
export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const isMobile = windowSize.width < 640;
	const isTablet = !isMobile && windowSize.width < 1008;
	const isDesktop = !isTablet;
	return {
		windowSize,
		isMobile,
		isTablet,
		isDesktop,
	};
};
