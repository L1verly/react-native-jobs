import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
	containerSelectedJob: (selectedJob, item) => ({
		width: 250,
		padding: SIZES.xLarge,
		backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
		borderRadius: SIZES.medium,
		justifyContent: "space-between",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		padding: SIZES.medium,
		borderRadius: SIZES.small,
		backgroundColor: "#FFF",
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	},
	logoContainer: {
		width: 50,
		height: 50,
		backgroundColor: COLORS.white,
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	logImage: {
		width: "70%",
		height: "70%",
	},
	textContainer: {
		flex: 1,
		marginHorizontal: SIZES.medium,
	},
	jobName: {
		fontSize: SIZES.medium,
		fontFamily: "DMBold",
		color: COLORS.primary,
	},
	jobType: {
		fontSize: SIZES.small + 2,
		fontFamily: "DMRegular",
		color: COLORS.gray,
		marginTop: 3,
		textTransform: "capitalize",
	},
});

export default styles;
