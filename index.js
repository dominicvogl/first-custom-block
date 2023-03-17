var registerBlockType = wp.blocks.registerBlockType;
var createElement = wp.element.createElement;

registerBlockType("dominic-vogl/firstblock", {
	edit: function () {
		return createElement(
			"p",
			{
				className: "my-first-block",
			},
			"Hello World, step 1"
		);
	},
	save: function () {
		return createElement("p", null, "Save World, step 1");
	},
});
