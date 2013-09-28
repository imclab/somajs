(function(global) {

	'use strict';

	var ListMediator = function(target, tpl, model, dispatcher, templates, mediators) {

		dispatcher.dispatch('log', 'list mediator created');

		dispatcher.addEventListener('add', function() {
			target.appendChild(insertItem());
			mediators.support(target); // for IE
			dispatcher.dispatch('render');
		});

		dispatcher.addEventListener('remove', function(event) {
			model.remove(event.params);
			mediators.support(target); // for IE
		});

		function insertItem() {
			var item = model.add();
			var wrapper = document.createElement('div');
			wrapper.innerHTML = templates['tile-item.tpl.html'];
//			wrapper.innerHTML = '<div data-id="{{data.id}}">{{data.title}}<img data-src="{{data.img}}" /><button data-click="remove()"></button></div>';
//			wrapper.firstChild.setAttribute('data-mediator', 'item|get(' + item.id + ')');
			return wrapper.firstChild;
		}

	};

	// export
	global.tile = global.tile || {};
	global.tile.ListMediator = ListMediator;

})(this);