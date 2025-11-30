export const CSS_FLEX_COLUMN_CONTAINER = {
	display:"flex",
	flexDirection: "column",
}

export const CSS_FLEX_COLUMN = {
	minWidth:"100%", 
	maxWidth:"100%", 
	backgroundColor:"lightgreen"
}

export const CSS_FLEX_COLUMN_LAST = {
	minWidth:"100%", 
	width:"100%", 
	maxWidth:"100%", 
	backgroundColor:"purple", 
	flex: "1 0 auto",
	display:"flex",
	alignSelf: "stretch",
}

/*
https://stackoverflow.com/questions/15381172/
how-can-i-make-flexbox-children-100-height-of-their-parent

.flex-2-child {
    display: flex;
    align-items: stretch;
}
*/