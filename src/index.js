// Register the block, Function from Wordpress Version of react
import { registerBlockType } from "@wordpress/blocks";
// use the blockprops for the attributes on the html element for the editor and the frontend (classes, title, etc. Attributes)
import { useBlockProps } from "@wordpress/block-editor";
import "./style.scss";
import "./editor-style.scss";

// register the block
registerBlockType("dominic-vogl/firstblock", {
	edit: function () {
		return <p {...useBlockProps()}>Edit this Stuff!</p>;
	},
	save: function () {
		return <p {...useBlockProps.save()}>Save JSX this Stuff!</p>;
	},
});
