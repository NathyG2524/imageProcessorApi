import resize from "../routes/api/sharp";

it("tests if the image is resized or not", async () => {
	const imageprocessed = await resize({
		filename: "fjord.jpg",
		width: "600",
		height: "700"
	});
	expect(imageprocessed).toBe("./assets/images/full/cache/600x700fjord.jpg");
});
