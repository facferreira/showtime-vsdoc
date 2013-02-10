var page_ = {
    /// <field name='type' static='false' type='String'>
    ///     Type of the page.
    ///     <para>Supported values are:</para>
    ///     <para> * directory</para>
    ///     <para> * item</para>
    ///     <para> * video</para>
    /// </field>
    "type": null,

    /// <field name='contents' static='false' type='String'>
    ///     If type is 'directory' this can be used to hint the UI what type of items is being displayed so the UI can chose a way to layout the items.
    /// </field>
    "contents": null,

    /// <field name='loading' static='false' type='Boolean'>
    ///     Set to true if the page is loading. This is the default value. When set to true the user interface will display a throbber or similar animation telling the user that loading is in progress. Should be set to false by the plugin once the page have been filled with data.
    /// </field>
    "loading": null,

    /// <field name='source' static='false' type='String'>
    ///     Source URL for video content. Only relevant if page.type is set to "video"
    /// </field>
    "source": null,

    /// <field name='metadata' static='false' type='Object'>
    ///     Metadata of the current page.
    ///     <para>Some keys most important are:</para>
    ///     <para> * title: Title of the current page</para>
    ///     <para> * logo: Image that identifies the current page</para>
    ///     <para> * glwview: Path to a view file that defines the UI for the current page</para>
    ///     <para> * background: Back of the current page</para>
    /// </field>
    "metadata": null,

    /// <field name='entries' static='false' type='Integer'>
    ///     Number of total entries on the page when all item have been inserted. Only used for user presentation purposes.
    ///     <para>Note: This property must be set, otherwise addSearch will not show up.</para>
    /// </field>
    "entries": null,

    /// <field name='paginator' static='false' type='Function'>
    ///     If a function is assigned to this property, that function will be invoked when Showtime wants more items appended to the data model for, so called, paginated loading. If this property is not set Showtime will assume that the plugin populates the entire model during the initial page load.
    /// </field>
    "paginator": null,

    /// <field name='reorderer' static='false' type='Function'>
    ///     If a function is assigned to this property, that function will be invoked whenever an item of the pages changes position.
    /// </field>
    "reorderer": null,

    "appendItem": function (uri, type, metadata) {
        /// <summary>
        ///     Append an item to the page. This should be used to populate data when page.type == 'directory'
        /// </summary>
        /// <param name="uri" type="String">
        ///     URI to be opened when the item is activated (clicked)
        /// </param>
        /// <param name="type" type="String">
        ///     <para>Type of the item</para>
        ///     <para> * directory: Directory that can be browsed</para>
        ///     <para> * file: Any type of file or unknown file format</para>
        ///     <para> * video: Video file</para>
        ///     <para> * audio: Audio track</para>
        ///     <para> * image: Image that can be displayed</para>
        ///     <para> * album: Collection of audio tracks</para>
        /// </param>
        /// <param name="metadata" type="Object">
        ///     Additional information about the item
        /// </param>
        /// <returns type="Item Object"></returns>
    },

    "appendPassiveItem": function (type, data, metadata) {
        /// <summary>
        ///     Append a, so called, passive item to the page. This should be used to populate data when page.type == 'item'. These items are only used for informational purposes and do not necessarily have URIs associated with them.
        /// </summary>
        /// <param name="type" type="String">
        ///     Type of the item
        ///     <para>Some of the most used types are listed below:</para>
        ///     <para> * bodytext: Used for longer texts or descriptions</para>
        ///     <para> * divider: Horizontal separator</para>
        ///     <para> * label: Text line</para>
        ///     <para> * rating: Used to rate something</para>
        /// </param>
        /// <param name="data" type="String">
        ///     Content of the item
        /// </param>
        /// <param name="metadata" type="Object">
        ///     Metadata for the item
        /// </param>
        /// <returns type="Item Object"></returns>
    },

    "appendAction": function (type, data, enabled, metadata) {
        /// <summary>
        ///     No documentation available yet.
        /// </summary>
    },

    "appendModel": function (unknown) {
        /// <summary>
        ///     No documentation available yet.
        /// </summary>
    },

    "flush": function () {
        /// <summary>
        ///     Removes all items of the current page.
        /// </summary>
    },

    "error": function (errorMessage) {
        /// <summary>
        ///     A helper to switch the page in error mode and display the supplied error message.
        /// </summary>
        /// <param name="errorMessage" type="String">
        ///     Error message to show
        /// </param>
    },

    "onEvent": function (event, handler) {
        /// <summary>
        ///     Install an event handler for the current page. If event is 'null' all events will be passed to the handler. The first argument to the handler is a string with the event name.
        /// </summary>
        /// <param name="event" type="String">
        ///     Name of the event to associate to the handler.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function to be executed when event is called.
        /// </param>
    },

    "dump": function () {
        /// <summary>
        ///     Cause Showtime to print a dump of the property tree representing the page to the console.
        /// </summary>
    }
};