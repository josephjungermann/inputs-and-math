$("body").on("keyup keydown keypress change", ".item input", function (e) {
	let total = 0;
	//finds each item within a table row
	$("tr.item").each(function () {
		const $this_row = $(this);
		//finds the quantity in the row
		const quantity_field = $this_row.find(".qty");
		//defines qty as the value in quantity_field
		let qty = quantity_field.val();
		//same as qty
		const cost_field = $this_row.find(".cost");
		//same as qty
		let cost = cost_field.val();
		//grab the data for the tarriff for each row
		const tariff_pct = $this_row.data("tariff-percent");
		//make it into a number
		let pct = parseFloat(tariff_pct);
		//and make it a percentage instead of a whole number

		pct = pct / 100;
		//make them into numbers. we want floats because the input might not always be a whole #

		qty = parseFloat(qty);
		cost = parseFloat(cost);

		const pre_tariff_total = qty * cost;

		const post_tariff_total = (pre_tariff_total + (pre_tariff_total * pct));

		console.log(pre_tariff_total);
		console.log(post_tariff_total);
	});
});