$("body").on("keyup keydown keypress change", ".item input", function (e) {
	let pre_tariff_total_sum = 0;
	let post_tariff_total_sum = 0;

	$("tr.item").each(function () {
		const $this_row = $(this);
		const quantity_field = $this_row.find(".qty");
		let qty = quantity_field.val();
		const cost_field = $this_row.find(".cost");
		let cost = cost_field.val();
		const tariff_pct = $this_row.data("tariff-percent");
		let pct = parseFloat(tariff_pct);

		if (qty === "" || cost === "") {
			return;
		}

		pct = pct / 100;
		// make them into numbers

		qty = parseFloat(qty);
		cost = parseFloat(cost);

		const pre_tariff_total = qty * cost;
		const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

		pre_tariff_total_sum = pre_tariff_total_sum + pre_tariff_total;
		post_tariff_total_sum = post_tariff_total_sum + post_tariff_total;

		console.log("Pre tariff total");
		console.log(pre_tariff_total);

		$this_row.find(".pre_total span").text(pre_tariff_total);

		console.log("Post tariff total");
		console.log(post_tariff_total);

		$this_row.find(".post_total span").text(post_tariff_total);
	}); //this ends the each loop

	console.log("Pre tariff total sum");
	console.log(pre_tariff_total_sum);

	$("#pre_total span").text(pre_tariff_total_sum);


	console.log("Post tariff total sum");
	console.log(post_tariff_total_sum);

	$("#post_total span").text(post_tariff_total_sum);
}); //ends the key press listener