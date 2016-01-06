(function registerElement(ROOT_ELEMENT) {

	Polymer({
		is: 'native-title-bar',

		created: onElementCreated,
		attached: onElementAttached,
		ready: onElementReady,
		detached: onElementDetached,

		properties: {
			platform: {
				type: String,
				value: '',
				reflectToAttribute: true,
			},
			design: {
				type: String,
				value: '',
				reflectToAttribute: true,
			},
			title: {
				type: String,
				value: require('electron').remote.getCurrentWindow().getTitle(),
				notify: true,
				reflectToAttribute: true
			},
			debuggable: {
				type: Boolean,
				value: false,
				notify: true,
				reflectToAttribute: true
			},
		},

	});

	function onElementCreated() {

	}

	function onElementAttached() {

	}

	function onElementReady() {

	}

	function onElementDetached() {

	}

}) (document.querySelector('html'));
