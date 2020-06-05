var ui = require("ui-lib/library");

const control = {
	boosting: false
};
this.global.boostControl = control;

ui.addTable("side", "boost-control", table => {
	table.background(Tex.buttonTrans);

	const button = table.addButton("Not Boosting", run(() => {
		control.boosting = !control.boosting;
		button.setText(control.boosting ? "Boosting" : "Not Boosting");
		table.background(Tex[control.boosting ? "buttonOver" : "buttonTrans"]);
	})).width(120).get();
});

ui.once(() => {
	Events.on(EventType.Trigger.update, run(() => {
		Vars.player.isBoosting = control.boosting;
	}));
});
