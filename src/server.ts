import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const dev = process.env.NODE_ENV === "development";

polka()
	.use(
		compression({ threshold: 0 }),
		sirv("static", { dev }),
		sapper.middleware(),
	)
	.listen(process.env.PORT || 3000, (err) => {
		if (err) console.error(err);
	});
