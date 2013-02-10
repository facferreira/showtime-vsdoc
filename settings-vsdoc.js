/// <var>When a plugin is loaded it will be so with an associated plugin object. The object can not be altered from the script (IE, no new properties can be defined on the object).</var>
var settings_ = {
    "createInt": function (id, title, initial, minimum, maximum, step, unit, handler) {
        /// <summary>
        ///     Shows a slider of integers to choose a value.
        /// </summary>
        /// <param name="id" type="String">
        ///     String that identifies the setting.
        /// </param>
        /// <param name="title" type="String">
        ///     Synopsis of the setting.
        /// </param>
        /// <param name="initial" type="Integer">
        ///     Integer that's the default value.
        /// </param>
        /// <param name="minimum" type="Integer">
        ///     Integer of the lowest possible value.
        /// </param>
        /// <param name="maximum" type="Integer">
        ///     Integer of the highest possible value.
        /// </param>
        /// <param name="step" type="Integer">
        ///     Integer that is added to the current value.
        /// </param>
        /// <param name="unit" type="String">
        ///     String identifying the unit of the value.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function that handles the current value saving it.
        /// </param>
    },
    "createString": function (id, title, initial, handler) {
        /// <summary>
        ///     Shows a text input field.
        /// </summary>
        /// <param name="id" type="String">
        ///     String that identifies the setting.
        /// </param>
        /// <param name="title" type="String">
        ///     Synopsis of the setting.
        /// </param>
        /// <param name="initial" type="String">
        ///     Initial value of string.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function that handles the current value saving it.
        /// </param>
    },
    "createBool": function (id, title, initial, handler) {
        /// <summary>
        ///     Shows a bool on/off setting
        /// </summary>
        /// <param name="id" type="String">
        ///     String that identifies the setting.
        /// </param>
        /// <param name="title" type="String">
        ///     Synopsis of the setting.
        /// </param>
        /// <param name="initial" type="Boolean">
        ///     Initial value of bool.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function that handles the current value saving it.
        /// </param>
    },
    "createMultiOpt": function (id, title, values, handler) {
        /// <summary>
        ///     Shows a multioption field (combobox style)
        ///     <para>Available from 3.3.328</para>
        /// </summary>
        /// <param name="id" type="String">
        ///     String that identifies the setting.
        /// </param>
        /// <param name="title" type="String">
        ///     Synopsis of the setting.
        /// </param>
        /// <param name="values" type="Object">
        ///     List of List objects describing each option. An example list looks like [['a', 'Alpha'], ['b', 'Beta', true]]. In this example the callback would be called with 'a' if 'Alpha' is selected and 'b' if 'Beta' is selected. The optional third per-item value denotes if the option is default.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function that handles the current value saving it.
        /// </param>
    },
    "createAction": function (id, title, handler) {
        /// <summary>
        ///     Shows an Action Button that executes a given function when clicked.
        ///     <para>Available from 3.99.47</para>
        /// </summary>
        /// <param name="id" type="String">
        ///     String that identifies the setting.
        /// </param>
        /// <param name="title" type="String">
        ///     Synopsis of the setting.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function that is executed when button is clicked.
        /// </param>
    },
    "createInfo": function (id, icon, text) {
        /// <summary>
        ///     Shows an information with an image next to it.
        /// </summary>
        /// <param name="id" type="String">
        ///     ID of the information (unused).
        /// </param>
        /// <param name="icon" type="String">
        ///     Image to show next to the text.
        /// </param>
        /// <param name="text" type="String">
        ///     Text to show.
        /// </param>
    },
    "createDivider": function (title) {
        /// <summary>
        ///     Creates a horizontal separator that identifies a new section.
        /// </summary>
        /// <param name="title" type="String">
        ///     The title of the new section.
        /// </param>
    },
    "destroy": function () {
        /// <summary>
        ///     Documentation not available yet.
        /// </summary>
    }
};