/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const ui = require("ui-lib/library");

const control = {
	boosting: false
};
global.boostControl = control;

ui.addTable("side", "boost-control", table => {
	table.background(Tex.buttonTrans);

	const button = table.button("Not Boosting", () => {
		control.boosting = !control.boosting;
		button.setText(control.boosting ? "Boosting" : "Not Boosting");
		table.background(Tex[control.boosting ? "buttonOver" : "buttonTrans"]);
	}).width(120).get();
});

Events.run(Trigger.update, () => {
	Vars.player.boosting = control.boosting;
});
