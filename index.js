module.exports = (fotno) => {
	// Modules may have one or more configuration objects that need to be saved in .fotnorc, a user-specific file
	//   with preferences etc. To let fotno know there is such an object, use Fotno#registerConfiguration.
	// The example below sets the favourite color to blue by default. It will refuse to save the configuration while
	//   your favourite color is red.
	const configuration = fotno.registerConfiguration(
		// The name of a configuration object will be the property name of the object serialized to .fotnorc
		'example-config',

		// The default value doesn't necessarily have to be an object
		{ favouriteColor: 'blue' },

		// The serialization callback may use the current configuration value, or serialize data from any other context.
		//   If the callback returns null, the configuration value is not saved/removed from .fotnorc.
		// If no serialization callback is given, the current configuration value is simply JSON serialized.
		(value) => {
			return value.favouriteColor === 'red'
				? null
				: value;
		});

	// fotno is a collection of commands that the user can call from his/her terminal. Thus, registering a new command
	//   is the core business of any fotno module. Use Fotno#registerCommand to create a new Command instance according
	//   to the ask-nicely library (github.com:wvbe/ask-nicely). A command may have options and parameters.
	// The example below just does some simple logging, and has no options or parameters.
	const exampleCommand = fotno.registerCommand(
		// The following command name will allow users to use this command by typing `fotno example` in their console
		'example',

		// The controller function always receives the Request object (contains the options, parameters and code
		//   context.
		// In fotno the controller also receives a response object, which is an instance of speak-softly
		//   (github.com:wvbe/speak-softly), which allows you to log output to the terminal in a readable manner,
		//   visually consistent with the rest of fotno.
		(request, response) => {
			response.caption('example fotno module');
			response.log('This is an example command in an example fotno module. Even the logging here is exemplary.');

			response.caption('helpful links');
			response.list([
				'https://github.com/wvbe/ask-nicely',
				'https://github.com/wvbe/speak-softly'
			]);

			response.caption('configuration');
			response.properties(configuration);
		});
};
