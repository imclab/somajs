var ApplicationWire = new Class({

	Extends: soma.core.wire.Wire,

	init: function() {
		
	},

	updateMessage:function(message) {
		this.getView(ApplicationView.NAME).updateMessage(message);
	},

	dispose: function() {

	}

});
ApplicationWire.NAME = "Wire::ApplicationWire";