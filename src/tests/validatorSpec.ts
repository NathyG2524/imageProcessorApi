import validator from "../routes/api/validator";

describe("tests validator from the qurey", () =>{
	it("tests if size are specified", async () => {
		const error: string | null = await validator({
			filename: "fjord.jpg"
		});
		expect(error).toBe("Please specify size.");
	});
	it("tests if a height is valid", async () => {
		const error: string | null = await validator({
			filename: "fjord.jpg",
			width: "500",
			height: "-400"
		});
		expect(error).toBe("Please enter a valid height");
	});
	it("tests if width is valid", async () => {
		const error: string | null = await validator({
			filename: "fjord.jpg",
			width: "-500",
			height: "400"
		});
		expect(error).toBe("Please enter a valid width");
	});
	it("tests if file does not exits", async () => {
		const error: string | null = await validator({
			filename: "foo",
			width: "500",
			height: "400"
		});
		expect(error).toBe("File does not exists");
	});

});