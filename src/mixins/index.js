export * from "./bp";
export * from "./colors";
export * from "./shadow";
export * from "./sizing";
export * from "./utility";

// --------------------------------------------------

export const truncate = () => `
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

export const bgImage = url => `
	background-size: cover;
	background-position: center center;
	background-image: url(${ url });
`;

export const clearfix = `
	&:before,
	&:after {
		content: "";
		display: table;
	}

	&:after {
		clear: both;
	}
`;
